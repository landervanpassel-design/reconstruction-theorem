// Three-face risk-layer duality: numerical validation on ONE scalar coherence SDE.
// dV = (phi0 - c*s) dt + sigma0 dW, absorbed at delta. c=1.

// ---- seeded RNG: mulberry32 (exact 32-bit via Math.imul) ----
let _a = 0x9e3779b9 >>> 0;
function rnd() {
  _a = (_a + 0x6D2B79F5) | 0;
  let t = _a;
  t = Math.imul(t ^ (t >>> 15), 1 | t);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
let _have = false, _g = 0;
function randn() {
  if (_have) { _have = false; return _g; }
  let u1 = rnd(), u2 = rnd();
  if (u1 < 1e-12) u1 = 1e-12;
  const r = Math.sqrt(-2 * Math.log(u1)), th = 2 * Math.PI * u2;
  _g = r * Math.sin(th); _have = true; return r * Math.cos(th);
}

// ---- standard normal CDF ----
function erf(x) {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
const Phi = (x) => 0.5 * (1 + erf(x / Math.SQRT2));
// exact first-passage survival for dV=-theta dt + sigma dW, start D, absorb 0 (a=sigma^2)
function igSurvival(t, theta, D, a) {
  const sd = Math.sqrt(a * t);
  const p = Phi((theta * t - D) / sd) + Math.exp(2 * theta * D / a) * Phi(-(theta * t + D) / sd);
  return Math.min(1, Math.max(0, 1 - p));
}

// ---- model constants ----
const phi0 = 0.5, c = 1, h = 1, c0 = 0.5, sigma0 = 1, a_max = sigma0 * sigma0;
const V_T = 5, delta = 0.5, D = V_T - delta;
const s_star = (1 / c) * (phi0 + Math.sqrt(phi0 * phi0 + 2 * c * c * c0 / h));
const theta_star = c * s_star - phi0;
const g_star = h * s_star / c;
const u_VT = g_star * (V_T - delta);
const I_inf = theta_star * theta_star / (2 * a_max);
function J(t, theta) { const x = theta * t - D; return x <= 0 ? 0 : x * x / (2 * a_max * t); }

function simulate(driftUp, nTrials, dt, tMax, tGrid) {
  const survCount = tGrid.map(() => 0);
  let sum = 0, sum2 = 0, absorbed = 0;
  const maxSteps = Math.ceil(tMax / dt), sq = Math.sqrt(dt);
  for (let k = 0; k < nTrials; k++) {
    let V = V_T, t = 0, done = false;
    for (let i = 0; i < maxSteps; i++) {
      V += driftUp * dt + sigma0 * sq * randn(); t += dt;
      if (V < delta) { done = true; break; }
    }
    for (let j = 0; j < tGrid.length; j++) if (!(done && t <= tGrid[j])) survCount[j]++;
    if (done) { absorbed++; sum += t; sum2 += t * t; }
  }
  const meanTau = absorbed ? sum / absorbed : NaN;
  const sdTau = absorbed ? Math.sqrt(Math.max(0, sum2 / absorbed - meanTau * meanTau)) : NaN;
  return { meanTau, sdTau, absorbedFrac: absorbed / nTrials, surv: survCount.map(x => x / nTrials) };
}
function slope(xs, ys) {
  const n = xs.length; let sx = 0, sy = 0, sxx = 0, sxy = 0;
  for (let i = 0; i < n; i++) { sx += xs[i]; sy += ys[i]; sxx += xs[i] * xs[i]; sxy += xs[i] * ys[i]; }
  return (n * sxy - sx * sy) / (n * sxx - sx * sx);
}
// asymptotic log-slope of exact IG survival, numerically over a window
function igSlope(theta, tWin) {
  const xs = tWin, ys = tWin.map(t => Math.log(igSurvival(t, theta, D, a_max)) + 0.5 * Math.log(t));
  return -slope(xs, ys);
}

console.log("=== model constants ===");
console.log(`phi0=${phi0} c=${c} h=${h} c0=${c0} sigma0=${sigma0} a_max=${a_max} V_T=${V_T} delta=${delta} D=${D}`);
console.log(`s_star=${s_star.toFixed(5)} theta_star=${theta_star.toFixed(5)} g_star=${g_star.toFixed(5)} u(V_T)=${u_VT.toFixed(4)} I_inf=theta*^2/2a_max=${I_inf.toFixed(5)}`);

// ===== FACE 2a: optimality of s* (cost sweep) =====
console.log("\n=== FACE 2a: Pillar-II optimal schedule (cost sweep, N=40000, dt=0.01) ===");
console.log("s | theta | E[tau] sim | det D/theta | E[cost] sim | value F(s)*D");
const sGrid = [1.2, 1.4, 1.5, s_star, 1.8, 2.0, 2.5];
let bestS = null, bestC = Infinity;
for (const s of sGrid) {
  const th = c * s - phi0;
  const r = simulate(phi0 - c * s, 40000, 0.01, 400, []);
  const perStep = c0 + 0.5 * h * s * s;
  const eCost = perStep * r.meanTau, Fval = perStep / th * D;
  if (eCost < bestC) { bestC = eCost; bestS = s; }
  console.log(`${s.toFixed(4)} | ${th.toFixed(4)} | ${r.meanTau.toFixed(4)} | ${(D / th).toFixed(4)} | ${eCost.toFixed(4)} | ${Fval.toFixed(4)}`);
}
console.log(`-> empirical cost-minimizing s in grid = ${bestS.toFixed(4)} (theory s* = ${s_star.toFixed(4)}); min cost ~ u(V_T)=${u_VT.toFixed(4)}`);

// ===== FACE 1: engine tail + resilience exponent at optimal margin =====
console.log("\n=== FACE 1: engine Bernstein tail & resilience exponent (theta*, N=500000, dt=0.01) ===");
const tG = [5, 6, 7, 8, 9, 10, 12, 14, 16];
const benign = simulate(phi0 - c * s_star, 500000, 0.01, 60, tG);
console.log(`absorbed=${benign.absorbedFrac.toFixed(5)}  E[tau]=${benign.meanTau.toFixed(4)} (det D/theta*=${(D / theta_star).toFixed(4)}, exact IG mean=${(D / theta_star).toFixed(4)})  sd=${benign.sdTau.toFixed(3)} (IG sd=${Math.sqrt(D / (theta_star ** 3)).toFixed(3)})`);
console.log("t | empirical P(tau>t) | exact IG | Bernstein e^{-J(t)} | below bound?");
for (let j = 0; j < tG.length; j++) {
  const t = tG[j], be = Math.exp(-J(t, theta_star)), ig = igSurvival(t, theta_star, D, a_max);
  console.log(`${t} | ${benign.surv[j].toExponential(3)} | ${ig.toExponential(3)} | ${be.toExponential(3)} | ${benign.surv[j] <= be ? "yes" : "NO"}`);
}
{
  const idx = tG.map((t, j) => [t, j]).filter(([t, j]) => t >= 7 && t <= 14 && benign.surv[j] * 500000 >= 30);
  const xs = idx.map(([t]) => t), ys = idx.map(([t, j]) => Math.log(benign.surv[j]) + 0.5 * Math.log(t));
  const slEmp = -slope(xs, ys), slIG = igSlope(theta_star, xs);
  console.log(`-> resilience exponent over t in [${xs[0]},${xs[xs.length - 1]}]: empirical=${slEmp.toFixed(4)}, exact-IG=${slIG.toFixed(4)}, asymptotic theta*^2/2a_max=${I_inf.toFixed(4)}`);
}

// ===== FACE 3: robust rate & LD price under worst-case platform pull =====
console.log("\n=== FACE 3: robust resilience & LD price (platform pull P=0.5, N=500000, dt=0.01) ===");
const P_plat = 0.5, theta_rob = theta_star - P_plat;
const I_inf_rob = theta_rob * theta_rob / (2 * a_max), Pi_LD = I_inf - I_inf_rob;
const tGr = [8, 10, 12, 14, 16, 18, 20, 24];
const robust = simulate(phi0 - c * s_star + P_plat, 500000, 0.01, 100, tGr);
console.log(`theta_rob=${theta_rob.toFixed(5)}  absorbed=${robust.absorbedFrac.toFixed(5)}  E[tau]=${robust.meanTau.toFixed(4)} (det D/theta_rob=${(D / theta_rob).toFixed(4)})`);
console.log("t | empirical P(tau>t) | exact IG(theta_rob)");
for (let j = 0; j < tGr.length; j++) console.log(`${tGr[j]} | ${robust.surv[j].toExponential(3)} | ${igSurvival(tGr[j], theta_rob, D, a_max).toExponential(3)}`);
{
  const idx = tGr.map((t, j) => [t, j]).filter(([t, j]) => t >= 10 && t <= 20 && robust.surv[j] * 500000 >= 30);
  const xs = idx.map(([t]) => t), ys = idx.map(([t, j]) => Math.log(robust.surv[j]) + 0.5 * Math.log(t));
  const slEmp = -slope(xs, ys), slIG = igSlope(theta_rob, xs);
  console.log(`-> robust resilience over t in [${xs[0]},${xs[xs.length - 1]}]: empirical=${slEmp.toFixed(4)}, exact-IG=${slIG.toFixed(4)}, asymptotic theta_rob^2/2a_max=${I_inf_rob.toFixed(4)}`);
  console.log(`-> LD price Pi_LD = I_inf - I_inf_rob = ${I_inf.toFixed(4)} - ${I_inf_rob.toFixed(4)} = ${Pi_LD.toFixed(4)}`);
}
console.log("\n=== done ===");
