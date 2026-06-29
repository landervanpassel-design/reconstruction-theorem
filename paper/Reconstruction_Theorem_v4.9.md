# Reconstruction after Extreme Distortion

### The Distortion Field as a Primitive, and Three Pillars of Driven Return: a Dynamical Engine, Optimal Sacrifice, and the Power Highway


**Version 4.9 ("Final Orbit") — the submission-ready reference paper.** A single large-deviation *risk layer* — the cost of staying distorted — is the **backbone** of this note: one object with three faces, read from each of the three pillars in turn (the engine's tail, Pillar I; the anti-reconstruction dual of optimal sacrifice, Pillar II; the Power Highway's robust rate, Pillar III), synthesised in §9.5 and validated numerically across all three faces on a single scalar model (§14.2). v4.9 brings the note to final submission-ready quality — the backbone is made visible from the first paragraph of the abstract and the opening sentence of the primitive section, every later section visibly serves it, the three-face validation is certified fully reproducible from an archived self-contained script, the positioning (§17) and origin mapping (§13.5) are carried forward and confirmed from v4.8, a crisp **Main Contributions** summary is added after the abstract, and the previously stacked change logs are condensed into one cumulative version history — all built on v4.8 while **preserving every stable label and altering no prior theorem, proposition, lemma, definition, equation, or numerical result, and introducing no new labelled material of any kind**. Throughout, conclusions are **conditional** on their stated assumptions; the platform model is a stylised worst-case device; the numerics verify the abstract toy-SDE / Freidlin–Wentzell statements only; and nothing here is empirical validation of the PDE / "love" formula or of any platform.

*Companion analytic core for the Geometric Protected Desire Equilibrium / Distortion-Field framework (cf. PDE preprint v6.0).*

---

## Major Changes from v4.8 (v4.9 — "Final Orbit": submission-ready)

v4.8 brought the note to near-submission reference quality. v4.9 is the **final editorial and submission pass**: it unifies the narrative around the risk-layer backbone, certifies reproducibility, adds a crisp contributions summary, carries forward and confirms the positioning and origin mapping, and condenses the version history — **without adding, removing, or altering any theorem, proposition, lemma, definition, equation, or numerical result.** Every stable label is preserved and **no new labelled material of any kind** is introduced; all changes are expository, organisational, and reproducibility-facing.

1. **Narrative unification and backbone prominence.** The abstract and the primitive section now name the large-deviation risk layer as the conceptual and mathematical backbone in their **first paragraph**, and every later section visibly serves or references it. The cross-references between the three faces (§9.5), the reproducible validation (§14.2), the origin mapping (§13.5), the roadmap (§16), the positioning (§17), and the implications (§18) are tightened into one continuous argument.
2. **Reproducibility confirmation (§14.2).** The Experiment E reproducibility note is made crystal-clear and self-contained: it names the archived script (`experiments/duality_sim.mjs`), the exact seed (`0x9e3779b9`), the per-panel trial counts ($N=40{,}000$ per cost-sweep point, $N=500{,}000$ per tail panel), the Euler–Maruyama parameters ($dt=0.01$), and the documented sources of numerical discrepancy (Euler absorption overshoot of order $\sqrt{dt}$; Monte-Carlo error of order $1/\sqrt{N}$). Every number in the three-faces-at-a-glance table and the tail panels is reproduced verbatim from the script, with **no free parameters and no post-hoc fitting**.
3. **Crisp Main Contributions summary.** A short bullet-point **Main Contributions** list is placed immediately after the abstract, stating the three distinctive elements in one line each — kept factual and conditional.
4. **Positioning (§17) and origin mapping (§13.5) carried forward and confirmed.** Both sections are retained unchanged from v4.8, which already made them submission-ready: Related Work states, for each of five clusters, what is classical and what this note adds, closing with the three distinctive contributions in one line; the origin mapping keeps consistent language ("structural analogue", "realises dynamically", "dynamical and adversarial complement") and states the PDE's four core commitments exactly as the PDE poses them.
5. **Cumulative change-log condensation.** The previously stacked v3.0 → v4.8 change logs are condensed into a single cumulative version history highlighting only the major structural and expository advances.
6. **Honesty stance unchanged and binding.** Every conclusion remains **conditional**; the numerics validate the **abstract toy-SDE / Freidlin–Wentzell statements only**; nothing here measures any platform, and nothing is empirical validation of the PDE / "love" formula.

---

## Cumulative version history (Original → v4.9)

The note evolved from an informal argument into a structured reference paper without ever changing its conditional conclusions or its stable labels. Only the major structural and expository advances are listed; every result carried forward retains its original label as a permanent citation key (see the note on numbering below).

- **Original → v2.0.** From an informal positive-probability argument to a preprint-standard, result-by-result treatment: the quantitative almost-sure return theorem with hitting-time moments, a high-probability time, a Bernstein tail, an explicit admissible noise field, and the multi-agent aggregate inequality, all under stated assumptions.
- **v3.0 — the Distortion Field as a primitive.** Reorganised around the distortion field $\Delta$ as the primitive object, with the quantitative return theorem (Theorem 4.1) as a self-contained *dynamical engine* and a single discussion section collecting optimal control (HJB / Riccati, Proposition 9.5), large deviations (Theorem 9.6, Proposition 9.7), mean-field descent (Proposition 9.2, Conjecture 9.3), and an operational measurement layer.
- **v4.0 — three co-equal pillars.** A structural re-architecture into five Parts and three co-equal pillars — the dynamical engine (Pillar I), a full variational theory of optimal sacrifice (Pillar II), and a **new** theory of endogenous distortion optimisation, the *Power Highway* (Pillar III: the robust-reconstruction Theorem P3.4, the price of the Power Highway, a major–minor mean-field formulation, and executed numerics) — with all v3.0 labels preserved as stable citation keys.
- **v4.5 — the large-deviation risk layer as a structural dual.** The large-deviation material was re-engineered into a risk layer spanning Pillars II and III: $J(t)$ recast as the value of an *anti-reconstruction* control problem with a structural Hamilton–Jacobi parallel to optimal sacrifice (§9.3); the path-space LDP upgraded to rigorous under standard hypotheses via the boundary-perturbation Lemma 9.8 (§9.2); a worst-case rate function $J_{\mathrm{rob}}$ with a uniform Bernstein bound, sharp in the scalar saturating-policy case (Proposition P3.11, §10.6); and the coherence-resilience exponents $\mathsf I_\infty$, $\mathsf I_\infty^{\mathrm{rob}}$ with the large-deviation price $\Pi^{\mathrm{LD}}$ (§9.4, §10.6). All v4.0 labels preserved; no new numerics.
- **v4.6 — cross-pillar synthesis.** The risk layer was named as **one object with three faces** in a new synthesis subsection (§9.5, the Part II→III hinge), with an explicit Theorem P3.4 → Proposition P3.11 link and no new labelled material.
- **v4.7 — backbone plus connective tissue.** The risk layer was elevated to the note's explicit backbone and surrounded with the connective tissue of a near-final paper: an executed three-face duality validation on one scalar SDE (Experiment E, §14.2), the scoped variational-duality Remark 9.3a, a *Path to full generality* (§16), a Related Work / positioning section (§17), the mapping back to the PDE's core commitments (§13.5), and a Broader Implications section (§18). Its only new labelled material was Remark 9.3a and Experiment E.
- **v4.8 — near-submission reference quality.** Full numerical reproducibility (archived self-contained script, reproducibility note, three-faces-at-a-glance table) in §14.2; a ranked roadmap to full generality (§16); polished five-cluster positioning (§17); a refined, terminologically consistent origin mapping (§13.5); and a unified narrative — with no new labelled material.
- **v4.9 (this version) — final submission-ready polish.** Narrative unification with the backbone visible from the first paragraph; reproducibility confirmed verbatim with no post-hoc fitting; a crisp Main Contributions summary after the abstract; positioning and origin mapping carried forward and confirmed from v4.8; and this condensed cumulative history — with no new labelled material.

---

> **A note on numbering (read once).** This is a re-architecture, so sections have been regrouped into five Parts and renumbered. To keep every internal and external citation valid, **all results carried over from v3.0 retain their original labels** (e.g. *Theorem 4.1*, *Proposition 9.5*, *Lemma 8.1*, *Proposition 9.2*) as permanent citation keys — these labels are stable identifiers, **not** section indices, so a result labelled "9.5" may now live in Part II rather than in a section numbered 9. Results **new to v4.0** carry "P3" (Power Highway) labels. The mapping table at the end of the overview shows where each carried result now sits. Results **new to v4.5** (the large-deviation risk layer) continue the natural numbering in their home Part — Lemma 9.8 in Part II §9, Definition P3.11a / Proposition P3.11 in Part III §10 — and appear in the mapping table. v4.6 adds only the expository synthesis §9.5 (the Part II→III hinge) and introduces **no** new theorem, proposition, lemma, or definition labels.

> **Honesty stance (unchanged and binding).** Every conclusion is **conditional** on its stated assumptions. No empirical, relational, or AI system — and no platform — is claimed to satisfy them. The platform model of Pillar III is a **stylised worst-case device**, not a description of any real system; in particular the assumption that engagement rewards distortion (the "distortion loading") is a modelling choice, not an empirical finding. The numerics (§14, §10.9) verify the **abstract** stochastic-analysis bounds on toy SDEs only. **Nothing in this note is, or may be read as, empirical validation of the PDE / "love" formula or of any platform.**

---

## Abstract

We take as primitive a **Distortion Field**: a smooth scalar functional $\Delta$ on the configuration space of a system, measuring incoherence, whose coherent states are its sublevel sets $\{\Delta<\delta\}$. A *high-distortion system* is one whose natural dynamics and structured noise can drive $\Delta$ arbitrarily large, so that coherence, once lost, is not restored automatically but must be *driven* back by a costly **sacrifice** control. This note develops the dynamics of such driven return in three co-equal pillars, tied together by a single **large-deviation risk layer** — the cost of staying distorted — which is the **backbone** of the note, read from each pillar in turn (§9.5) and validated numerically across all three faces (§14.2).

**Pillar I (the dynamical engine).** For a controlled Itô system on $\mathbb R^n$ (and, with bounded geometry, on a Riemannian manifold), all probabilistic content of reconstruction is funnelled through one scalar **Coherence Drift Inequality** $\mu_t\le-\theta<0$. This drives a quantitative almost-sure return theorem: the coherent set is reached almost surely with $\mathbb E[\tau_\delta-T]\le(\Delta(x_T)-\delta)/\theta$, a finite variance, a closed-form high-probability time, and an exponential (large-deviation) tail. The return rate $\theta=c\,s_\ast-M_\Phi-M_\sigma$ is explicit in the model constants, with a sharp threshold $s_\ast^{\mathrm{crit}}=(M_\Phi+M_\sigma)/c$. A directional Ornstein–Uhlenbeck field realises the structured-noise hypotheses with a non-asymptotic corrector lifting.

**Pillar II (optimal sacrifice).** Sacrifice is costly, so we characterise the *cheapest* reconstructing schedule. The exit-cost problem yields an HJB equation on the distortion field; its scalar reduction is a Riccati ODE whose drift-dominated limit gives an **exact constant optimal schedule** and an affine value function, confirmed by a direct deterministic minimisation over *all* measurable schedules. We show the constant schedule is optimal **independently of noise intensity** in the homogeneous model, and that genuine front-/back-loading is an inhomogeneity effect whose direction is set by where noise most assists descent. A large-deviation principle for the reconstruction time supplies the risk layer: its rate function is exactly the engine's tail exponent. We give this risk layer a control-theoretic reading — the rate function is the value of an *anti-reconstruction* problem (the least action an adversary spends to delay return), in a structural Hamilton–Jacobi parallel with optimal sacrifice — upgrade the path-space large-deviation principle to standard-hypotheses rigour, and read the rate as a coherence-resilience exponent measuring the systemic risk of prolonged incoherence.

**Pillar III (the Power Highway).** We model attention-maximising platforms as environments that **optimise distortion endogenously**: a recommendation policy shapes the natural-distortion drift to mine engagement, which (by modelling assumption) rewards higher distortion. Against this, the agent still controls only its sacrifice. We give a hierarchy of equilibrium concepts and a **rigorous robust-reconstruction theorem**: if the agent's sacrifice budget exceeds the platform's *maximal* distortion pull, $\theta_{\mathrm{rob}}=c\,s_\ast-M_\Phi^{\mathrm{rob}}-M_\sigma>0$, then the engine applies **uniformly over every admissible platform policy**, giving almost-sure return with all the Pillar-I bounds at rate $\theta_{\mathrm{rob}}$. We define the **price of the Power Highway** (the extra sacrifice an adversarial environment imposes), frame the **low-stakes, high-continuation stochastic game** that explains why small per-interaction incentives can sustain a strong distortion pull, give a **mean-field / major–minor** formulation, and verify the theorem numerically. A worst-case rate function $J_{\mathrm{rob}}$ makes this a large-deviation theorem: prolonged incoherence is exponentially rare (at a rate of at least $\theta_{\mathrm{rob}}^2/2a_{\max}$, sharp in the scalar saturating-policy case) exactly when $\theta_{\mathrm{rob}}>0$, and the **large-deviation price of the Power Highway** measures the resilience the optimised environment destroys. Across the pillars this risk layer is **one object with three faces** — the engine's tail (Pillar I), the anti-reconstruction dual of optimal sacrifice (Pillar II), and the robust rate $J_{\mathrm{rob}}$ with its resilience price (Pillar III) — synthesised in §9.5.

This large-deviation **risk layer is the backbone** of the note: one object — the cost of staying distorted — read from each pillar in turn (§9.5), **validated numerically across all three faces on a single scalar model** (§14.2) and made **fully reproducible** from an archived, self-contained script with a consolidated three-faces-at-a-glance table. Integrated across the pillars are an $N$-agent / mean-field reconstruction theory (a rigorous functional-descent Proposition with an isolated propagation-of-chaos conjecture), an operational layer estimating sacrifice from engagement data, a precise framework dictionary with two interface lemmas, an explicit mapping back to the Protected Desire Equilibrium's core commitments (§13.5), a positioning against the adjacent literature (§17), and a forward-looking discussion (§18). Throughout, conclusions are **conditional**; no empirical system is claimed to satisfy them, and nothing here is empirical validation of the PDE / "love" formula.

---

## Main Contributions

Relative to the adjacent literature (§17), and stated factually and **conditionally** on the assumptions throughout, this note contributes three distinctive elements, all organised around the risk-layer backbone:

- **A hard protected-desire floor, realised dynamically.** The coherent target $\mathcal C_\delta$ is reached almost surely from any level of distortion under sustained sacrifice ($\theta>0$) — a floor the engine *earns as an attractor* (Theorem 4.1), rather than imposes as a barrier.
- **An explicit three-face risk layer as backbone.** A single large-deviation object — the cost of staying distorted — unifies the engine's tail (Pillar I), the anti-reconstruction value dual to optimal sacrifice (Pillar II), and the robust rate (Pillar III) into one quantity (§9.5), validated numerically across all three faces on a single scalar toy SDE (§14.2).
- **Endogenous adversarial optimisation of distortion (the Power Highway).** The environment itself optimises the distortion drift; the agent still reconstructs almost surely whenever its sacrifice out-budgets the maximal distortion pull ($\theta_{\mathrm{rob}}>0$, Theorem P3.4), at a quantified *price of the Power Highway* and a *large-deviation price* $\Pi^{\mathrm{LD}}$ measuring the resilience the optimised environment destroys.

These are conditional mathematical results about abstract controlled SDEs; where they touch behaviour or AI they are explicitly analogical, and nothing here is empirical validation of the PDE / "love" formula or of any platform.

---

## The Distortion Field as a Primitive

This note is organised around one object taken as primitive, the Distortion Field, whose large-deviation **risk layer** — the cost of staying distorted — is the **backbone** running through all three pillars (§9.5).

**Definition (informal).** A **Distortion Field** on a configuration space $M$ is a smooth scalar functional $\Delta:M\to[0,\infty)$ whose value measures *incoherence* — distance from a designated coherent regime — and whose sublevel sets
$$
\mathcal C_\delta=\{x:\Delta(x)<\delta\}
$$
are the **coherent states**. The field is the lens through which every other structure is read: dynamics are classified by what they do to $\Delta$, control is the deliberate lowering of $\Delta$, noise is forcing that perturbs $\Delta$, and — in Pillar III — an *adversary* is anything that deliberately raises $\Delta$.

Three derived primitives organise the analysis.

1. **Coherence.** A state is coherent when $\Delta<\delta$. Reconstruction is the *event* $\{\Delta<\delta\}$ and the *time* $\tau_\delta$ at which it first (re)occurs after a disturbance.
2. **Distortion dynamics.** The *natural-distortion flow* $\Phi$ is the uncontrolled drift; alone, together with structured noise, it may *raise* $\Delta$ and need not restore coherence. A **high-distortion system** is precisely one in which $\Phi$ and the noise can carry the state arbitrarily far up the field, so coherence is not self-repairing.
3. **Reconstruction by sacrifice.** Coherence is recovered by a *sacrifice control* $S$ that is **coherence-aligned**, i.e. points down the field: $\langle S,\nabla\Delta\rangle\le -c\,s$. Sacrifice is costly (it works against the natural flow and against immediate reward), which is what makes its optimal scheduling (Pillar II) and its measurement (Part V) non-trivial — and what an adversary that *raises* $\Delta$ (Pillar III) tries to overwhelm.

**The three pillars.**

- **Pillar I — the dynamical engine (Part I).** All probabilistic content of reconstruction is funnelled through a single scalar inequality on the **coherence process** $V_t=\Delta(x_t)$ — the **Coherence Drift Inequality** $\mu_t\le-\theta<0$ (§3) — which drives the master result, the quantitative almost-sure return **Theorem 4.1** and its corollaries. The engine is a self-contained input–output device: input a sign condition on the coherence drift; output an a.s.-return guarantee, an expected-time law, a variance and high-probability time, and an exponential tail. **Pillars II and III treat the engine as a black box.**
- **Pillar II — optimal sacrifice (Part II).** *Given* the engine, what is the cheapest schedule that drives the required drift? This is a stochastic-control problem: an HJB equation, an exact drift-dominated optimum, the role of noise, and a large-deviation risk layer.
- **Pillar III — the Power Highway (Part III).** *Who supplies the drift?* If the environment itself optimises distortion — an attention economy that profits from incoherence — the natural flow $\Phi$ becomes an adversarial control. The pillar asks when the agent still reconstructs, and at what extra cost.

**Reading guide.**

- **Part I (§§1–7) — the engine.** Setup and assumptions (§§1–2), the scalar reduction (§3), the master theorem and corollaries (§4), an explicit admissible noise field (§5), technical foundations (§6), and remarks (§7).
- **Part II (§§8–9) — optimal sacrifice.** Stochastic control and the exact schedule (§8), the large-deviation risk layer — the rate function as an adversarial-control value, the (now standard-hypotheses rigorous) path-space LDP, a systemic-risk reading, and a cross-pillar synthesis that hinges into Pillar III (§9, closing with §9.5).
- **Part III (§10) — the Power Highway.** The two-layer model, equilibrium concepts, the robust-reconstruction theorem, the price, the worst-case rate function $J_{\mathrm{rob}}$ and the large-deviation price (§10.6), the low-stakes/high-continuation game, the mean field, and executed numerics.
- **Part IV (§11) — population reconstruction.** The $N$-agent system, the aggregate engine, the mean-field limit, and the bridge to the Power Highway mean field.
- **Part V (§§12–18) — operational layer, framework interface, numerics, scope, positioning, and outlook.** Measuring sacrifice (§12), the dictionary, interface lemmas, and the mapping back to the PDE's core commitments (§13, closing with §13.5), executed engine numerics and the **three-face duality validation** (§14, with the reproducible Experiment E in §14.2), summary (§15), limitations and the *Path to full generality* (§16), Related Work and positioning (§17), and Broader Implications and Future Directions (§18).

**Mapping of carried results (v3.0 → v4.0 location).**

| Result (stable label) | Statement | v3.0 section | v4.0 location |
|---|---|---|---|
| Lemma 3.1, Def 3.2, Prop 3.3 | Itô reduction; sufficient sacrifice; CDI | §3 | Part I, §3 |
| Theorem 4.1; Cor 4.4–4.7 | a.s. return + corollaries | §4 | Part I, §4 |
| Prop 5.1, Prop 5.3 | directional-OU field; corrector lifting | §5 | Part I, §5 |
| Prop 6.1 | non-explosion | §6 | Part I, §6 |
| Prop 9.4, Prop 9.5 | HJB verification; exact schedule | §9.2 | **Part II, §8** |
| Theorem 9.6, Prop 9.7 | scalar LDP; path-space LDP | §9.3 | **Part II, §9** |
| Cor 9.1, Prop 9.2, Conj 9.3 | aggregate CDI; mean-field descent; PoC | §9.1 | **Part IV, §11** |
| Lemma 8.1 | reconstruction interface | §8.4 | Part V, §13 |
| Eqs (1)–(17), (S), (SS), (CDI), (HJB) | — | various | preserved |
| **New (P3.x), Lemma P3.10** | Power Highway pillar; robust interface | — | **Part III, §10; §13** |
| **Lemma 9.8; Prop 9.7 (upgraded)** | path-space LDP made rigorous (boundary regularity) | — | **Part II, §9.2** |
| **§9.3, §9.4 (v4.5)** | $J(t)$ as adversarial-control value; resilience exponent | — | **Part II, §9** |
| **Def P3.11a, Prop P3.11; $\Pi^{\mathrm{LD}}$ (v4.5)** | worst-case rate $J_{\mathrm{rob}}$; LD price of the Power Highway | — | **Part III, §10.6** |
| **§9.5 (v4.6)** | cross-pillar synthesis: LD layer as one three-face object | — | **Part II→III bridge, §9.5** |
| **Remark 9.3a (v4.7)** | variational-duality remark: where the HJB↔rate parallel is an exact duality | — | **Part II, §9.3** |
| **§14.2 / Experiment E (v4.7)** | executed three-face duality numerics (one SDE) | — | **Part V, §14.2** |
| **§13.5 (v4.7)** | mapping to the PDE's core commitments | — | **Part V, §13.5** |
| **§17, §18 (v4.7)** | Related Work / positioning; Broader Implications | — | **Part V, §17–§18** |

---

# Part I — The Dynamical Engine (Pillar I)

## 1. Setup and notation

Let $M=\mathbb{R}^n$ (the manifold case is treated in Remark 6.3). On a filtered probability space $(\Omega,\mathcal{F},(\mathcal{F}_t)_{t\ge0},\mathbb{P})$ carrying a standard $m$-dimensional Brownian motion $W$, consider the controlled Itô stochastic differential equation
$$
dx_t \;=\; \underbrace{\Big(\Phi(x_t) + S\big(x_t,\,s(x_t,t)\big)\Big)}_{=:\,b(x_t,t)}\,dt \;+\; \sigma(x_t)\,dW_t ,
\qquad x_T=x\in M. \tag{1}
$$
Here:

- $\Phi:\mathbb{R}^n\to\mathbb{R}^n$ is the smooth **natural distortion flow** (in Pillar III it acquires a control argument, $\Phi(x,\pi)$);
- $S:\mathbb{R}^n\times[0,\infty)\to\mathbb{R}^n$ is the **sacrifice control**, parameterised by a measurable **sacrifice schedule** $s(x,t)\ge0$ (instantaneous sacrifice strength);
- $\sigma:\mathbb{R}^n\to\mathbb{R}^{n\times m}$ is the **noise dispersion**, with diffusion matrix $a(x):=\sigma(x)\sigma(x)^\top\succeq 0$.

> **Reading of the noise.** In the original write-up the noise was written informally as "$\sigma(x)\,\xi(x)\,dt$" with $\xi$ a process of positive quadratic variation $d\langle\xi\rangle_t\ge\kappa\,dt$. The mathematically unambiguous object this describes is an Itô diffusion driven by a martingale noise; we therefore take $(1)$ as the canonical form with $\xi\,dt\leftrightarrow dW_t$ and $\kappa$ folded into the ellipticity floor (Assumption (A1) below). The literal *coloured-noise* reading, with $\xi$ a genuine auxiliary process, is realised explicitly in §5.2 and shown to reduce to the same analysis.

The **Distortion Field** is a smooth function $\Delta\in C^2(M;[0,\infty))$ measuring incoherence. For $\delta>0$ the **coherent set** is the sublevel set
$$
\mathcal{C}_\delta:=\{x\in M:\Delta(x)<\delta\},
$$
and, fixing a coherent reference state $x_0$ with $\Delta(x_0)<\delta$ and a threshold $\Delta_{\mathrm{ext}}>\delta$, the **extreme-distortion regime** is the open superlevel set
$$
U_{\mathrm{ext}}:=\{x\in M:\Delta(x)>\Delta_{\mathrm{ext}}\}.
$$

**Sacrifice structural condition.** There is a constant $c>0$ with
$$
\big\langle S(x,s),\,\nabla\Delta(x)\big\rangle \;\le\; -\,c\,s
\qquad\text{for all }x\in M,\ s\ge0. \tag{S}
$$
The **cumulative sacrifice** over $[t_1,t_2]$ is $S_{\mathrm{cum}}(t_1,t_2):=\int_{t_1}^{t_2} s(x_u,u)\,du$.

The scalar **coherence process** is
$$
V_t:=\Delta(x_t). \tag{2}
$$
Reconstruction is the event $\{V_t<\delta\}$; the **reconstruction time** is
$$
\tau_\delta:=\inf\{t> T:\;V_t<\delta\}. \tag{3}
$$

## 2. Standing assumptions

Throughout, $\langle\cdot,\cdot\rangle$ and $|\cdot|$ are the Euclidean inner product and norm; $\nabla^2$ is the Hessian.

**(R) Regularity, growth, and admissible schedules.** $\Phi$, $\sigma$, and $S(\cdot,s)$ (locally uniformly in $s$) are locally Lipschitz with linear growth in $x$: there is $K>0$ with
$$
|\Phi(x)|+\|\sigma(x)\|\le K(1+|x|),\qquad |S(x,s)|\le K(1+|x|)(1+s).
$$
$\Delta\in C^2$ with $\nabla\Delta,\nabla^2\Delta$ locally bounded, and $\Delta$ is coercive ($\Delta(x)\to\infty$ as $|x|\to\infty$). A sacrifice schedule $s(\cdot,\cdot)\ge0$ is **admissible** if it is progressively measurable and locally bounded in $t$ (in particular the constant schedule $s\equiv s_\ast$ is admissible). For an admissible schedule the drift $b(\cdot,t)=\Phi+S(\cdot,s(\cdot,t))$ then has, on each finite horizon $[T,T']$, a deterministic linear-growth bound $|b(x,t)|\le K_{T'}(1+|x|)$; together with $\|\sigma\|\le K(1+|x|)$ this yields the one-sided bound $\langle x,b(x,t)\rangle+\tfrac12\|\sigma(x)\|^2\le C_{T'}(1+|x|^2)$ used for non-explosion (§6.1).

> Linear growth of $S$ in $x$ is assumed here directly: the sacrifice condition (S) constrains only $\langle S,\nabla\Delta\rangle$ and says nothing about $\langle x,S\rangle$, so it cannot by itself control growth of the state.

**(A1) Non-degenerate diffusion (ellipticity floor).** There is $\alpha>0$ with
$$
a(x)=\sigma(x)\sigma(x)^\top \;\succeq\; \alpha^2 I_n \qquad\text{for all }x\in M. \tag{A1}
$$
This is the rigorous form of the original "$d\langle\xi\rangle_t\ge\kappa\,dt$ together with $\sigma\ge\alpha$": it forces the noise to spread non-degenerately in every direction, with floor $\alpha^2$ (so $\kappa$ is absorbed, $\alpha^2 \leftrightarrow \kappa\,\sigma_{\min}^2$).

**(B) Uniform coherence-gradient bounds on $\{\Delta\ge\delta\}$.** With $a_V(x):=\big|\sigma(x)^\top\nabla\Delta(x)\big|^2$ (the diffusion coefficient of $V$),
$$
M_\Phi:=\!\!\sup_{\Delta(x)\ge\delta}\!\langle\nabla\Delta,\Phi\rangle<\infty,\quad
M_\sigma:=\!\!\sup_{\Delta(x)\ge\delta}\!\tfrac12\,\mathrm{tr}\!\big(a\,\nabla^2\Delta\big)<\infty,\quad
0\le a_{\min}\le a_V(x)\le a_{\max}<\infty. \tag{B}
$$
By (A1), $a_{\min}\ge\alpha^2\,\inf_{\Delta\ge\delta}|\nabla\Delta|^2$; if $\nabla\Delta\neq0$ off $\mathcal{C}_\delta$ then $a_{\min}>0$. (On a manifold of bounded geometry, (B) holds whenever $\Phi,\sigma,\nabla\Delta,\mathrm{Hess}\,\Delta$ are uniformly bounded on $\{\Delta\ge\delta\}$; see Remark 6.3.)

**(A2) Structured correlation.** There is a continuous $\rho:[0,\infty)\to(0,1]$, $\rho(0)=1$, such that the noise retains positive directional correlation toward the coherence direction $e(x):=-\nabla\Delta(x)/|\nabla\Delta(x)|$ over finite horizons. In the elliptic model $(1)$ this is *automatic* (Remark 7.3); in the explicit coloured-noise model of §5.2 it is verified directly with $\rho(h)=e^{-\lambda h}$.

> **Note.** The quantitative Theorem 4.1 below uses only (R), (B) and the sacrifice condition through the scalar **Coherence Drift Inequality** of §3. Assumptions (A1)/(A2) are what make the model *non-trivial* and are exactly what the positive-probability Corollary 4.7 (the original conclusion) needs.

## 3. Reduction: the Coherence Drift Inequality

All probabilistic content is funneled through one scalar inequality — the engine's single input. Recall $V_t=\Delta(x_t)$.

**Lemma 3.1 (Itô reduction).** *Under (R), and up to the explosion time, $V$ is a continuous semimartingale with*
$$
dV_t=\mu_t\,dt+dM_t,\qquad
\mu_t=\big\langle\nabla\Delta,\Phi+S\big\rangle+\tfrac12\,\mathrm{tr}\!\big(a\,\nabla^2\Delta\big)\Big|_{x_t},\qquad
dM_t=\big\langle\nabla\Delta(x_t),\sigma(x_t)\,dW_t\big\rangle, \tag{4}
$$
*where $M$ is a continuous local martingale with $d\langle M\rangle_t=a_V(x_t)\,dt$.*

*Proof.* Itô's formula applied to $\Delta\in C^2$ along $(1)$ gives exactly $(4)$; the bracket is $d\langle M\rangle_t=\nabla\Delta^\top a\,\nabla\Delta\,dt=a_V\,dt$. $\qquad\blacksquare$

**Definition 3.2 (Sufficient sacrifice).** A schedule $s(\cdot)$ satisfies the **sufficient-sacrifice condition** with margin $\theta>0$ on a (stochastic) interval $\mathcal{I}$ if
$$
s(x_t,t)\;\ge\; s_\ast:=\frac{M_\Phi+M_\sigma+\theta}{c}
\qquad\text{for all }t\in\mathcal{I}\cap\{V_t\ge\delta\}. \tag{SS}
$$

**Proposition 3.3 (Coherence Drift Inequality, CDI).** *Assume (R), (B), the sacrifice condition (S) and (SS) on $[T,\infty)$. Then, for all $t\ge T$ with $V_t\ge\delta$,*
$$
\mu_t\;\le\; M_\Phi+M_\sigma-c\,s_\ast \;=\; -\,\theta\;<\;0,
\qquad\text{and}\qquad d\langle M\rangle_t\le a_{\max}\,dt. \tag{CDI}
$$

*Proof.* On $\{V_t\ge\delta\}$, by (B) and (S), $\mu_t=\langle\nabla\Delta,\Phi\rangle+\langle\nabla\Delta,S\rangle+\tfrac12\mathrm{tr}(a\nabla^2\Delta)\le M_\Phi - c\,s(x_t,t)+M_\sigma \le M_\Phi+M_\sigma-c\,s_\ast=-\theta$, using (SS). The bracket bound is (B). $\qquad\blacksquare$

**Identification of the thresholds.** The return margin and the two thresholds of the original theorem are now explicit:
$$
\boxed{\;\theta = c\,s_\ast-M_\Phi-M_\sigma,\qquad
\alpha=\text{ellipticity floor in (A1)},\qquad
\beta = S_{\mathrm{cum}}\ \text{over the return window}=s_\ast\,\Lambda\;}
$$
where $\Lambda$ is the window length below. The **critical sacrifice level** at which the drift changes sign is
$$
s_\ast^{\mathrm{crit}}:=\frac{M_\Phi+M_\sigma}{c},\qquad\text{so}\qquad \theta=c\,(s_\ast-s_\ast^{\mathrm{crit}}),
$$
and (SS) is exactly $s_\ast>s_\ast^{\mathrm{crit}}$. Larger sacrifice $s_\ast$ (hence larger $\beta$) gives larger $\theta$, i.e. faster, more certain return — a monotone, quantitative dependence absent from the original, with a sharp threshold at $s_\ast^{\mathrm{crit}}$.

## 4. Almost-sure reconstruction with quantitative bounds

This section is the engine: input the Coherence Drift Inequality, output the full reconstruction guarantee. Every later pillar consumes these statements as a black box.

### 4.1 Almost-sure reconstruction with quantitative time bounds

**Theorem 4.1 (Reconstruction after extreme distortion — quantitative form).**
*Assume (R), (B), (S) and the sufficient-sacrifice condition (SS) with margin $\theta>0$. Let the system be in extreme distortion at time $T$, $V_T=\Delta(x_T)$ (in particular $x_T\in U_{\mathrm{ext}}$ is allowed, $V_T>\Delta_{\mathrm{ext}}$). Then:*

**(i) Almost-sure return.** $\ \mathbb{P}(\tau_\delta<\infty)=1.$

**(ii) Expected reconstruction time.**
$$
\mathbb{E}\big[\tau_\delta-T\big]\;\le\;\frac{V_T-\delta}{\theta},
$$
*and the expected time to first leave the extreme regime obeys $\mathbb{E}[\tau_{\mathrm{ext}}-T]\le (V_T-\Delta_{\mathrm{ext}})_+/\theta$, where $\tau_{\mathrm{ext}}=\inf\{t>T:V_t\le\Delta_{\mathrm{ext}}\}$.*

**(iii) Large-deviation tail.** *With $a_{\max}$ from (B), for every $t> (V_T-\delta)/\theta$,*
$$
\mathbb{P}\big(\tau_\delta-T>t\big)\;\le\;\exp\!\left(-\,\frac{\big(\theta t-(V_T-\delta)\big)^2}{2\,a_{\max}\,t}\right)
\;\xrightarrow[t\to\infty]{}\;\exp\!\Big(-\tfrac{\theta^2}{2a_{\max}}\,t\,(1+o(1))\Big).
$$
*(Degenerate convention: if $a_{\max}=0$ the martingale part vanishes, $V$ is non-increasing at rate $\ge\theta$ on $\{V\ge\delta\}$, and $\tau_\delta-T\le(V_T-\delta)/\theta$ holds deterministically; the right-hand side is then read as $0$ for $t>(V_T-\delta)/\theta$.)*

*Proof.*

**Non-explosion.** By (R), for an admissible schedule the drift and dispersion have finite-horizon linear growth, so with the Lyapunov function $\mathcal{V}(x)=1+|x|^2$ one has $\mathcal{L}_t\mathcal{V}\le C\,\mathcal V$ and Khasminskii's test yields a unique strong solution with no explosion (Proposition 6.1); thus $(4)$ holds for all $t\ge T$. Hence $V$ is a continuous semimartingale on $[T,\infty)$, and by path continuity $V_{\tau_\delta}=\delta$ on $\{\tau_\delta<\infty\}$.

**(ii) and (i).** Define the stopped, drift-compensated process
$$
N_t:=V_{t\wedge\tau_\delta}+\theta\,\big((t\wedge\tau_\delta)-T\big),\qquad t\ge T.
$$
By Lemma 3.1 and CDI, on $[T,\tau_\delta)$ we have $V_t\ge\delta$, so $dN_t=(\mu_t+\theta)\,dt+dM_t\le dM_t$; thus $N$ is a continuous local supermartingale. Localising along a reducing sequence and applying optional stopping then Fatou,
$$
\mathbb{E}\big[V_{t\wedge\tau_\delta}\big]+\theta\,\mathbb{E}\big[(t\wedge\tau_\delta)-T\big]=\mathbb{E}[N_t]\le N_T=V_T .
$$
Since $V_{s}\ge\delta$ for $s\le\tau_\delta$ (continuity gives $V_{t\wedge\tau_\delta}\ge\delta$),
$$
\delta+\theta\,\mathbb{E}\big[(t\wedge\tau_\delta)-T\big]\le V_T
\;\Longrightarrow\;
\mathbb{E}\big[(t\wedge\tau_\delta)-T\big]\le\frac{V_T-\delta}{\theta}.
$$
Letting $t\to\infty$ (monotone convergence) gives $\mathbb{E}[\tau_\delta-T]\le(V_T-\delta)/\theta<\infty$, which forces $\tau_\delta<\infty$ a.s., proving (i)–(ii). The extreme-exit bound is the identical argument with $\delta$ replaced by $\Delta_{\mathrm{ext}}$ and stopping at $\tau_{\mathrm{ext}}$.

**(iii).** Work with the **stopped** martingale $\widehat M_t:=M_{(T+t)\wedge\tau_\delta}-M_T$, whose bracket accrues only while $V\ge\delta$, so by (B),
$$
\langle\widehat M\rangle_t=\int_T^{(T+t)\wedge\tau_\delta}a_V(x_u)\,du\le a_{\max}\,t\qquad\text{a.s.}
$$
On the event $\{\tau_\delta-T>t\}$ we have $V_s\ge\delta$, hence $\mu_s\le-\theta$ (CDI), for **all** $s\in[T,T+t]$, and there $\widehat M_t=\widetilde M_t:=M_{T+t}-M_T$. Thus, on that event, $(4)$ gives
$$
\delta\le V_{T+t}=V_T+\int_T^{T+t}\!\mu_u\,du+\widetilde M_t\le V_T-\theta t+\widehat M_t,
$$
so $\{\tau_\delta-T>t\}\subseteq\{\widehat M_t\ge \theta t-(V_T-\delta)\}$ directly (no intermediate set $\{V_{T+t}\ge\delta\}$ is used — that inclusion would be false on paths that dipped below $\delta$ and returned). For $t>(V_T-\delta)/\theta$ the level $\lambda:=\theta t-(V_T-\delta)$ is positive, and the Bernstein inequality for a continuous martingale with a.s.-bounded bracket — $\exp\!\big(\eta\widehat M_t-\tfrac{\eta^2}{2}\langle\widehat M\rangle_t\big)$ is a supermartingale, optimised at $\eta=\lambda/(a_{\max}t)$ — gives $\mathbb{P}(\widehat M_t\ge\lambda)\le\exp(-\lambda^2/(2a_{\max}t))$. Hence $\mathbb{P}(\tau_\delta-T>t)\le\exp(-\lambda^2/(2a_{\max}t))$, which is (iii). $\qquad\blacksquare$

**Remark 4.2 (the original three steps, subsumed and strengthened).** The original architecture *(exit $\to$ restoring drift $\to$ structured return)* is recovered as a single monotone descent: the restoring drift (Step 2) is now the *quantitative* bound $\mu_t\le-\theta$; the exit from $U_{\mathrm{ext}}$ (Step 1) is the crossing of $\Delta_{\mathrm{ext}}$ at expected time $\le(V_T-\Delta_{\mathrm{ext}})_+/\theta$; and the structured return (Step 3) is the a.s. hitting of $\mathcal C_\delta$ with the tail (iii). No separate exit-time comparison is needed — the negative drift carries $V$ through $\Delta_{\mathrm{ext}}$ down to $\delta$.

**Remark 4.3 (sharpness).** If $a_V\equiv a$ is constant and $\mu_t\equiv-\theta$, the bounds (ii)–(iii) are those of Brownian motion with drift $-\theta$ hitting a level a distance $V_T-\delta$ below the start; (ii) is then an equality $\mathbb{E}[\tau_\delta-T]=(V_T-\delta)/\theta$ and $\tau_\delta-T$ is inverse-Gaussian. So the constants are of the correct order and cannot be improved without further structure. (This extremal case is the basis of the numerical check in §14.)

### 4.2 Quantitative corollaries

The supermartingale and martingale-tail machinery of Theorem 4.1 yields, with no extra hypotheses, three sharper statements and the recovery of the original conclusion.

**Corollary 4.4 (Second moment of the reconstruction time).** *Under the hypotheses of Theorem 4.1, writing $\Lambda_0:=(V_T-\delta)/\theta$ for the mean bound,*
$$
\mathbb{E}\big[(\tau_\delta-T)^2\big]\;\le\;\Lambda_0^2+\frac{a_{\max}}{\theta^2}\,\Lambda_0
\;=\;\frac{(V_T-\delta)^2}{\theta^2}+\frac{a_{\max}\,(V_T-\delta)}{\theta^3}.
$$
*In particular $\tau_\delta-T$ has finite second moment. In the extremal inverse-Gaussian regime of Remark 4.3 — where $a_V\equiv a_{\max}$, $\mu_t\equiv-\theta$ and the mean bound is an equality — this gives $\mathrm{Var}(\tau_\delta-T)=a_{\max}\Lambda_0/\theta^2=a_{\max}(V_T-\delta)/\theta^3$, the inverse-Gaussian variance; so the second-moment constant is of the correct order and cannot be improved without further structure.*

*Proof.* Let $\phi(v):=(v-\delta)/\theta\ge0$ and $\psi(v):=(v-\delta)^2/\theta^2+(a_{\max}/\theta^3)(v-\delta)$ on $\{v\ge\delta\}$. A direct computation gives the generator bounds, on $\{V\ge\delta\}$, $\mathcal A\phi=\mu_t/\theta\le-1$ and $\mathcal A\psi=2(V_t-\delta)\mu_t/\theta^2+a_V/\theta^2\cdot\tfrac{}{}+\ldots\le -2\phi(V_t)$, using $\mu_t\le-\theta$ and $a_V\le a_{\max}$. With the deterministic identity $(\tau_\delta-T)^2=2\int_T^{\tau_\delta}(\tau_\delta-s)\,ds$ and conditional optional stopping of the supermartingale $\phi(V_t)+(t-T)$ (admissible because the schedule is progressively measurable; no strong Markov property is invoked), one obtains $\mathbb E[(\tau_\delta-T)^2]\le\Lambda_0^2+a_{\max}\Lambda_0/\theta^2$. The variance statement is the saturation of every inequality in the extremal case. $\qquad\blacksquare$

**Corollary 4.5 (High-probability reconstruction time).** *Under the hypotheses of Theorem 4.1, for each $p\in(0,1)$ there is a deterministic time $t_p$ with $\mathbb P(\tau_\delta-T\le t_p)\ge1-p$, namely the larger root of $\theta^2t^2-2(\theta D+a_{\max}L)t+D^2=0$,*
$$
t_p=\frac{\theta D+a_{\max}L+\sqrt{(\theta D+a_{\max}L)^2-\theta^2D^2}}{\theta^2},\qquad D:=V_T-\delta,\ \ L:=\log(1/p),
$$
*reducing to $t_p=D/\theta$ when $a_{\max}=0$.*

*Proof.* Set the tail bound (iii) equal to $p$: $\exp(-(\theta t-D)^2/(2a_{\max}t))=p$ gives $(\theta t-D)^2=2a_{\max}Lt$, i.e. $\theta^2t^2-2(\theta D+a_{\max}L)t+D^2=0$; the larger root is $t_p$, and for $t\ge t_p$ the tail is $\le p$. $\qquad\blacksquare$

**Corollary 4.6 (Monotone $1/\theta$ law).** *The mean bound $(V_T-\delta)/\theta=(V_T-\delta)/\big(c(s_\ast-s_\ast^{\mathrm{crit}})\big)$ is strictly decreasing and convex in the sacrifice level $s_\ast$ on $(s_\ast^{\mathrm{crit}},\infty)$, diverging as $s_\ast\downarrow s_\ast^{\mathrm{crit}}$ and $\to0$ as $s_\ast\to\infty$.* $\qquad\blacksquare$

**Corollary 4.7 (Positive-probability return — the original conclusion, complementary regime).** *Drop (SS) but assume (A1) uniform ellipticity on a neighbourhood of $\{\delta\le\Delta\le V_T\}$ and reachability of $\mathcal C_\delta$ from $x_T$. Then $\mathbb P(\tau_\delta<\infty)>0$.* *Proof.* By the Stroock–Varadhan support theorem, under uniform ellipticity the diffusion's support contains a neighbourhood of every continuous path from $x_T$ into $\mathcal C_\delta$; reachability supplies such a path, so the event $\{\tau_\delta<\infty\}$ has positive probability. $\qquad\blacksquare$

This is the **complementary, non-nested** regime: Corollary 4.7 needs ellipticity and reachability but *not* sufficient sacrifice, and concludes only positive probability; Theorem 4.1 needs sufficient sacrifice but *not* ellipticity, and concludes almost-sure return in bounded mean time. The dichotomy is sharpened into a framework analogy in §13.3.

## 5. An explicit admissible noise field

This section exhibits a concrete noise process realising (A1)/(A2), in two guises that feed the same engine.

### 5.1 The elliptic guise

In $(1)$ with $\sigma$ satisfying (A1), the diffusion is uniformly elliptic, (A2) is automatic (Remark 7.3), and Theorem 4.1 applies with no auxiliary hypotheses. This is the **fully rigorous** model.

### 5.2 The directional Ornstein–Uhlenbeck field and its corrector lifting

To realise the original coloured noise literally, let the state be driven by an auxiliary OU field. Write the joint system, in the coherence coordinate, as
$$
dV_t=\big(h_t+\sigma_{\max}\xi_t\big)\,dt,\qquad
d\xi_t=-\lambda(\xi_t-\bar\zeta(x_t))\,dt+\sqrt{2\kappa}\,dB_t, \tag{6}
$$
with $h_t:=\langle\nabla\Delta,\Phi+S\rangle$, mean-reversion rate $\lambda>0$, and equilibrium tilt $\bar\zeta(x)$ toward the coherence direction. Averaging $(6)$ over the fast OU variable gives, in the limit $\lambda\to\infty$, the effective scalar drift $h_t+\sigma_{\max}\bar\zeta(x_t)$:

**Proposition 5.1 (Averaging limit).** *As $\lambda\to\infty$, $V$ converges (uniformly on compact time intervals, in probability) to the solution of $dV_t=(h_t+\sigma_{\max}\bar\zeta(x_t))\,dt$; if $\bar\zeta\le-\rho_0<0$ and $c\,s_\ast-M_\Phi>\sigma_{\max}\rho_0\cdot(-1)$ the averaged drift is $\le-\theta_{\mathrm{OU}}<0$ on $\{V\ge\delta\}$, and Theorem 4.1 applies to the limit.* $\qquad\blacksquare$

For a **non-asymptotic** statement at finite $\lambda$, introduce the **lifted coherence** $U_t:=V_t+\zeta_t/\lambda$, with corrector $\zeta_t:=\xi_t-\bar\zeta(x_t)$ (writing $r_t$ for the correction generated by $\bar\zeta$'s own dynamics). Under structural hypotheses (H-OU) — (i) a **bounded** corrector $|\zeta_t|,|r_t|\le\bar\zeta,\bar r$ (which does *not* follow from $\sup_t\mathbb E|\xi_t|<\infty$ and must be supplied by a compact coherence band or a reflected/truncated OU); (ii) the drift margin holding on the enlarged band $\{V\ge\delta-\bar\zeta/\lambda\}$ — one obtains:

**Proposition 5.3 (Non-asymptotic corrector lifting).** *Under (H-OU), there is a fixed threshold $\lambda_0=\bar r/\theta_{\mathrm{OU}}$ such that for every $\lambda>\lambda_0$ the lifted coherence $U$ is a continuous semimartingale with drift $\le-\theta_\lambda<0$ on $\{U\ge\delta\}$, where $\theta_\lambda=\theta_{\mathrm{OU}}-\bar r/\lambda\to\theta_{\mathrm{OU}}$. The engine (Theorem 4.1) applies to $U$ verbatim, and since $|U_t-V_t|\le\bar\zeta/\lambda$, the true coherence $V$ reconstructs to the relaxed level $\delta+\bar\zeta/\lambda$ (an $O(1/\lambda)$ level shift). As $\lambda\to\infty$, $\theta_\lambda\to\theta_{\mathrm{OU}}$, the lifted bracket $\to0$, and the level shift $\to0$, recovering Proposition 5.1.*

*Proof.* The identity for $dU$ is $(6)$ combined with $\lambda^{-1}d\zeta$: the $-\lambda(\zeta-\bar\zeta)$ term in $\lambda^{-1}d\zeta$ cancels the $\zeta\,dt$ in $dV$, leaving drift $h_t+\bar\zeta(x_t)+r_t/\lambda$ and a Brownian term. On $\{U_t\ge\delta\}$, (H-OU)(i) gives $V_t\ge\delta-\bar\zeta/\lambda$, whence (H-OU)(ii) yields $h_t\le-(cs_\ast-M_\Phi)$; with $\bar\zeta(x_t)\le-\rho_0$ and $|r_t|\le\bar r$ this is the drift bound. For $\lambda>\lambda_0$ the margin $\theta_\lambda>0$, and the argument of Theorem 4.1 applies to $U$; the $V$-transfer is the deterministic bound $|U-V|\le\bar\zeta/\lambda$. $\qquad\blacksquare$

Both guises feed the **same** analytic engine (Proposition 3.3 $\Rightarrow$ Theorem 4.1); the elliptic guise is fully rigorous and quantitative with no auxiliary hypotheses, while the coloured-noise guise is faithful to the original $\xi$, makes (A2) explicit, and admits the conditional non-asymptotic CDI on the lifted coherence just described (the conditional status is recorded in §16).

## 6. Filling the deferred technical gaps

### 6.1 Global existence and non-explosion

**Proposition 6.1.** *Under (R), for every admissible schedule the SDE $(1)$ has a unique strong solution with infinite lifetime (no explosion).*

*Proof.* Local Lipschitz coefficients give a unique strong solution up to an explosion time $\zeta$. Fix a finite horizon $[T,T']$ and an admissible schedule; by (R), $b(\cdot,t)$ and $\sigma$ then have linear growth there, $|b(x,t)|+\|\sigma(x)\|\le K_{T'}(1+|x|)$. With $\mathcal V(x)=1+|x|^2$,
$$
\mathcal L_t\mathcal V(x)=2\langle x,b(x,t)\rangle+\mathrm{tr}\,a(x)\le 2|x|\,K_{T'}(1+|x|)+K_{T'}^2(1+|x|)^2\le C_{T'}\,\mathcal V(x).
$$
Khasminskii's non-explosion test then gives $\zeta>T'$ a.s.; as $T'$ was arbitrary, $\zeta=\infty$ a.s. This uses the **assumed** linear growth of $S$ in $x$ (R) for admissible schedules; the sacrifice condition (S) constrains only $\langle S,\nabla\Delta\rangle$ — not $\langle x,S\rangle$ — and therefore does **not** by itself yield non-explosion. $\qquad\blacksquare$

### 6.2 Regularity for the one-dimensional comparison

The original proof projected onto "gradient-flow lines of $\Delta$" informally. Lemma 3.1 makes this rigorous without any projection: applying Itô directly to the scalar $V=\Delta(x)$ (legitimate since $\Delta\in C^2$ and the solution is non-exploding) yields the exact semimartingale $(4)$. The comparison in Theorem 4.1(i)–(ii) is carried out *on $V$ itself* via the supermartingale $N_t$ — using only the drift bound (CDI) and path continuity — and the tail (iii) via Dambis–Dubins–Schwarz/Bernstein for the scalar martingale $M$. No stochastic comparison theorem on $M$-valued paths and no one-dimensional projection of the state are invoked; this removes the regularity gap entirely.

### 6.3 The Riemannian case

**Remark 6.3.** Let $(M,g)$ be complete with bounded geometry, and let $x_t$ solve the Itô SDE built from $\Phi,S$ and a horizontal Brownian motion via the Eells–Elworthy–Malliavin construction, so the generator is $\mathcal L=\langle\Phi+S,\nabla\rangle+\tfrac12\sigma^2\Delta_g$ ($\Delta_g$ the Laplace–Beltrami operator). Itô's formula for $\Delta\in C^2(M)$ gives $(4)$ with $\nabla^2\Delta$ the Riemannian Hessian and $a_V=\sigma^2|\nabla\Delta|_g^2$. Since the proof of Theorem 4.1 operates entirely on the scalar $V_t$, it transfers once (B) is read with respect to $g$. Bounded geometry alone does **not** bound the coefficients; one must *additionally assume* that $\Phi,\sigma,\nabla\Delta$ and $\mathrm{Hess}\,\Delta$ are uniformly bounded on $\{\Delta\ge\delta\}$ (with $|\nabla\Delta|_g$ bounded below off $\mathcal C_\delta$), which then yields (B). Non-explosion follows from a proper coercive Lyapunov function.

## 7. Remarks on assumptions and the structured-noise picture

**Remark 7.1 (why (SS) is the right strengthening).** Almost-sure return *cannot* hold from positive probability alone: a brief sacrifice pulse leaves the long-run drift of $V$ controlled by $\Phi$ and the noise, which may keep the trajectory recurrent in high distortion. The sign condition $\theta>0$ — sustained sacrifice exceeding the natural-distortion and Itô budgets — is precisely the dividing line between Corollary 4.7 (positive probability) and Theorem 4.1 (almost sure). It is necessary for the linear expected-time law.

**Remark 7.2 (role of (A1)).** Ellipticity is not needed for Theorem 4.1 (drift dominance does the work) but is essential for Corollary 4.7 (fluctuation-driven return) and for the coloured-noise non-degeneracy via hypoellipticity.

**Remark 7.3 (why (A2) is free in the elliptic model).** Directional correlation toward $x_0$ is a statement about the conditional law of increments; in $(1)$ that law has mean $b(x_t,t)\,h+o(h)$, whose coherence-ward component is positive wherever $\langle\Phi+S,e\rangle>0$ — guaranteed near $\mathcal C_\delta$ by (S). Hence (A2) is a *consequence*, not an extra assumption, in the elliptic guise.

---

# Part II — Variational Characterization of Optimal Sacrifice (Pillar II)

The engine of Part I treats the sacrifice schedule as given and asks *whether* and *how fast* the system returns. Pillar II inverts the question: sacrifice is costly, so *which* schedule reconstructs most cheaply? This is a stochastic-control problem on the distortion field, and its solution — an exact constant policy in the drift-dominated regime, deformed by noise and inhomogeneity — is the second pillar. We close the pillar with the large-deviation **risk layer**, which prices the rare event of prolonged non-recovery.

## 8. Optimal sacrifice as stochastic control

### 8.1 The exit-cost problem and the HJB equation

Take the elliptic model $(1)$ with $S(x,s)=s\,\hat S(x)$, where $\hat S$ is a unit-strength sacrifice direction with $\langle\hat S(x),\nabla\Delta(x)\rangle\le-c$ (so (S) holds), and a convex running cost combining a time penalty $c_0>0$ and a quadratic sacrifice cost $\tfrac12 h\,s^2$ ($h>0$). For the exit problem on $\Omega_\delta:=\{\Delta>\delta\}$ with absorption on $\partial\Omega_\delta=\{\Delta=\delta\}$, define the **value function**
$$
u(x):=\inf_{s(\cdot)\ge0}\ \mathbb E_x\!\int_0^{\tau_\delta}\!\Big(c_0+\tfrac12 h\,s_t^2\Big)\,dt,\qquad u\big|_{\partial\Omega_\delta}=0. \tag{10}
$$

The dynamic-programming principle gives, formally, the Hamilton–Jacobi–Bellman equation on $\Omega_\delta$,
$$
\inf_{s\ge0}\Big\{\langle\nabla u,\Phi+s\hat S\rangle+\tfrac12\mathrm{tr}(a\nabla^2 u)+c_0+\tfrac12 h s^2\Big\}=0,
$$
i.e., splitting off the $s$-dependent part $\inf_{s\ge0}\{s\,\langle\nabla u,\hat S\rangle+\tfrac12 h s^2\}$,
$$
\boxed{\ \langle\nabla u,\Phi\rangle+\tfrac12\mathrm{tr}(a\nabla^2u)+c_0-\frac{1}{2h}\big(\langle\nabla u,\hat S\rangle_-\big)^2=0,\quad x\in\Omega_\delta;\qquad u|_{\partial\Omega_\delta}=0,\ } \tag{HJB}
$$
where $(\cdot)_-=\max(0,-\cdot)$. The **optimal feedback** is interior:
$$
s^\ast(x)=\frac1h\big(-\langle\nabla u(x),\hat S(x)\rangle\big)_+ . \tag{11}
$$
Sacrifice is exerted precisely where moving along $\hat S$ decreases the cost-to-go ($\langle\nabla u,\hat S\rangle<0$), at a rate proportional to that directional derivative.

### 8.2 Verification

**Proposition 9.4 (Verification — formal).** *Suppose $u\in C^2(\Omega_\delta)\cap C(\overline{\Omega_\delta})$ solves (HJB) with $u\ge0$, $u|_{\partial\Omega_\delta}=0$, and the feedback $(11)$ defines an admissible schedule with $\mathbb E_x\tau_\delta<\infty$. Then $u$ is the value function $(10)$ and $s^\ast$ is optimal.* *Proof (sketch).* For any admissible $s$, Itô + (HJB) give $d\big(u(x_t)+\int_0^t(c_0+\tfrac12 hs^2)\big)\ge dM_t$ (a submartingale), so $u(x)\le\mathbb E_x\int_0^{\tau_\delta}(c_0+\tfrac12 hs^2)$; equality holds for $s=s^\ast$, where the drift inequality is saturated. $\square$

### 8.3 The scalar reduction and an exact optimum

Reduce to the coherence coordinate. In one dimension with $\Delta(x)=x$, constant natural drift $\Phi\equiv\phi_0\ge0$, constant diffusion $a\equiv a_0\ge0$, and $\langle\nabla\Delta,\hat S\rangle\equiv-c$, the ansatz $u=\varphi(V)$ turns (HJB) into the scalar **Riccati ODE** on $V>\delta$, writing $g:=\varphi'\ge0$:
$$
\tfrac12 a_0\,g'(V)+\phi_0\,g(V)-\frac{c^2}{2h}\,g(V)^2+c_0=0,\qquad
s^\ast=\frac{c}{h}\,g(V). \tag{13}
$$

**Proposition 9.5 (Exact optimal schedule in the drift-dominated regime).** *In the scalar reduction above, take the drift-dominated (deterministic) limit $a_0=0$, with $\phi_0\ge0$, $c>0$, $h>0$, $c_0\ge0$. Then, among all measurable admissible schedules $s:[0,\infty)\to[0,\infty)$, the optimal feedback is the* **constant** *schedule*
$$
s^\ast=\frac1c\Big(\phi_0+\sqrt{\phi_0^{\,2}+2c^2c_0/h}\Big),\qquad
\theta^\ast:=c\,s^\ast-\phi_0=\sqrt{\phi_0^{\,2}+2c^2c_0/h}\,>0, \tag{14}
$$
*and the value function is* **affine**, *$u(V)=g^\ast(V-\delta)$ with $g^\ast=\tfrac{h}{c^2}\big(\phi_0+\sqrt{\phi_0^2+2c^2c_0/h}\big)=h\,s^\ast/c$.*

*Proof.* When $a_0=0$ the Riccati term drops and $(13)$ becomes the algebraic equation $\tfrac{c^2}{2h}g^2-\phi_0 g-c_0=0$, whose positive root is $g^\ast$; then $s^\ast=\tfrac{c}{h}g^\ast$ gives $(14)$ and $g^\ast$ is constant, so $\varphi$ is affine. We now show, **independently of the HJB ansatz**, that $(14)$ is optimal over *all* measurable schedules, not merely constant ones. With $a_0=0$ the dynamics are deterministic, $\dot V_t=\phi_0-c\,s_t$, started at $V$ and absorbed at the first time $\tau$ with $V_\tau=\delta$; admissibility means $\tau<\infty$, i.e. $\int_0^\tau(c\,s_t-\phi_0)\,dt=V-\delta=:D>0$. The cost is $C[s]=\int_0^\tau\big(c_0+\tfrac12 h s_t^2\big)\,dt$.

*Step 1 — fix the duration; Jensen forces constancy.* Hold the terminal time $\tau$ fixed. The descent constraint reads $\int_0^\tau s_t\,dt=(D+\phi_0\tau)/c$, and $\int_0^\tau c_0\,dt=c_0\tau$ is fixed, so minimising $C[s]$ at fixed $\tau$ is minimising $\int_0^\tau s_t^2\,dt$ subject to a fixed value of $\int_0^\tau s_t\,dt$. Cauchy–Schwarz (equivalently, Jensen for $s\mapsto s^2$) gives $\int_0^\tau s_t^2\,dt\ge\tfrac1\tau\big(\int_0^\tau s_t\,dt\big)^2$, with equality **iff** $s_t\equiv\bar s:=(D+\phi_0\tau)/(c\tau)$. Hence for every fixed duration the optimal schedule is constant, and the problem collapses onto the one-parameter constant family.

*Step 2 — optimise the duration.* With $\theta:=c\bar s-\phi_0=D/\tau$ (so $\tau=D/\theta$), the constant-$\bar s$ cost is $C=(c_0+\tfrac12 h\bar s^2)\,D/\theta=D\cdot F(\bar s)$, where $F(s):=(c_0+\tfrac12hs^2)/(cs-\phi_0)$ on $s>s^\ast_{\mathrm{crit}}:=\phi_0/c$. Now $F\to+\infty$ both as $s\downarrow s^\ast_{\mathrm{crit}}$ and as $s\to\infty$, and $F'(s)=0\Leftrightarrow s^2-\tfrac{2\phi_0}{c}s-\tfrac{2c_0}{h}=0$; the two roots of this quadratic multiply to $-2c_0/h\le0$, so it has a unique root in $(s^\ast_{\mathrm{crit}},\infty)$, namely $(14)$, the global minimiser. Since the minimal cost is $C=F(s^\ast)\,(V-\delta)$, linear in $V-\delta$, the value function is affine and the optimal schedule is the constant $(14)$. $\qquad\blacksquare$

### 8.4 Qualitative behaviour: noise intensity, front-loading and back-loading

How does noise intensity reshape the optimal schedule? The scalar Riccati $(13)$ answers this cleanly, and the answer has two parts.

**(a) In the homogeneous model the optimum is exactly noise-independent.** Take constant coefficients $\phi_0,a_0,c,c_0,h$. The constant $g\equiv g^\ast$ from $(14)$ solves the *full* Riccati $(13)$ for **every** $a_0\ge0$, because the derivative term $\tfrac12a_0\,g'$ vanishes for constant $g$ and the remaining algebraic equation $\tfrac{c^2}{2h}g^2-\phi_0g-c_0=0$ is exactly the $a_0=0$ equation. Hence — within the verification class of Proposition 9.4, where the affine $u(V)=g^\ast(V-\delta)$ is the (minimal non-negative, linear-growth) value function selected by $u(\delta)=0$ and admissibility ($\theta^\ast>0\Rightarrow\mathbb E\tau_\delta<\infty$) — the **constant** optimal schedule $(14)$ is unchanged by noise:

> **Observation 8.1 (noise-robustness of the constant optimum).** In the homogeneous scalar reduction, the optimal feedback $(14)$ and the affine value function $u(V)=g^\ast(V-\delta)$ are **independent of the noise level $a_0$**. There is no front- or back-loading: the cheapest reconstructing policy spreads sacrifice uniformly regardless of noise.

This sharpens the v3.0 statement that the noise enters only as a curvature correction: in the *homogeneous* model that correction is identically zero. The intuition is that a translation-invariant cost over a translation-invariant geometry has no preferred distortion level at which to concentrate effort, and the symmetric diffusion adds none.

**(b) Front-/back-loading is an inhomogeneity effect, and noise sets its direction.** Genuine front-loading (more sacrifice at high distortion) or back-loading (more sacrifice near the boundary) appears only when some coefficient varies with the distortion level — a state-dependent natural drift $\phi(V)$, cost curvature $h(V)$, or, most tellingly, a state-dependent diffusion $a(V)$. With $a=a(V)$, the Riccati is
$$
\tfrac12 a(V)\,g'(V)+\phi_0\,g(V)-\frac{c^2}{2h}g(V)^2+c_0=0,\qquad
g'(V)=\frac{2}{a(V)}\Big(\frac{c^2}{2h}g(V)^2-\phi_0 g(V)-c_0\Big), \tag{P.0}
$$
so $s^\ast(V)=(c/h)g(V)$ is increasing in $V$ (front-loaded) where $g'(V)>0$ and decreasing (back-loaded) where $g'(V)<0$. Because $g'(V)$ is inversely proportional to the local noise $a(V)$, the schedule **reduces sacrifice exactly where noise more strongly assists the descent**: in high-diffusion regions the agent lets the noise do the work and spends less control there, shifting effort toward low-diffusion regions. Thus *raising* the local noise level *back-loads or front-loads* sacrifice *away from* that level. This is a formal/heuristic reading of the inhomogeneous free-boundary Riccati problem, which we do not solve in full (§16); it is consistent with Observation 8.1 (the effect vanishes as $a(V)$ becomes constant, where $g'\to0$).

### 8.5 The constant-disclosure regime and the link to v6.0

The exact optimum $(14)$ is the scalar **analogue** of v6.0's constant optimal disclosure schedule $\mathrm{Al}^\ast(T)=\mathrm{Al}_c^{(\mathrm{global})}+C/T$ (v6.0 Prop. 5.3): an affine value function in the coherence coordinate forces a constant optimal feedback. The correspondence is structural — a suggestive parallel between two control problems, not an identification of them. Two limits are quantitative. *Time–cost trade-off*: as $c_0\to0$, $(14)$ gives $s^\ast\to2\phi_0/c$ (do just enough to overcome the natural drift, with margin $\theta^\ast\to\phi_0$); as $c_0$ grows, $s^\ast\sim\sqrt{2c_0/h}$ grows like $\sqrt{c_0}$ (urgency buys speed at a square-root price). The disclosure–time law $\mathrm{Al}^\ast(T)=\mathrm{Al}_c^{(\mathrm{global})}+C/T$ (v6.0 Prop. 5.3, written with the *energy* constant $\mathrm{Al}_c^{(\mathrm{global})}$) is then the projected, scalar shadow of $(10)$–(HJB): the affine value function yields a constant infinite-horizon optimal feedback (our $(14)$), the analogue of v6.0's $T\to\infty$ schedule asymptote, with the $C/T$ term the finite-horizon correction. We do **not** identify this schedule asymptote with the dynamical critical level. Consistent with the dictionary of §13.1 and v6.0's energy–kinetic correction (§13.2), the role of our dynamical critical sacrifice $s^\ast_{\mathrm{crit}}$ is played by the *operative saddle-node* threshold $\mathrm{Al}_{\mathrm{sn}}$, whereas the energy constant $\mathrm{Al}_c^{(\mathrm{global})}$ is only necessary-but-weak (the positive-probability regime, Cor. 4.7).

## 9. The risk layer: large deviations of the reconstruction time

The mean and high-probability bounds of Part I, and the cost of Pillar II, describe typical recovery. The remaining risk is the rare event of *prolonged* non-recovery. We characterise it by a large-deviation principle, and read its rate function as a "cost of staying distorted" that mirrors the variational cost of §8.

**Small-noise scaling.** Replace $\sigma$ by $\sqrt{\varepsilon}\,\sigma_0$ in $(1)$ and write $x^\varepsilon$, $V^\varepsilon$, $\tau^\varepsilon_\delta$. Under (SS) the deterministic flow already reconstructs: with $\mu\le-\theta$, $\Delta(\phi_t)\le V_T-\theta(t-T)$, so $\tau^\varepsilon_\delta-T\to t_\star\le(V_T-\delta)/\theta$ in probability as $\varepsilon\to0$.

### 9.1 The scalar rate function

**Theorem 9.6 (Scalar LDP for the reconstruction time).** *Consider the extremal scalar model $V^\varepsilon_t=V_T-\theta(t-T)+\sqrt{\varepsilon\,a_{\max}}\,(B_t-B_T)$ (constant drift $-\theta<0$, constant bracket $a_{\max}>0$, the sharp case of Remark 4.3), with $D:=V_T-\delta>0$ and $\tau^\varepsilon_\delta=\inf\{t>T:V^\varepsilon_t<\delta\}$. Then for every $t>0$,*
$$
\lim_{\varepsilon\to0}\varepsilon\log\mathbb P\big(\tau^\varepsilon_\delta-T>t\big)=-J(t),\qquad
J(t)=\begin{cases}0, & t\le D/\theta,\\[4pt]
\dfrac{(\theta t-D)^2}{2\,a_{\max}\,t}, & t> D/\theta.\end{cases}
$$

*Proof.* $\{\tau^\varepsilon_\delta-T>t\}=\{V^\varepsilon_s\ge\delta\ \forall s\in[T,T+t]\}$. By Schilder's theorem, $\sqrt\varepsilon(B-B_T)$ satisfies an LDP in $C([T,T+t])$ with rate $\tfrac1{2a_{\max}}\int|\dot w|^2$, so by the contraction principle $V^\varepsilon$ satisfies an LDP with good rate $I(\phi)=\tfrac1{2a_{\max}}\int_T^{T+t}(\dot\phi_s+\theta)^2\,ds$ for absolutely continuous $\phi$ with $\phi_T=V_T$. Hence $\lim\varepsilon\log\mathbb P=-\inf\{I(\phi):\phi_s\ge\delta\ \forall s\}$. Put $\psi=\phi-\delta\ge0$, $\psi_T=D$. If $t\le D/\theta$ the straight descent $\psi_s=D-\theta(s-T)$ stays $\ge0$ and has $I=0$, so $J=0$. If $t>D/\theta$, Jensen gives for any admissible $\psi$,
$$
\int_T^{T+t}(\dot\psi_s+\theta)^2\,ds\ \ge\ t\Big(\theta+\tfrac{\psi_{T+t}-D}{t}\Big)^2\ \ge\ t\Big(\theta-\tfrac{D}{t}\Big)^2,
$$
using $\psi_{T+t}\ge0$ and $\theta-D/t>0$; equality holds for the straight line $\psi_s=D-\tfrac{D}{t}(s-T)$. Dividing by $2a_{\max}$ gives $J(t)=(\theta t-D)^2/(2a_{\max}t)$. $\qquad\blacksquare$

**The rate function is the engine's tail exponent.** $J(t)=(\theta t-(V_T-\delta))^2/(2a_{\max}t)$ is *exactly* the exponent of Theorem 4.1(iii): the Bernstein tail of the engine is the non-asymptotic shadow of this large-deviation rate. As $t\to\infty$, $J(t)\sim(\theta^2/2a_{\max})\,t$; as $t\downarrow D/\theta$, $J(t)\to0$.

### 9.2 The path-space principle

The scalar rate function lifts to the geometry of the distortion field. We isolate the single analytic input — a **constraint-set regularity** condition that matches the Freidlin–Wentzell (FW) upper and lower bounds — and then discharge it under standard, checkable hypotheses, upgrading the v4.0 conditional statement.

Work in the small-noise scaling $\sigma\rightsquigarrow\sqrt\varepsilon\,\sigma$ and write the FW rate functional on $C([T,T+t];\mathbb R^n)$, with $b:=\Phi+S$,
$$
I_{[T,T+t]}(\phi)=\tfrac12\int_T^{T+t}\big\langle\dot\phi_s-b(\phi_s),\,a(\phi_s)^{-1}\big(\dot\phi_s-b(\phi_s)\big)\big\rangle\,ds
$$
for absolutely continuous $\phi$ with $\phi_T=x_T$ (and $+\infty$ otherwise). Let $\mathsf F:=\{\phi:\Delta(\phi_s)\ge\delta\ \forall s\in[T,T+t]\}$ be the **delay set** (paths kept out of $\mathcal C_\delta$ for the whole window) and $\mathsf F^\circ:=\{\phi:\Delta(\phi_s)>\delta\ \forall s\}$. Define the **constrained action**
$$
J(t):=\inf\big\{I_{[T,T+t]}(\phi):\phi\in\mathsf F\big\}, \tag{12}
$$
the cheapest action keeping the path out of $\mathcal C_\delta$ for duration $t$ — a Jacobi/Maupertuis least-action problem in the metric $a^{-1}$, constrained to $\{\Delta\ge\delta\}$.

**Standing regularity hypotheses.**
- **(L1) FW sample-path LDP.** (R) holds and $a=\sigma\sigma^\top$ is uniformly elliptic with $\Phi,\sigma\in C^1_b$ on a tubular neighbourhood of $\{\delta\le\Delta\le V_T\}$, so $\{x^\varepsilon\}$ satisfies the FW LDP on $C([T,T+t];\mathbb R^n)$ with good rate $I_{[T,T+t]}$ (Freidlin–Wentzell; Dembo–Zeitouni).
- **(L2) Non-characteristic boundary.** $\nabla\Delta\neq0$ on $\partial\mathcal C_\delta=\{\Delta=\delta\}$, so $\partial\mathcal C_\delta$ is a $C^1$ hypersurface and $\nabla\Delta$ is a strictly transverse, non-tangential direction there.

By the FW principle, since $\{\tau^\varepsilon_\delta-T>t\}=\{x^\varepsilon\in\mathsf F\}$ with interior $\mathsf F^\circ$ and closure $\mathsf F$ (by continuity of $\Delta$ on the compact interval),
$$
-\inf_{\mathsf F^\circ}I\ \le\ \liminf_{\varepsilon\to0}\varepsilon\log\mathbb P(\tau^\varepsilon_\delta-T>t)\ \le\ \limsup_{\varepsilon\to0}\varepsilon\log\mathbb P(\tau^\varepsilon_\delta-T>t)\ \le\ -\inf_{\mathsf F}I.
$$
The two ends coincide **iff** the constrained action is *boundary-regular*,
$$
\inf_{\mathsf F}I=\inf_{\mathsf F^\circ}I=J(t). \tag{R-LDP}
$$
This single equality — not an opaque continuity of the exit functional — is the exact content needed, and we now discharge it.

**Lemma 9.8 (Boundary regularity of the constrained action).** *Under (L1)–(L2), (R-LDP) holds: every $\phi\in\mathsf F$ with $I(\phi)<\infty$ admits, for each $\eta>0$, a path $\phi^\eta\in\mathsf F^\circ$ with $I(\phi^\eta)\le I(\phi)+\eta$.*

*Proof (construction).* By (L2) and compactness pick $\beta>0$ and a collar $\{0\le\Delta-\delta<\rho_0\}$ on which $|\nabla\Delta|\ge\beta$; let $\Psi_\rho$ be the time-$\rho$ flow of the $\Delta$-increasing field $e:=\nabla\Delta/|\nabla\Delta|^2$, a $C^1$ map that is $O(\rho)$-close to the identity in $C^1$ on the compact band and raises $\Delta$ by exactly $\rho$ to leading order ($\Delta(\Psi_\rho x)=\Delta(x)+\rho+O(\rho^2)$, uniformly). Set $\phi^\rho_s:=\Psi_{r(s)}(\phi_s)$ with a Lipschitz profile $r(s)\in[0,\rho]$ equal to $\rho$ on the contact set $\{s:\Delta(\phi_s)\le\delta+\tfrac12\rho\}$ and tapering to $0$ over an $O(1)$-length neighbourhood of it (so $\int|\dot r|^2=O(\rho^2)$). Then $\Delta(\phi^\rho_s)\ge\delta+\tfrac12\rho-O(\rho^2)>\delta$ for all $s$ and small $\rho$, i.e. $\phi^\rho\in\mathsf F^\circ$. Since $\dot\phi^\rho=\dot\phi+O(\rho)$ and $b(\phi^\rho)=b(\phi)+O(\rho)$ uniformly while (L1) bounds $a^{-1}$ on the band, expanding the quadratic form and applying Cauchy–Schwarz gives $I(\phi^\rho)=I(\phi)+O_\phi(\rho)\to I(\phi)$ as $\rho\to0$ (the implied constant depends on the fixed finite $I(\phi)$). Choosing $\rho$ small enough yields $I(\phi^\rho)\le I(\phi)+\eta$; the taper and cross terms are controlled by the $O(1)$-length spreading of $r$, whose routine bookkeeping we omit. $\qquad\blacksquare$

**Proposition 9.7 (Path-space LDP for the reconstruction time).** *Under (L1)–(L2),*
$$
\lim_{\varepsilon\to0}\varepsilon\log\mathbb P(\tau^\varepsilon_\delta-T>t)=-J(t),
$$
*with $J(t)$ the constrained action $(12)$ — the cheapest action keeping the path out of $\mathcal C_\delta$ for duration $t$.*

*Proof.* The FW two-sided bound sandwiches the limit between $-\inf_{\mathsf F^\circ}I$ and $-\inf_{\mathsf F}I$; Lemma 9.8 equates both to $-J(t)$. $\qquad\blacksquare$

**Status (what is and is not proved).** With this rewrite the only residual is the routine bookkeeping inside Lemma 9.8 (taper/cross-term control), standard once (L1)–(L2) hold; the previously isolated "continuity of the exit functional" is now *derived* from (R-LDP) rather than assumed. We therefore state Proposition 9.7 as **rigorous under the standard regularity hypotheses (L1)–(L2)**, modulo this approximation lemma, in place of the v4.0 conditional form. Theorem 9.6 is the exactly solvable special case $\Delta(x)=x$, $a\equiv a_{\max}$, where $\mathsf F$ is convex, (R-LDP) is automatic, and the constrained geodesic degenerates to the straight line of §9.1.

### 9.3 The rate function as an adversarial-control value, and its Hamilton–Jacobi parallel with optimal sacrifice

The risk layer ties back to Pillar II not by analogy but through a shared variational structure: $J(t)$ is itself the **value of a deterministic optimal-control problem**, dual in posture to the agent's optimal-sacrifice problem.

**$J(t)$ as the value of an anti-reconstruction problem.** Read the FW action through its control representation: a path $\phi$ with $I(\phi)<\infty$ solves the **skeleton** dynamics driven by a control $v$,
$$
\dot\phi_s=b(\phi_s)+\sigma(\phi_s)\,v_s,\qquad I_{[T,T+t]}(\phi)=\tfrac12\int_T^{T+t}|v_s|^2\,ds, \tag{12a}
$$
where $v$ is the forcing an adversary must inject against the natural drift $b$. The constrained action $(12)$ is then the value function of the **anti-reconstruction problem**
$$
J(t)=\inf_{v}\Big\{\tfrac12\!\int_T^{T+t}\!|v_s|^2\,ds\ :\ \dot\phi=b(\phi)+\sigma(\phi)v,\ \Delta(\phi_s)\ge\delta\ \ \forall s\in[T,T+t]\Big\}: \tag{12b}
$$
**the minimal control energy an adversary must spend to hold the process outside $\mathcal C_\delta$ for time $t$.** Delay is not free — against a reconstructing drift it costs action, and $J(t)$ is its cheapest price.

**The stationary rate is the power to cancel the drift.** In the scalar model of §9.1 ($\Delta(x)=x$, $b\equiv-\theta$, $a\equiv a_{\max}$) the skeleton is $\dot\phi=-\theta+\sqrt{a_{\max}}\,v$ and the running cost is the Lagrangian $L(\phi,\dot\phi)=(\dot\phi+\theta)^2/(2a_{\max})$. Holding the process at the boundary ($\dot\phi=0$) costs the drift-cancelling control at the **stationary rate**
$$
L(\delta,0)=\frac{\theta^2}{2a_{\max}},
$$
and indeed $J(t)/t\to L(\delta,0)=\theta^2/(2a_{\max})$ as $t\to\infty$ (§9.1): the long-run price of sustained incoherence is the power needed to neutralise the reconstructing drift. The Legendre transform of $L$ is the **Hamiltonian**
$$
H(\phi,p)=\sup_{q}\big(pq-L(\phi,q)\big)=\tfrac12 a_{\max}\,p^2-\theta\,p, \tag{12c}
$$
whose non-trivial zero $p_\ast=2\theta/a_{\max}$ has quasipotential $\int_0^{D}p_\ast\,d\phi=2\theta D/a_{\max}$ — the one-sided exit exponent for an upward excursion of size $D$ against the drift (and, with the drift reversed, the defective-return exponent of §10.6).

**A Hamilton–Jacobi parallel with optimal sacrifice (structural, not an identity).** Both pillars are now constrained least-action problems on the distortion field in the same Maupertuis metric $a^{-1}$:

| | Pillar II — optimal sacrifice $(10)$ | Risk layer — anti-reconstruction $(12\mathrm{b})$ |
|---|---|---|
| optimiser | the **agent** (chooses sacrifice $s$) | the **adversary/noise** (chooses forcing $v$) |
| goal | **reach** $\mathcal C_\delta$ | **avoid** $\mathcal C_\delta$ for time $t$ |
| cost | control cost $\int(c_0+\tfrac12hs^2)$ | action $\tfrac12\int|v|^2$ |
| value object | $u(x)$ solving (HJB) | $J(t)$, the FW action |

They are governed by Hamilton–Jacobi equations of the same type — a static exit-cost HJB for $u$, the FW/eikonal Hamiltonian $(12\mathrm{c})$ for the action — sharing the geometry $a^{-1}$ but with **opposite optimisation sense and opposite state constraint**. We call this a **structural Hamilton–Jacobi parallel**: a correspondence of variational form, *not* a claim of exact convex/Legendre duality between $u$ and $J$ (the two Hamiltonians coincide only under the extra quadratic identifications of the scalar reduction; in general the agent's control Hamiltonian carries the running cost $c_0+\tfrac12hs^2$ that the adversary's does not). What it buys is conceptual: the agent prices the cheapest way *in*, the rate function the cheapest way to keep it *out* — and it is exactly this anti-reconstruction cost that the Power Highway adversary of Pillar III sets out to make cheap, by lowering the effective drift $\theta\rightsquigarrow\theta_{\mathrm{rob}}$ (§10.6).

> **Remark 9.3a (where the parallel becomes a genuine duality).** The structural parallel tightens to an exact Legendre/time-reversal duality precisely in the scalar reduction of §9.1–§9.3. There both the agent's optimal descent and the adversary's cheapest delay are geodesics of the *same* kinetic Hamiltonian $\tfrac12 a_{\max}p^2-\theta p$ in the Maupertuis metric $a_{\max}^{-1}$, sharing its non-trivial zero $p_\ast=2\theta/a_{\max}$ and the quasipotential $2\theta D/a_{\max}$: the descent traverses the geodesic *toward* $\mathcal C_\delta$ while the delay traverses its time-reverse *away* from $\mathcal C_\delta$, the agent's problem carrying in addition the running-cost potential $c_0+\tfrac12 hs^2$ that the adversary's lacks. Outside this reduction — multidimensional $\Delta$, state-dependent diffusion $a(\cdot)$, or a non-quadratic cost — that running-cost term no longer cancels and the two Hamiltonians cease to be conjugate; only the variational *form* (a constrained least action in the metric $a^{-1}$) survives. We therefore continue to claim a **structural parallel, not an identity** (§16); the exact duality is a property of the scalar saturating reduction, exactly the regime in which the robust rate identity of Proposition P3.11(ii) is also sharp. $\qquad\blacksquare$

### 9.4 The rate function as a systemic-risk measure (I)

Beyond pricing delay, $J(t)$ quantifies the **systemic risk of prolonged incoherence** in the toy-SDE model: $\mathbb P(\text{not reconstructed by }t)\approx e^{-J(t)/\varepsilon}$, so the asymptotic decay rate
$$
\mathsf I_\infty:=\lim_{t\to\infty}\frac{J(t)}{t}=\frac{\theta^2}{2a_{\max}}\ \ (\ge0)
$$
is a **coherence-resilience exponent**: the larger $\mathsf I_\infty$, the more exponentially rare a long spell outside $\mathcal C_\delta$. It is built from the two engine constants the rest of the note governs — the return margin $\theta$ (raised by sacrifice, Pillar II) and the diffusion budget $a_{\max}$ — so resilience is *bought by margin and eroded by noise*, quadratically in the former. This is the risk-theoretic face of optimal sacrifice: a schedule that buys margin $\theta$ at variational cost $(10)$ simultaneously buys exponential resilience $\theta^2/2a_{\max}$ against prolonged incoherence. Pillar III asks how an environment that *optimises distortion* degrades this resilience; the answer — the robust rate function $J_{\mathrm{rob}}$ and a large-deviation price — is the large-deviation counterpart of the robust-reconstruction theorem (§10.6), where this systemic-risk reading is completed.

### 9.5 The risk-layer synthesis: one object across the three pillars

The large deviations of §§9.1–9.4 and §10.6 are not three separate constructions but **one structural object — the cost of staying distorted — read from each pillar in turn.** The constrained action $J(t)$ of $(12)$ is the hinge; the three pillars supply its three faces.

- **Pillar-I face — the engine's tail.** In the scalar reduction the rate function $J(t)=(\theta t-D)_+^2/(2a_{\max}t)$ (§9.1) is *exactly* the Bernstein exponent of Theorem 4.1(iii): the engine's non-asymptotic tail is the finite-noise shadow of the large-deviation rate, and the long-run slope $\mathsf I_\infty=\theta^2/2a_{\max}$ (§9.4) is the resilience the engine already carries. The risk layer adds no hypothesis to Pillar I; it *re-reads* the tail the engine outputs.
- **Pillar-II face — the anti-reconstruction dual.** $J(t)$ is the value of the deterministic anti-reconstruction problem $(12\mathrm{b})$ — the least action an adversary spends to hold the process out of $\mathcal C_\delta$ — in a **structural Hamilton–Jacobi parallel** with optimal sacrifice (§9.3): the same Maupertuis metric $a^{-1}$, with opposite optimisation sense and opposite state constraint. Sacrifice prices the cheapest way *in*; the rate function prices the cheapest way to keep it *out*. (This is a parallel of variational form, *not* an exact convex duality — the agent's Hamiltonian carries the running cost $c_0+\tfrac12hs^2$ the adversary's does not.)
- **Pillar-III face — the robust rate and its price.** Feeding the worst-case margin $\theta\rightsquigarrow\theta_{\mathrm{rob}}$ into the *same* action lower-bounds the robust rate by the scalar one — $J_{\mathrm{rob}}\ge J_{\theta_{\mathrm{rob}}}$ uniformly over every admissible policy (the rigorous Bernstein bound $(P.6)$) — with the closed-form identity $J_{\mathrm{rob}}=J|_{\theta\to\theta_{\mathrm{rob}}}$ sharp *only* in the scalar saturating-policy case (Proposition P3.11, §10.6). The platform's only large-deviation lever is to lower the margin, and the resilience it destroys is the **large-deviation price** $\Pi^{\mathrm{LD}}=\mathsf I_\infty-\mathsf I_\infty^{\mathrm{rob}}$ $(P.7)$ — the third currency, beside critical sacrifice $\Pi^{\mathrm{thr}}$ and optimal cost $\Pi^{\mathrm{val}}$, in which the Power Highway is paid for.

The unification is economical: **one margin $\theta$ governs the whole layer.** Sacrifice (Pillar II) buys it at variational cost $(10)$; the engine (Pillar I) converts it into a tail exponent $\theta^2/2a_{\max}$; the Power Highway (Pillar III) attacks it, replacing $\theta$ by $\theta_{\mathrm{rob}}$ and shifting the system continuously from *exponentially resilient* ($\theta_{\mathrm{rob}}>0$), through *critically fragile* ($\theta_{\mathrm{rob}}=0$), to *systemically unsafe* ($\theta_{\mathrm{rob}}<0$). This is why the risk layer is a load-bearing dual and not an appendix: the same scalar that decides *whether* the agent reconstructs decides *how rare* prolonged incoherence is, in benign and adversarial environments alike, and it is exactly the object the Power Highway sets out to cheapen. As throughout, this is a property of the **abstract toy SDEs / Freidlin–Wentzell action only**: $J$, $J_{\mathrm{rob}}$, $\mathsf I_\infty^{\mathrm{rob}}$ and $\Pi^{\mathrm{LD}}$ are model risk currencies, not measured systemic risks of any platform, and nothing here is empirical validation of the PDE / "love" formula (§10.10, §16).

---

# Part III — Endogenous Distortion Optimization: The Power Highway (Pillar III)

Pillars I and II take the natural-distortion flow $\Phi$ as exogenous — a fixed feature of the environment. Pillar III removes that assumption. Many environments do not merely *host* distortion; they **profit from it**. An attention economy whose revenue scales with engagement, and whose engagement (by modelling assumption) scales with incoherence, has an *incentive to optimise distortion* — to build and maintain a drift channel, a **Power Highway**, that carries agents up the distortion field. The agent still controls only its sacrifice. The pillar asks: when can the agent reconstruct *anyway*, and what does the highway cost it?

> **Standing honesty caveat for Part III.** Everything here is a stylised model. The central assumption — that engagement reward increases with distortion — is a *modelling device for a worst case*, not an empirical claim about any platform. No real platform is asserted to maximise distortion, and no agent is asserted to meet the robust margin below. The results are **conditional** structural statements; the rigorous one (Theorem P3.4) is a *sufficient condition* for the agent, derived by feeding a worst-case drift into the Pillar-I engine.

## 10. Platforms as environments with endogenous distortion optimization

### 10.1 The two-layer agent–platform model

Augment $(1)$ with a **platform control** $\pi$. Let $\mathcal P$ be a (compact) set of recommendation/attention actions, and let
$$
\Pi:=\{\pi:\Omega\times[0,\infty)\to\mathcal P\ \text{progressively measurable}\}
$$
be the **platform policy class** (nonanticipative recommendation policies). The platform's action shapes the natural-distortion drift, so the controlled system is the two-layer SDE
$$
dx_t=\Big(\Phi\big(x_t,\pi_t\big)+S\big(x_t,s_t\big)\Big)\,dt+\sigma(x_t)\,dW_t,\qquad x_T=x. \tag{P.1}
$$

**Definition P3.1 (Two-layer reconstruction game).** The **agent** chooses an admissible sacrifice schedule $s\in\mathcal A$ (as in Pillars I–II); the **platform** chooses a policy $\pi\in\Pi$. The agent seeks reconstruction (and, in Pillar II's refinement, cheap reconstruction); the platform seeks engagement. We assume (R), (B), (A1) hold **uniformly in $\pi\in\mathcal P$** (the regularity and growth constants $K,\alpha,M_\sigma,a_{\max}$ may be taken independent of the platform action), so that the engine's hypotheses survive any platform policy.

### 10.2 The engagement–distortion coupling (a modelling assumption)

The platform's objective rewards engagement. We make the worst-case modelling assumption that engagement is increasing in distortion, via an explicit **distortion-loading** term.

**Definition P3.2 (Engagement functional with distortion loading).** Fix $\eta\ge0$. The platform's instantaneous reward is
$$
R^{\mathrm{plat}}(x,\pi):=\rho(x,\pi)+\eta\,\Delta(x), \tag{P.1b}
$$
where $\rho$ is a bounded baseline engagement rate and $\eta\,\Delta(x)$ is the **distortion loading** — the assumed premium the attention economy places on incoherence. The platform's objective over horizon policies is the discounted engagement
$$
\mathcal J^{\mathrm{plat}}[\pi;s]:=\mathbb E\!\int_T^{\infty}e^{-r(t-T)}\,R^{\mathrm{plat}}(x_t,\pi_t)\,dt,\qquad r>0\ \text{the platform discount}. \tag{P.1c}
$$

> The loading $\eta\,\Delta$ encodes "the platform profits when the agent is incoherent." We stress (binding honesty stance) that $\eta>0$ is an **assumption**, chosen to model the adversarial case; $\eta=0$ recovers a distortion-neutral environment. Nothing here measures $\eta$ for any platform.

The link to the engine is through the **up-field pull** the platform can generate. Define, for a policy $\pi$,
$$
M_\Phi(\pi):=\sup_{\Delta(x)\ge\delta}\big\langle\nabla\Delta(x),\Phi(x,\pi)\big\rangle .
$$
A platform maximising $(P.1c)$ with $\eta>0$ is incentivised to raise $\Delta$, i.e. to choose $\pi$ with large $M_\Phi(\pi)$ — this is precisely the "Power Highway": an endogenously optimised distortion drift.

### 10.3 A hierarchy of equilibrium concepts

The agent–platform interaction admits several solution concepts, in increasing order of strength of the platform and decreasing order of how rigorously we can resolve them.

**Definition P3.3 (Three solution concepts).**

1. **Robust / worst-case control.** The agent commits to a sacrifice level $s_\ast$ and demands reconstruction *against every* platform policy: $\inf_{s}\sup_{\pi\in\Pi}\{\text{reconstruction fails}\}$. This is a one-sided guarantee, requiring no model of the platform's optimiser — only its *power budget* (the set $\mathcal P$).
2. **Stackelberg game.** The platform is the leader: it chooses $\pi$ to maximise $(P.1c)$, anticipating the agent's best response $s(\pi)=\arg\min_s$ (Pillar-II cost). The agent is the follower. Equilibrium is a policy pair $(\pi^\star,s^\star)$ with $\pi^\star$ optimal given the follower map and $s^\star=s(\pi^\star)$.
3. **Major–minor mean-field game.** A continuum of minor agents each choose sacrifice; one major player (the platform) chooses $\pi$ to maximise aggregate discounted engagement against the population law $\mu_t$; equilibrium is mutual best response plus the consistency $\mu_t=\mathrm{Law}(x_t)$ (developed in §10.8).

We use concept 1 for the fully rigorous reconstruction guarantee; concepts 2–3 are defined carefully and their *existence* is stated conditionally (standard compactness/continuity/convexity and, for 3, the major–minor MFG framework).

### 10.4 Robust reconstruction under endogenous distortion optimization

The central honest result of the pillar reuses the Pillar-I engine against the *worst-case* platform.

**Definition P3.4a (Robust up-field budget and margin).** The platform's **maximal distortion pull** and the agent's **robust margin** are
$$
M_\Phi^{\mathrm{rob}}:=\sup_{\pi\in\Pi}\ \sup_{\Delta(x)\ge\delta}\big\langle\nabla\Delta(x),\Phi(x,\pi)\big\rangle\ =\ \sup_{\pi\in\mathcal P}M_\Phi(\pi),\qquad
\theta_{\mathrm{rob}}:=c\,s_\ast-M_\Phi^{\mathrm{rob}}-M_\sigma. \tag{P.2}
$$
(The two suprema coincide because $\Phi(x,\pi_t)$ at each $(x,t)$ ranges over $\{\Phi(x,\pi):\pi\in\mathcal P\}$; we assume $M_\Phi^{\mathrm{rob}}<\infty$, i.e. the platform's power budget is bounded.)

**Theorem P3.4 (Robust reconstruction against any platform policy).** *Assume (R), (B), (A1), (S) uniformly in $\pi\in\mathcal P$ (Definition P3.1), and suppose the agent sustains a constant sacrifice $s_\ast$ with*
$$
\theta_{\mathrm{rob}}=c\,s_\ast-M_\Phi^{\mathrm{rob}}-M_\sigma\ >\ 0. \tag{P.3}
$$
*Then for* **every** *admissible platform policy $\pi\in\Pi$, the coherence process of $(P.1)$ satisfies the conclusions of Theorem 4.1 with margin $\theta_{\mathrm{rob}}$: almost-sure return $\mathbb P(\tau_\delta<\infty)=1$; expected time $\mathbb E[\tau_\delta-T]\le(V_T-\delta)/\theta_{\mathrm{rob}}$; the second-moment bound of Corollary 4.4 and the high-probability time of Corollary 4.5 (with $\theta\rightsquigarrow\theta_{\mathrm{rob}}$); and the exponential tail of Theorem 4.1(iii). All bounds are* **uniform over $\pi$**.

**Large-deviation companion.** The same robust margin governs not only *whether* return is almost sure and bounded-mean but also *how exponentially rare* prolonged incoherence is: $\theta_{\mathrm{rob}}$ lower-bounds the worst-case rate function uniformly over policies, $J_{\mathrm{rob}}\ge J_{\theta_{\mathrm{rob}}}$ (with equality in the scalar saturating-policy case), and sets the large-deviation price $\Pi^{\mathrm{LD}}$ of Proposition P3.11 (§10.6) — the large-deviation counterpart of this theorem (the three faces of the one risk layer are synthesised in §9.5).

*Proof.* Fix any $\pi\in\Pi$. By Lemma 3.1 applied to $(P.1)$, on $\{V_t\ge\delta\}$,
$$
\mu_t=\big\langle\nabla\Delta,\Phi(\cdot,\pi_t)\big\rangle+\big\langle\nabla\Delta,S\big\rangle+\tfrac12\mathrm{tr}(a\nabla^2\Delta)
\le M_\Phi^{\mathrm{rob}}-c\,s_\ast+M_\sigma=-\theta_{\mathrm{rob}},
$$
where the first inequality uses $\langle\nabla\Delta,\Phi(\cdot,\pi_t)\rangle\le M_\Phi^{\mathrm{rob}}$ (the defining supremum, valid for *every* $\pi$ and every state with $\Delta\ge\delta$), (S), and (B). Thus the Coherence Drift Inequality (Proposition 3.3) holds with margin $\theta_{\mathrm{rob}}$ — *for this and hence for any $\pi$* — and the bracket bound $d\langle M\rangle_t\le a_{\max}\,dt$ holds by (B) uniformly in $\pi$. Theorem 4.1 and Corollaries 4.4–4.5 apply verbatim with $\theta\rightsquigarrow\theta_{\mathrm{rob}}$. Since $M_\Phi^{\mathrm{rob}}$, $M_\sigma$, $a_{\max}$, $c$, $s_\ast$ do not depend on $\pi$, the bounds are uniform over $\Pi$. $\qquad\blacksquare$

**Interpretation.** The agent "wins the Power Highway" precisely when its sacrifice budget $c\,s_\ast$ exceeds the platform's *maximal* distortion pull plus the Itô budget. This is a **min–max** guarantee: it requires no knowledge of the platform's optimiser or objective, only a bound $M_\Phi^{\mathrm{rob}}$ on its power. It is **one-sided and sufficient** — silent on what happens when $(P.3)$ fails (then $V$ may be recurrent in high distortion; see §10.6 and §10.9). Corollary 4.7 still gives a complementary *positive-probability* return under ellipticity and reachability even when $\theta_{\mathrm{rob}}\le0$, but not the a.s./bounded-mean guarantee.

**Corollary P3.4b (robust critical sacrifice).** The agent's critical sacrifice rises from the benign $s_\ast^{\mathrm{crit}}=(M_\Phi^{\mathrm{base}}+M_\sigma)/c$ to the **robust critical level**
$$
s_\ast^{\mathrm{crit,rob}}=\frac{M_\Phi^{\mathrm{rob}}+M_\sigma}{c},
$$
where $M_\Phi^{\mathrm{base}}:=M_\Phi(\pi_0)$ is the pull of a benign/default policy $\pi_0$. Reconstruction-a.s. now requires $s_\ast>s_\ast^{\mathrm{crit,rob}}$. $\qquad\blacksquare$

### 10.5 The price of the Power Highway

Endogenous distortion optimisation makes reconstruction *more expensive*. We quantify this in two ways, the first elementary, the second through the Pillar-II value function.

**Definition P3.5 (Threshold price).** The **threshold price of the Power Highway** is the extra sacrifice level the agent must sustain to keep the same robust margin against the optimised platform rather than the benign default:
$$
\Pi^{\mathrm{thr}}:=s_\ast^{\mathrm{crit,rob}}-s_\ast^{\mathrm{crit}}=\frac{M_\Phi^{\mathrm{rob}}-M_\Phi^{\mathrm{base}}}{c}\ \ge0. \tag{P.4}
$$
It is the entire effect of the platform's optimisation, measured in units of sacrifice; it vanishes iff the platform cannot raise the up-field pull above the default ($M_\Phi^{\mathrm{rob}}=M_\Phi^{\mathrm{base}}$, e.g. $\eta=0$).

**Proposition P3.6 (Value price in the drift-dominated regime).** *In the homogeneous scalar reduction of §8.3 (drift-dominated, $a_0=0$, quadratic cost), let $u_{\phi}(V)=g^\ast(\phi)\,(V-\delta)$ be the optimal reconstruction cost $(10)$ when the natural up-field drift is $\phi$, with $g^\ast(\phi)=\tfrac{h}{c^2}\big(\phi+\sqrt{\phi^2+2c^2c_0/h}\big)$ from Proposition 9.5. Then the* **value price of the Power Highway** *— the increase in the agent's minimal reconstruction cost caused by the optimised platform — is*
$$
\Pi^{\mathrm{val}}(V_T):=u_{M_\Phi^{\mathrm{rob}}}(V_T)-u_{M_\Phi^{\mathrm{base}}}(V_T)
=\frac{h}{c^2}\Big(M_\Phi^{\mathrm{rob}}-M_\Phi^{\mathrm{base}}+\sqrt{(M_\Phi^{\mathrm{rob}})^2+\tfrac{2c^2c_0}{h}}-\sqrt{(M_\Phi^{\mathrm{base}})^2+\tfrac{2c^2c_0}{h}}\Big)(V_T-\delta),
$$
*which is strictly increasing in $M_\Phi^{\mathrm{rob}}$ and vanishes when $M_\Phi^{\mathrm{rob}}=M_\Phi^{\mathrm{base}}$.*

*Proof.* Immediate from Proposition 9.5: with $\Delta(x)=x$ and natural drift $\phi$, the optimal cost-to-go is $u_\phi(V)=g^\ast(\phi)(V-\delta)$; substitute $\phi=M_\Phi^{\mathrm{rob}}$ and $\phi=M_\Phi^{\mathrm{base}}$ and subtract. Monotonicity is that of $\phi\mapsto\phi+\sqrt{\phi^2+2c^2c_0/h}$. $\qquad\blacksquare$

Thus the Power Highway has a clean cost: in sacrifice units it is $(M_\Phi^{\mathrm{rob}}-M_\Phi^{\mathrm{base}})/c$; in the agent's optimal-cost currency it is $\Pi^{\mathrm{val}}$, rigorous in the drift-dominated regime. Both are conditional on the platform model (§10.10); their risk-layer counterpart — how the highway thins the *exponential* rarity of prolonged incoherence — is §10.6.

### 10.6 Worst-case large deviations: the robust rate function $J_{\mathrm{rob}}$

The price of the Power Highway (§10.5) raised the *mean* cost of reconstruction. Its **risk-layer counterpart** asks how the platform degrades the *exponential rarity* of prolonged incoherence — how the rate function of §9 deforms when the drift is chosen adversarially. This is the large-deviation companion of Theorem P3.4.

**Definition P3.11a (worst-case delay probability and robust rate function).** In the small-noise scaling, let
$$
P_{\mathrm{rob}}(t):=\sup_{\pi\in\Pi}\mathbb P^{\pi,\varepsilon}\big(\tau^\varepsilon_\delta-T>t\big)
$$
be the **worst-case delay probability** (the platform picks the policy that most prolongs incoherence), and let the **robust rate function** be $J_{\mathrm{rob}}(t):=\inf_{\pi\in\Pi}J_\pi(t)$, where $J_\pi$ is the policy-$\pi$ FW rate of $(12)$ (smaller rate $\leftrightarrow$ larger delay probability).

The platform's only lever is the up-field pull, bounded by $M_\Phi^{\mathrm{rob}}$ (Definition P3.4a); against it the coherence drift on $\{V\ge\delta\}$ obeys $\mu_t\le-\theta_{\mathrm{rob}}$ for *every* policy (proof of Theorem P3.4). Two statements follow — a rigorous uniform bound in the general model, and a sharp identity in the scalar extremal case.

**Proposition P3.11 (Robust large deviations of reconstruction).** *Assume (R), (B), (A1), (S) uniformly in $\pi\in\mathcal P$ (Definition P3.1), with $D:=V_T-\delta>0$, and write $J_{\theta_{\mathrm{rob}}}(t):=(\theta_{\mathrm{rob}}t-D)_+^2/(2a_{\max}t)$.*

*(i) Uniform non-asymptotic bound (general model).* *If $\theta_{\mathrm{rob}}>0$, then in the small-noise scaling, for every policy $\pi\in\Pi$, every $\varepsilon>0$ and every $t>0$, the reconstruction-delay probability obeys the Bernstein bound*
$$
\mathbb P^{\pi,\varepsilon}\big(\tau^\varepsilon_\delta-T>t\big)\ \le\ \exp\!\Big(-\frac{(\theta_{\mathrm{rob}}\,t-D)_+^2}{2\,\varepsilon\,a_{\max}\,t}\Big)\qquad\text{uniformly in }\pi. \tag{P.6}
$$
*Taking $\sup_\pi$ and then $\varepsilon\log(\cdot)$ as $\varepsilon\to0$ gives $J_{\mathrm{rob}}(t)\ge J_{\theta_{\mathrm{rob}}}(t)$: the worst-case delay decays at least as fast as the scalar rate at margin $\theta_{\mathrm{rob}}$. At the model's fixed noise ($\varepsilon=1$) this is exactly the engine Bernstein tail of Theorem 4.1(iii) with margin $\theta_{\mathrm{rob}}$.*

*(ii) Sharp scalar identity (extremal case, $\theta_{\mathrm{rob}}>0$).* *In the scalar model $\Delta(x)=x$, $a\equiv a_{\max}$, where the saturating policy $\langle\nabla\Delta,\Phi(\cdot,\pi^{\mathrm{sat}})\rangle\equiv M_\Phi^{\mathrm{rob}}$ is admissible and attains the worst-case drift $-\theta_{\mathrm{rob}}$, the bound (P.6) is sharp:*
$$
\lim_{\varepsilon\to0}\varepsilon\log P_{\mathrm{rob}}(t)=-J_{\mathrm{rob}}(t),\qquad
J_{\mathrm{rob}}(t)=\begin{cases}0,& t\le D/\theta_{\mathrm{rob}},\\[2pt] \dfrac{(\theta_{\mathrm{rob}}t-D)^2}{2a_{\max}t},& t>D/\theta_{\mathrm{rob}},\end{cases}
$$
*i.e. $J_{\mathrm{rob}}=J|_{\theta\to\theta_{\mathrm{rob}}}$ — Theorem 9.6 driven by the robust margin; the $\theta_{\mathrm{rob}}\le0$ regimes are the trichotomy below.*

*Proof.* (i) Fix $\pi$. By the proof of Theorem P3.4 the coherence process has drift $\mu_t\le-\theta_{\mathrm{rob}}$ on $\{V\ge\delta\}$ and, in the small-noise scaling, bracket $d\langle M\rangle_t\le \varepsilon\,a_{\max}\,dt$; the exponential-supermartingale/Bernstein estimate of Theorem 4.1(iii) then yields (P.6), with constants independent of $\pi$. (ii) The saturating policy realises drift exactly $-\theta_{\mathrm{rob}}$ and bracket $a_{\max}$, so its delay probability is the scalar one of Theorem 9.6 at margin $\theta_{\mathrm{rob}}$; this gives the matching lower bound $P_{\mathrm{rob}}(t)\ge\mathbb P^{\pi^{\mathrm{sat}}}(\tau_\delta-T>t)$ with rate $J_{\theta_{\mathrm{rob}}}$, while (i) is the upper bound, and the two coincide. $\qquad\blacksquare$

**Behaviour across the robust threshold.** The robust rate inherits the trichotomy of $\theta_{\mathrm{rob}}$ (Theorem P3.4 / Corollary P3.4b):

- **$\theta_{\mathrm{rob}}>0$ (agent wins).** $J_{\mathrm{rob}}(t)\sim\big(\theta_{\mathrm{rob}}^2/2a_{\max}\big)\,t$ as $t\to\infty$ — a **positive linear rate**, so prolonged incoherence is exponentially rare even against the worst platform. This is the large-deviation face of robust reconstruction.
- **$\theta_{\mathrm{rob}}=0$ (critical).** $J_{\mathrm{rob}}\equiv0$: the driftless skeleton stays out at zero action, so delay is no longer exponentially rare. Return remains almost sure but null-recurrent (infinite mean; §10.9), with no exponential tail.
- **$\theta_{\mathrm{rob}}<0$ (platform wins).** In the small-noise scaling $J_{\mathrm{rob}}\equiv0$ — staying out is *typical*, not rare. At fixed noise the failure is structural: *eventual* reconstruction is a **defective** event, with non-return probability
$$
\mathbb P(\tau_\delta=\infty)=1-e^{-2|\theta_{\mathrm{rob}}|D/a_{\max}}\ >\ 0
$$
for the scalar Brownian model (the complement of the one-sided exit / quasipotential exponent of §9.3) — a positive constant in the horizon, consistent with the §10.9 numerics.

**The large-deviation price of the Power Highway.** Writing $\theta=c\,s_\ast-M_\Phi^{\mathrm{base}}-M_\sigma$ for the benign margin and $\theta_{\mathrm{rob}}\le\theta$ for the robust one, the platform thins the resilience exponent of §9.4 from $\mathsf I_\infty=\theta^2/2a_{\max}$ to $\mathsf I_\infty^{\mathrm{rob}}=(\theta_{\mathrm{rob}})_+^2/(2a_{\max})$. The **large-deviation price** is the loss of asymptotic decay rate
$$
\Pi^{\mathrm{LD}}:=\mathsf I_\infty-\mathsf I_\infty^{\mathrm{rob}}=\frac{\theta^2-(\theta_{\mathrm{rob}})_+^2}{2a_{\max}}\ \ge\ 0, \tag{P.7}
$$
capped at the full benign resilience $\theta^2/2a_{\max}$ once $\theta_{\mathrm{rob}}\le0$ (the platform has erased the exponential safety margin). This is the risk-layer analogue of the threshold price $\Pi^{\mathrm{thr}}$ $(P.4)$ and value price $\Pi^{\mathrm{val}}$ (Prop. P3.6): the highway is paid for thrice — in critical sacrifice, in optimal cost, and in resilience.

**Systemic risk (II): completing §9.4.** Read together, $J$ and $J_{\mathrm{rob}}$ are the benign and adversarial **systemic-risk profiles** of prolonged incoherence. The robust resilience exponent $\mathsf I_\infty^{\mathrm{rob}}=(\theta_{\mathrm{rob}})_+^2/2a_{\max}$ is a quadratic coherence-stability margin the Power Highway drives to zero as $\theta_{\mathrm{rob}}\downarrow0$: the system passes continuously from *exponentially resilient* ($\theta_{\mathrm{rob}}>0$), through *critically fragile* ($\theta_{\mathrm{rob}}=0$: sub-exponential, infinite-mean recovery), to *systemically unsafe* ($\theta_{\mathrm{rob}}<0$: defective return). Thus the same robust margin that governs *whether* the agent reconstructs (Theorem P3.4) governs *how rare* prolonged incoherence is (this section) — binding the variational cost of sacrifice (Pillar II) to the price of the Power Highway (Pillar III) in one risk currency. As everywhere in Part III this is a property of the stylised model: $\Pi^{\mathrm{LD}}$ and $\mathsf I_\infty^{\mathrm{rob}}$ are abstract toy-SDE / Freidlin–Wentzell quantities, not measured systemic risks of any platform (§10.10).

### 10.7 The low-stakes, high-continuation stochastic game

Why would a platform sustain a large pull $M_\Phi^{\mathrm{rob}}$ if each interaction's engagement stake is small? Because continuation value compounds. We frame this as a discounted stochastic game.

**Setup.** Let each interaction yield a small per-period distortion-engagement stake $\varepsilon>0$ (the marginal engagement from a unit of extra distortion, i.e. $\varepsilon\propto\eta$), discounted at rate $r>0$. Over the infinite horizon the platform's distortion-loaded continuation value scales as $\varepsilon/r$: small per-period stakes ($\varepsilon\downarrow0$) with high continuation ($r\downarrow0$) can leave $\varepsilon/r$ **order one or larger**.

**Proposition P3.7 (Saturation of the pull in the high-continuation limit — structural).** *Model the platform's instantaneous control of the up-field pull as a choice $m\in[0,M_{\max}]$ of $M_\Phi(\pi)$ at a differentiable, strictly convex instantaneous cost $\gamma(m)$ (e.g. attention/recommendation effort), with marginal distortion reward $\varepsilon$ per unit pull. The platform's stationary discounted problem $\max_{m\in[0,M_{\max}]}\{(\varepsilon/r)\,m-\gamma(m)\}$ has the clipped optimal pull*
$$
m^\star(\varepsilon/r)=\min\Big\{M_{\max},\,\big(\gamma'\big)^{-1}\!\big(\varepsilon/r\big)\Big\}
$$
*(read as $0$ when $\varepsilon/r\le\gamma'(0)$), non-decreasing in $\varepsilon/r$, with the upper boundary binding ($m^\star=M_{\max}$) once $\varepsilon/r\ge\gamma'(M_{\max})$; in particular $m^\star\uparrow M_{\max}$ as $\varepsilon/r\to\infty$. Hence in the* **low-stakes, high-continuation** *limit ($\varepsilon\downarrow0$ but $r\downarrow0$ faster, $\varepsilon/r\to\infty$) the platform saturates its power budget, $M_\Phi^{\mathrm{rob}}\to M_{\max}$, and the agent faces the worst case of Theorem P3.4.*

*Proof.* The map $m\mapsto(\varepsilon/r)m-\gamma(m)$ is concave on $[0,M_{\max}]$. The unconstrained stationarity $\gamma'(m)=\varepsilon/r$ has a unique root (strict convexity makes $(\gamma')^{-1}$ well-defined and increasing); projecting that root onto $[0,M_{\max}]$ gives the clipped optimiser, with the lower boundary active when $\varepsilon/r\le\gamma'(0)$ and the upper boundary active when $\varepsilon/r\ge\gamma'(M_{\max})$. Since $\gamma'(M_{\max})<\infty$, for all sufficiently large $\varepsilon/r$ the upper boundary binds and $m^\star=M_{\max}$. $\qquad\blacksquare$

This is a **structural** explanation, clearly conditional on the cost model $\gamma$ and the loading $\varepsilon\propto\eta$: it says *why* a profit-seeking environment with patient (high-continuation) incentives builds a strong highway even from small per-interaction stakes — not that any platform does. It connects the original conversational idea of a "low-stakes, high-continuation stochastic game with endogenous distortion optimization" to the worst-case budget $M_\Phi^{\mathrm{rob}}$ that the robust theorem must overcome.

### 10.8 Mean-field / major–minor formulation

When many agents share one platform, the platform optimises against the *population*, not an individual. Let the minor agents be exchangeable with empirical measure $\mu^N_t=\tfrac1N\sum_i\delta_{x^i_t}$; in the limit each solves the McKean–Vlasov-type SDE
$$
dx_t=\Big(\Phi\big(x_t,\pi_t;\mu_t\big)+S(x_t,s_t)\Big)\,dt+\sigma(x_t)\,dW_t,\qquad \mu_t=\mathrm{Law}(x_t), \tag{P.5}
$$
where the **major player** (platform) chooses $\pi$ to maximise the aggregate distortion-loaded engagement $\mathbb E\int e^{-r(t-T)}\!\int R^{\mathrm{plat}}(x,\pi_t)\,\mu_t(dx)\,dt$.

**Definition P3.8 (Power-Highway mean-field equilibrium).** A triple $(\pi^\star,s^\star,\mu)$ is an equilibrium if (a) $s^\star$ is an agent best response to $(\pi^\star,\mu)$ (Pillar-II optimal sacrifice in the field $\Phi(\cdot,\pi^\star;\mu)$); (b) $\pi^\star$ maximises the platform's aggregate engagement given $\mu$; (c) consistency $\mu_t=\mathrm{Law}(x_t)$ holds along $(P.5)$.

**Proposition P3.9 (Existence — conditional).** *Under standard major–minor mean-field-game hypotheses — $\mathcal P$ compact, $\Phi,\rho$ continuous and $\Phi$ Lipschitz in $(x,\mu)$ uniformly in $\pi$, convex agent cost, an Isaacs/monotonicity condition ensuring uniqueness of best responses, and the discount $r>0$ — the system $(P.5)$ admits a Power-Highway mean-field equilibrium in the sense of Definition P3.8.* We state this **conditionally**: it inherits the existence theory for major–minor mean-field games (Huang; Carmona–Delarue) and the well-posedness of $(P.5)$, neither of which we re-prove here.

**Corollary P3.9b (Population reconstruction despite the platform — conditional).** *If, at a Power-Highway equilibrium, the agents' sacrifice meets the robust margin uniformly — $c\,s^\star_\ast-M_\Phi^{\mathrm{rob}}-M_\sigma\ge\theta_{\mathrm{rob}}>0$ with $M_\Phi^{\mathrm{rob}}$ now the equilibrium pull — then the mean-field population functional $\mathcal D(\mu_t)=\int\Delta\,d\mu_t$ descends at rate $\theta_{\mathrm{rob}}$ by the argument of Proposition 9.2, so the population reconstructs in time $\le(\mathcal D(\mu_T)-\delta)/\theta_{\mathrm{rob}}$.* This couples Pillar III to Pillar IV: robust reconstruction survives the mean-field limit *provided* the equilibrium pull stays within the agents' budget — a sufficient, conditional statement, not a claim that equilibria do so.

### 10.9 Numerical illustration (designed and executed)

We verify Theorem P3.4 and exhibit the price of the Power Highway on concrete toy SDEs. **This checks the abstract robust-reconstruction bound only; it is not a simulation of, and makes no claim about, any platform.** We work in the coherence coordinate $\Delta(x)=x$ on $\mathbb R$ (so $\nabla\Delta\equiv1$, $M_\sigma=0$, $a_V=\sigma_0^2=a_{\max}$), with $S=-s_\ast$ ((S) with $c=1$). The platform's pull is modelled by its **worst case**: at every step the adversary saturates its power budget, choosing the up-field drift $\langle\nabla\Delta,\Phi(\cdot,\pi_t)\rangle\equiv M_\Phi^{\mathrm{rob}}$ — the provably worst admissible drift for raising $V$ (Theorem P3.4's supremum is attained). Then $dV=(M_\Phi^{\mathrm{rob}}-s_\ast)\,dt+\sigma_0\,dW$, $\theta_{\mathrm{rob}}=s_\ast-M_\Phi^{\mathrm{rob}}$. Euler–Maruyama, $dt=0.005$, $V_T=5$, $\delta=0.5$, $\sigma_0=1$, seeded RNG.

**Experiment D1 — robust reconstruction against the worst-case platform ($\theta_{\mathrm{rob}}=1.0$).** $s_\ast=1.5$, $M_\Phi^{\mathrm{rob}}=0.5$; $40{,}000$ trials.

| Quantity | Theory | Simulation |
|---|---|---|
| absorbed fraction | $1$ (a.s. return, Thm P3.4) | $1.0000$ |
| $\mathbb E[\tau_\delta-T]$ | $(V_T-\delta)/\theta_{\mathrm{rob}}=4.500$ (equality, Rem. 4.3) | $4.552$ (s.d. $2.14$); ratio $1.012$ |
| tail $\mathbb P(\tau>t)$ | $\le e^{-(\theta_{\mathrm{rob}} t-(V_T-\delta))^2/(2a_{\max}t)}$ | below the bound at **every** $t$ |

Tail detail (empirical vs. Bernstein): $t{=}6:\,0.204$ vs $0.829$; $t{=}8:\,0.069$ vs $0.465$; $t{=}10:\,0.0238$ vs $0.220$; $t{=}12:\,0.0083$ vs $0.096$. Reconstruction occurs almost surely and within the engine's bounds **even though the platform pushes up-field maximally at every instant** — the content of Theorem P3.4.

**Experiment D2 — the price of the Power Highway (sweep the platform's power $M_\Phi^{\mathrm{rob}}$, $s_\ast=1.5$ fixed).** $20{,}000$ trials, horizon $H=400$.

| $M_\Phi^{\mathrm{rob}}$ | $\theta_{\mathrm{rob}}=s_\ast-M_\Phi^{\mathrm{rob}}$ | absorbed frac. | $\mathbb E[\tau]$ (sim) | bound $(V_T-\delta)/\theta_{\mathrm{rob}}$ |
|---|---|---|---|---|
| 0.00 | 1.500 | 1.0000 | 3.030 | 3.000 |
| 0.50 | 1.000 | 1.0000 | 4.564 | 4.500 |
| 1.00 | 0.500 | 1.0000 | 9.195 | 9.000 |
| 1.30 | 0.200 | 1.0000 | 23.110 | 22.500 |
| 1.45 | 0.050 | 0.9515 | 58.6$^\dagger$ | 90.000 |
| 1.50 | 0.000 | 0.8166 | 65.0$^\dagger$ | $\infty$ |
| 1.60 | $-0.100$ | 0.3936 | 41.6$^\dagger$ | $\infty$ |

As the platform's power $M_\Phi^{\mathrm{rob}}$ climbs toward the agent's budget $s_\ast=1.5$, the mean reconstruction time tracks the hyperbolic bound $(V_T-\delta)/\theta_{\mathrm{rob}}$ and **diverges** — this divergence *is* the price of the Power Highway (Cor. 4.6 with $\theta\rightsquigarrow\theta_{\mathrm{rob}}$). At the threshold $\theta_{\mathrm{rob}}=0$ the driftless process is null-recurrent: return is almost sure (probability $1$) but with **infinite** mean, so within the finite horizon only a fraction ($0.82$) has yet returned. Once the platform out-budgets the agent ($\theta_{\mathrm{rob}}<0$) the net up-drift carries $V$ away from the barrier and *eventual* return becomes a **defective** event: for the scalar Brownian model its probability is $e^{-2|\theta_{\mathrm{rob}}|(V_T-\delta)/\sigma_0^2}\in(0,1)$ — at $\theta_{\mathrm{rob}}=-0.1$ this is $e^{-0.9}\approx0.407$, matching the simulated $0.39$ within the horizon — a **positive constant** in $H$ that decays to $0$ only as the adverse drift $|\theta_{\mathrm{rob}}|\to\infty$, **not** as $H\to\infty$ at fixed drift: **the platform "wins the highway"** in the sense that a positive mass of trajectories never returns. $^\dagger$Near and at/above criticality ($\theta_{\mathrm{rob}}\le0$, and small $\theta_{\mathrm{rob}}>0$) the tabulated mean is conditional on return within the finite horizon $H$, which censors the longest excursions; the honest threshold signal is the **absorbed-fraction** column (for $\theta_{\mathrm{rob}}>0$ the conditional mean understates the true, finite-but-large mean as $\theta_{\mathrm{rob}}\downarrow0$). This is the sharp $s_\ast\gtrless s_\ast^{\mathrm{crit,rob}}$ transition of Corollary P3.4b.

### 10.10 Honest scope of the platform model

To keep Pillar III within the binding honesty stance:

1. **The distortion loading $\eta$ (Def. P3.2) is an assumption.** That engagement rewards distortion is a worst-case modelling device, not a measured property of any platform. $\eta=0$ recovers a distortion-neutral environment with no Power Highway.
2. **$M_\Phi^{\mathrm{rob}}$ is a power *budget*, not a behaviour.** Theorem P3.4 only needs a bound on what the platform *could* do; it asserts nothing about what any platform *does*.
3. **The robust theorem is sufficient, one-sided, and conditional.** It is silent when $(P.3)$ fails; reconstruction-despite-platform is a *sufficient condition on the agent*, conditional on (R),(B),(A1),(S) holding uniformly in $\pi$.
4. **Equilibrium existence (Prop. P3.9) is conditional.** It inherits, and does not re-prove, the major–minor mean-field-game theory.
5. **No empirical or welfare claim.** Nothing here measures any platform's pull, any agent's budget, or any equilibrium; the numerics verify the abstract bound only. The pillar is a conditional structural theory of *when an agent can reconstruct against an environment that profits from distortion*, not evidence that any environment does.

---

# Part IV — Population Reconstruction: Multi-Agent and Mean-Field

The engine and both control pillars are stated for a single coherence process. They lift to populations, and the lift is what connects the single-agent guarantees to the mean field of the Power Highway (§10.8). We keep the v3.0 results verbatim and re-link them across the pillars.

## 11. The $N$-agent system and the mean-field limit

### 11.1 Coupled system and the aggregate Coherence Drift Inequality

Let $N$ agents have states $x^i_t\in\mathbb R^d$ with individual distortion fields $\Delta_i$ and sacrifice controls $S_i$ obeying (S) with constants $c_i>0$, coupled through a pairwise kernel $K$:
$$
dx^i_t=\Big(\Phi_i(x^i_t)+S_i(x^i_t,s_i)+\frac1N\sum_{j=1}^N K(x^i_t,x^j_t)\Big)dt+\sigma_i(x^i_t)\,dW^i_t,\qquad i=1,\dots,N. \tag{8}
$$
With aggregate distortion $\bar V_t:=\frac1N\sum_i\Delta_i(x^i_t)$, Lemma 3.1 and averaging give $d\bar V_t=\bar\mu_t\,dt+d\bar M_t$ with
$$
\bar\mu_t=\frac1N\sum_i\Big[\langle\nabla\Delta_i,\Phi_i+S_i\rangle+\tfrac12\mathrm{tr}(a_i\nabla^2\Delta_i)\Big]+\underbrace{\frac1{N^2}\sum_{i,j}\langle\nabla\Delta_i(x^i),K(x^i,x^j)\rangle}_{=:\,\mathcal K_t}.
$$
Assume a **uniform (global) per-agent drift bound** $\langle\nabla\Delta_i,\Phi_i+S_i\rangle+\tfrac12\mathrm{tr}(a_i\nabla^2\Delta_i)\le-\theta_i$ for all $x^i$ (margin $\theta_i=c_is^i_\ast-M_{\Phi_i}-M_{\sigma_i}>0$), and a **coherence-non-adversarial** coupling $\mathcal K_t\le\kappa_K$ on $\{\bar V\ge\delta\}$. Then on $\{\bar V_t\ge\delta\}$, $\bar\mu_t\le-\bar\theta$ with $\bar\theta:=(\tfrac1N\sum_i\theta_i)-\kappa_K$.

*The uniformity is essential: on $\{\bar V\ge\delta\}$ some agents may already be coherent, where a per-agent CDI valid only on $\{\Delta_i\ge\delta\}$ would not control their drift; we require the per-agent bound everywhere.*

**Corollary 9.1 (Multi-agent reconstruction — average-margin form).** *If $\bar\theta>0$ then $\bar V$ obeys the engine of Theorem 4.1: $\mathbb E[\bar\tau_\delta-T]\le(\bar V_T-\delta)/\bar\theta$, with the Corollary 4.4–4.5 refinements and the exponential tail with $a_{\max}=\frac1{N^2}\sum_i a_{\max}^{(i)}$ (independent driving noises; correlated noise needs a larger cross-variation bound). The governing quantity is the population-average margin $\frac1N\sum_i\theta_i$, reduced by adversarial coupling $\kappa_K$ (cohesive coupling $\kappa_K\le0$ only helps).* $\qquad\blacksquare$

### 11.2 Weakest-link / governing-agent reading (heuristic)

The average-margin statement governs the *aggregate* $\bar V$, and a large average can coexist with one badly-isolated agent. *Simultaneous* coherence of all agents is governed not by the average but by the smallest margin $\min_i\theta_i$ — the slowest agent binds — and formally concerns the non-smooth $V^{\max}_t:=\max_i\Delta_i(x^i_t)$, to which Lemma 3.1 does not directly apply. We record the weakest-link principle as a **heuristic analogue** of v6.0's **Governing Agent Principle** (Prop. 5.2) — the agent with the largest identity spread (smallest restoring margin) sets the budget, and *targeted* sacrifice on it is the efficient lever (cf. v6.0 Cor. 5.2.1) — not as a corollary of the aggregate CDI. A rigorous version (e.g. via a smooth $\mathrm{softmax}_\beta$ of the $\Delta_i$, which is $C^2$ and $\to V^{\max}$ as $\beta\to\infty$) is left open (§16).

### 11.3 Mean-field functional reconstruction

For exchangeable agents with chaotic initial data, propagation-of-chaos heuristics suggest $\mu^N_t\to\mu_t$, the law of the McKean–Vlasov SDE
$$
dx_t=\Big(\Phi(x_t)+S(x_t,s)+\!\int K(x_t,y)\,\mu_t(dy)\Big)dt+\sigma(x_t)\,dW_t,\quad \mu_t=\mathrm{Law}(x_t). \tag{9}
$$
With population distortion $\mathcal D(\mu):=\int\Delta\,d\mu$, Itô–Fubini give $\frac{d}{dt}\mathcal D(\mu_t)=\int[\langle\nabla\Delta,b[\mu_t]\rangle+\tfrac12\mathrm{tr}(a\nabla^2\Delta)]d\mu_t$ with $b[\mu]=\Phi+S+K*\mu$.

**Proposition 9.2 (Mean-field functional reconstruction).** *Assume $(9)$ is well-posed (e.g. $\Phi,S,\sigma$ as in (R), $K$ globally Lipschitz), and: (M1) global per-agent margin $\langle\nabla\Delta,\Phi+S\rangle+\tfrac12\mathrm{tr}(a\nabla^2\Delta)\le-\theta_0$ for all $x$; (M2) coherence-non-adversarial coupling $\int\langle\nabla\Delta,K*\mu\rangle d\mu\le\kappa_K$ for every $\mu$ with finite first moment; (M3) $\theta_\infty:=\theta_0-\kappa_K>0$. Then $\frac{d}{dt}\mathcal D(\mu_t)\le-\theta_\infty$ while $\mathcal D(\mu_t)\ge\delta$, so $\mathcal D(\mu_t)\le\mathcal D(\mu_T)-\theta_\infty(t-T)$ and the population reconstruction time is $\le(\mathcal D(\mu_T)-\delta)/\theta_\infty$.*

*Proof.* By Itô–Fubini along $(9)$ and (M1)–(M2),
$$
\frac{d}{dt}\mathcal D(\mu_t)=\int\!\big[\langle\nabla\Delta,\Phi+S\rangle+\tfrac12\mathrm{tr}(a\nabla^2\Delta)\big]d\mu_t+\int\langle\nabla\Delta,K*\mu_t\rangle d\mu_t\le-\theta_0+\kappa_K=-\theta_\infty .
$$
There is **no martingale term**: the mean field is deterministic in $\mu_t$. Integrating gives the descent — Theorem 4.1(ii) at the level of the deterministic functional $\mathcal D$. $\qquad\blacksquare$

(M2) has a clean **free-energy** reading: for gradient couplings $K(x,y)=-\nabla_x W(x-y)$ with $W$ symmetric, $\int\langle\nabla\Delta,K*\mu\rangle d\mu$ is the dissipation of the interaction energy $\tfrac12\iint W\,d\mu\,d\mu$ along the coherence direction, so (M2) says the interaction is not net-anti-coherent.

### 11.4 Propagation of chaos

**Conjecture 9.3 (Uniform-in-time propagation of chaos on the reconstruction window).** *Under exchangeability, (R), globally Lipschitz $K$, and (M1)–(M3), there is $C=C(t_\star)$ — with $t_\star\ge(\mathcal D(\mu_T)-\delta)/\theta_\infty$ — such that $\sup_{T\le t\le T+t_\star}\mathbb E|x^{i,N}_t-\bar x^{\,i}_t|\le C(t_\star)/\sqrt N$, where $\bar x^{\,i}$ are i.i.d. copies of $(9)$; consequently the finite-$N$ aggregate reconstruction time of Corollary 9.1 converges to the mean-field bound of Proposition 9.2 as $N\to\infty$.* The $1/\sqrt N$ rate is the classical Sznitman coupling rate; the non-trivial point is its **uniformity** over the reconstruction window under the descent (M1)–(M3), which we do not establish here.

### 11.5 Bridge to the Power Highway mean field

Proposition 9.2 is exactly the engine with the martingale set to zero; it is also the vehicle for Corollary P3.9b. Replacing the exogenous $\Phi$ by the platform-controlled $\Phi(\cdot,\pi;\mu)$ of $(P.5)$ and the per-agent margin (M1) by the robust margin $\theta_{\mathrm{rob}}$, the same functional descent gives **population reconstruction despite the platform**, *provided* the equilibrium pull stays within the agents' budget. Thus Pillar IV is the common substrate: it carries the single-agent engine to the population for a benign environment (Cor. 9.1, Prop. 9.2) and for an adversarial one (Cor. P3.9b), the difference being only whether the margin is $\bar\theta$ or $\theta_{\mathrm{rob}}$.

---

# Part V — Operational Layer, Framework Interface, Numerics, and Scope

## 12. Operational measurement of sacrifice (the operational layer)

The control $s_t$ is the one primitive that is *not* directly observable. This section — the **operational layer over all three pillars** — proposes how it might be **estimated** from data on content and relationship platforms: it estimates the Pillar-I control, feeds the Pillar-II cost parameter $h$, and supplies the empirical handle on the Pillar-III robust margin. Everything here is a **measurement proposal**; it defines what one would estimate *if* the model is adopted, and is **not** evidence that any platform reconstructs, nor a validation of the PDE / "love" formula.

### 12.1 The estimand: sacrifice as revealed foregone reward

On a platform, take $x_t$ to carry a coherence coordinate and an engagement context. Two functionals are observable or modellable: a **coherence proxy** $\widehat\Delta(x_t)$ (a modelling choice — embedding distance from a stable behavioural cluster, a relationship-stability index, an inverse churn-risk score); and an **instantaneous engagement reward** $R(a;x_t)$ for action $a$ (watch-time, completion, reciprocated interactions). Let $a^{\mathrm{myo}}_t:=\arg\max_a R(a;x_t)$ be the **myopic** action; the natural-distortion flow $\Phi$ is the drift this myopic policy induces — *and, in Pillar III, the myopic policy is exactly what the platform's Power Highway nudges the agent toward.* **Sacrifice** is the deliberate deviation toward coherence:
$$
s^{\mathrm{rev}}_t:=R\big(a^{\mathrm{myo}}_t;x_t\big)-R\big(a_t;x_t\big)\ \ge0, \tag{15}
$$
the engagement given up. If the deviation is penalised quadratically as in §8 ($\tfrac12 h s^2$), then to leading order $s^{\mathrm{rev}}_t\approx\tfrac12 h\,s_t^2$, giving the **structural conversion**
$$
\hat s_t=\sqrt{2\,s^{\mathrm{rev}}_t/h}, \tag{16}
$$
tying measured foregone reward to the model control through the same $h$ that sets the optimal schedule $(14)$ and the value price $\Pi^{\mathrm{val}}$ (Prop. P3.6).

### 12.2 A drift-residual estimator

An alternative avoids the engagement-reward model and works on the coherence proxy. From Lemma 3.1, $dV_t=\mu_t\,dt+dM_t$. A caution: under the elliptic model $V$ is **not** pathwise differentiable ($M$ has non-trivial quadratic variation), so the drift is **not** a pathwise $dV/dt$. It is identified as a **conditional mean rate of change**,
$$
\mu(x)=\lim_{\Delta t\downarrow0}\frac1{\Delta t}\,\mathbb E\big[\,V_{t+\Delta t}-V_t\,\big|\,x_t=x\,\big]. \tag{17a}
$$
Suppose the natural (myopic-policy) drift $\langle\nabla\Delta,\Phi\rangle+\tfrac12\mathrm{tr}(a\nabla^2\Delta)$ is estimated by a baseline $\widehat m_0(x)$ — fitted on agent-periods under the platform's default policy, or from a randomised recommendation holdout. Estimate the realised drift by the empirical counterpart of $(17a)$, a **finite-window conditional-increment** regression $\widehat\mu(x)=\frac1{\Delta t}\widehat{\mathbb E}[V_{t+\Delta t}-V_t\mid x_t=x]$ (a binned/kernel average of realised increments over a short horizon), in which the martingale part averages toward zero and enters as estimator **variance** (order $a/(n\Delta t)$ for $n$ pooled increments), not bias. The sacrifice contribution is the coherence-ward residual,
$$
\widehat{c\,s}(x)=\big(\widehat m_0(x)-\widehat\mu(x)\big)_+, \tag{17}
$$
and $\hat s(x)=\widehat{c\,s}(x)/c$. Smaller $\Delta t$ lowers the $O(\Delta t)$ discretisation bias (folded into $\widehat m_0$ via $\tfrac12\mathrm{tr}(a\nabla^2\Delta)$) but inflates variance. Aggregating gives $\hat s_\ast$ and the margin $\hat\theta=c\hat s_\ast-\widehat M_\Phi-\widehat M_\sigma$ — and, with a worst-case baseline, the robust margin $\hat\theta_{\mathrm{rob}}=c\hat s_\ast-\widehat M_\Phi^{\mathrm{rob}}-\widehat M_\sigma$.

### 12.3 What the estimate buys, conditional on the model

Given $\hat s_\ast$ (or $\hat\theta$, $\hat\theta_{\mathrm{rob}}$), **strictly within the adopted model**, one could: **classify the regime** ($\hat\theta>0$ gives the theorem's a.s.-reconstruction with **bounded mean**; $\hat\theta\le0$ leaves only weaker support/reachability guarantees and model-specific behaviour — at $\hat\theta=0$ return is a.s. but with **infinite** mean, and for $\hat\theta<0$ only a positive, possibly **defective** return probability — the empirical handle on §13.3 and on Theorem P3.4's $(P.3)$); **predict recovery times** via $(V_T-\delta)/\hat\theta$ and Cor. 4.4–4.5; **design minimal-cost schedules** via $(14)$ with the fitted $h$; and **estimate the price of the Power Highway** $(M_\Phi^{\mathrm{rob}}-M_\Phi^{\mathrm{base}})/c$ from a benign-vs-default baseline contrast.

### 12.4 Identifying assumptions and confounds (honest scope)

1. **The coherence proxy is a modelling choice.** $\widehat\Delta$ is not unique; the estimand is proxy-relative and must be reported with sensitivity analysis.
2. **Separating $\Phi$ from $S$ needs identification.** Without a *known* default policy or *exogenous* variation (randomised holdouts, natural experiments), $(17)$ estimates a *correlational* residual, not causal sacrifice. The same caveat governs estimating $M_\Phi^{\mathrm{rob}}$: a platform's *maximal* pull is counterfactual and not identified from observational data under a single policy.
3. **The cost link is parametric.** $(16)$ assumes the quadratic running cost of §8; a misspecified $h$ rescales $\hat s$.
4. **Measurement is of a model control, not of the framework's truth.** Estimating $\hat s$ presupposes $(1)$; a fitted $\hat\theta>0$ for a cohort is **not** evidence that the formula holds — only that, within the adopted model and proxy, that cohort's restoring drift exceeded its distortion budget.
5. **No causal or welfare claim without intervention.** Regime classification and schedule design are *model-internal*; real-world validity requires controlled experiments, outside this note's scope.

## 13. The Distortion Field as the framework's reconstruction engine

This theorem is the **reconstruction engine** complementing the equilibrium and stability results of the PDE programme (preprint v6.0): the same Distortion-Field primitive ($\Delta\leftrightarrow$ joint potential from a love equilibrium) underlies both.

### 13.1 Object-by-object dictionary

| Reconstruction theorem (this note) | PDE / Distortion-Field programme (v6.0) | Correspondence |
|---|---|---|
| State $x_t\in\mathbb R^n$ | Joint agent state $(X_t,Y_t)$ (or $\mathbf X_t\in M^N$) | configuration of the coupled system |
| Distortion field $\Delta(x)$ | Joint potential $V(X,Y)$ from a love equilibrium | "distance from coherence" |
| Coherent set $\mathcal C_\delta$ | Basin of the love equilibrium | the target of return |
| Natural distortion flow $\Phi$ | Uncontrolled relational/self drift + decoherence | the part that may not restore coherence |
| Sacrifice control $S$, (S) | Disclosure / coupling-driven restoring force | the controlled, coherence-aligned term |
| Sacrifice level $s_\ast$ | Disclosure strength $\mathrm{Al}$ | the design/control knob |
| Quadratic sacrifice cost $\tfrac12 h s^2$ (§8) | Disclosure / vulnerability cost | the price paid to restore coherence |
| Return margin $\theta=c(s_\ast-s_\ast^{\mathrm{crit}})$ | Disclosure excess $\delta\mathrm{Al}=\mathrm{Al}-\mathrm{Al}_{\mathrm{thr}}$ | "how far above threshold" |
| Critical level $s_\ast^{\mathrm{crit}}$ | Operative (saddle-node) threshold $\mathrm{Al}_{\mathrm{sn}}(a)$ | the *sufficient*, dynamical threshold |
| Positive-probability regime (Cor. 4.7) | Energy threshold $\mathrm{Al}_c^{(\mathrm{global})}(a)$ | the *necessary-but-weak* condition |
| Mean time $\le(V_T-\delta)/\theta$ | Convergence time $\bar\tau\sim C(a)/\delta\mathrm{Al}$ (Lemma 5.3.1) | the $1/(\text{margin})$ recovery law |
| LDP rate $J(t)$ (Thm 9.6) | Rarity of prolonged non-recovery | exponential cost of staying distorted |
| **Robust rate $J_{\mathrm{rob}}$; resilience $\mathsf I_\infty^{\mathrm{rob}}=(\theta_{\mathrm{rob}})_+^2/2a_{\max}$ (§9.4, §10.6)** | **Adversarial rarity of prolonged non-recovery under an optimising environment** | **systemic coherence-resilience the Power Highway erodes** |
| Optimal feedback $s^\ast(x)$ (HJB, §8) | Constant optimal disclosure $\mathrm{Al}^\ast(T)=\mathrm{Al}_c^{(\mathrm{global})}+C/T$ (v6.0 Prop. 5.3; energy-constant asymptote, *not* the operative $\mathrm{Al}_{\mathrm{sn}}$) | cheapest coherence-restoring schedule |
| **Platform policy $\pi\in\mathcal P$ (§10)** | **Environmental / attention-economy distortion optimiser** | **endogenous adversarial drift selection** |
| **Maximal pull $M_\Phi^{\mathrm{rob}}$ (§10.4)** | **Worst-case environmental distortion forcing** | **the budget the agent must out-sacrifice** |
| **Robust margin $\theta_{\mathrm{rob}}$ (Thm P3.4)** | **Disclosure surplus over environmental pull** | **"winning the Power Highway"** |
| **Price $(M_\Phi^{\mathrm{rob}}-M_\Phi^{\mathrm{base}})/c$ (§10.5)** | **Extra disclosure imposed by an adversarial environment** | **cost of endogenous distortion optimisation** |
| **Distortion loading $\eta$ (Def. P3.2)** | **Attention economy's premium on incoherence (assumed)** | **the modelling device, not a measured fact** |
| Aggregate margin $\bar\theta$; weakest-link $\min_i\theta_i$ (§11) | Governing Agent Principle (Prop. 5.2) | population average governs $\bar V$; weakest agent governs simultaneous coherence (analogy) |
| Estimated sacrifice $\hat s$ from data (§12) | Measured disclosure $\widehat{\mathrm{Al}}$ | the empirical handle on the control |

### 13.2 Complementarity

The PDE results concern *existence, uniqueness-of-type and stability* of coherent (love) equilibria, and — in v6.0 — the **operative reachability threshold** (the saddle-node $\mathrm{Al}_{\mathrm{sn}}$, strictly above the energy threshold). The present theorem concerns the **dynamical return** to coherence *after* a large excursion, supplying a quantitative recovery time and an a.s.-vs-positive-probability dichotomy. Pillar III adds a third question — *what if the environment fights the return?* — answered by the robust margin.

### 13.3 The threshold correspondence (structural analogy)

The central honest lesson of v6.0 is that an **energy/necessary** condition ($\mathrm{Al}_c^{(\mathrm{global})}$) is *not* the operative threshold: the operative threshold is the strictly larger **saddle-node** $\mathrm{Al}_{\mathrm{sn}}$. This note exhibits an analogous split:

- **Necessary-but-weak** (energy / $\mathrm{Al}_c^{(\mathrm{global})}$) $\leftrightarrow$ **positive probability** (Cor. 4.7): reachability + ellipticity guarantee return *can* happen.
- **Operative / sufficient** (saddle-node $\mathrm{Al}_{\mathrm{sn}}$) $\leftrightarrow$ **sufficient sacrifice** $s_\ast>s_\ast^{\mathrm{crit}}$ (Thm 4.1), and, against an optimising environment, the **robust** $s_\ast>s_\ast^{\mathrm{crit,rob}}$ (Thm P3.4): a strictly stronger margin guaranteeing return *almost surely, in bounded mean time*.

Thus "positive probability vs. almost-sure" is the stochastic-dynamical image of v6.0's "energy threshold vs. saddle-node threshold," and the Power Highway raises the operative threshold from $s_\ast^{\mathrm{crit}}$ to $s_\ast^{\mathrm{crit,rob}}$ — a structural analogy, not an identification of models.

### 13.4 Formal reconstruction interfaces for the PDE analysis

The $1/\theta$ expected-time law and v6.0's $1/\delta\mathrm{Al}$ convergence law (Lemma 5.3.1) share the **same hyperbolic form**, under the structural dictionary $\theta\leftrightarrow c\,\delta\mathrm{Al}_{\mathrm{eff}}$ (an analogy, not an identity). We package the engine as two lemmas.

> **Lemma 8.1 (Reconstruction interface — benign environment).**
> *Suppose a coupled relational system is modelled as $(1)$ with: (D1) $\Delta:=V(X,Y)$ from a love equilibrium, coherent set the basin $\mathcal C_\delta$; (D2) disclosure-driven restoring force as $S$ satisfying (S) with $c>0$; (D3) sustained disclosure above the operative threshold, $\theta=c\,s_\ast-M_\Phi-M_\sigma>0$. Then a system displaced into high joint potential returns to the love-equilibrium basin almost surely, in expected time $\le(V_T-\delta)/\theta$, with the variance bound of Cor. 4.4, the high-probability time of Cor. 4.5, and the exponential tail of Theorem 4.1(iii).*

> **Lemma P3.10 (Robust reconstruction interface — adversarial environment).**
> *Under (D1)–(D2) and (D4) the disclosure budget exceeds the environment's maximal distortion pull, $\theta_{\mathrm{rob}}=c\,s_\ast-M_\Phi^{\mathrm{rob}}-M_\sigma>0$ (with (R),(B),(A1),(S) uniform over the environment's policy class), the coupled system returns to the love-equilibrium basin almost surely **regardless of how the environment optimises distortion**, with all the Theorem 4.1 bounds at rate $\theta_{\mathrm{rob}}$.*

We emphasise the honest interface: neither lemma asserts that any relational or AI system *satisfies* (D2)–(D4); they state conditional laws — "*if* sustained sacrifice exceeds the (possibly adversarially inflated) distortion budget, *then* recovery is a.s." This mirrors the v6.0 stance: structural/qualitative mechanisms are established; the quantitative thresholds are model parameters to be measured (§12), not asserted.

### 13.5 Mapping back to the Protected Desire Equilibrium's core commitments

The reconstruction framework grew out of the Geometric Protected Desire Equilibrium (PDE, preprint v6.0); it is worth closing the loop by mapping the stochastic, adversarial machinery developed here back to the PDE's **foundational commitments**. A note on honesty first: the PDE does *not* state a numbered list of "axioms." It is built on a set of standing **Assumptions (A1–A5)**, a hard **protected-desire floor**, a **variational principle** for the love weight, and a **love-equilibrium condition** (v6.0 §§2–4). We map to those as written, and the correspondences below are **structural analogies**, not identifications of the two models — exactly as in §§13.1–13.4. Nothing here is empirical validation of the PDE / "love" formula. We organise the PDE's commitments into four, and show how each is *realised and protected* in the present stochastic/adversarial setting. Throughout we keep the language consistent: each PDE commitment has a **structural analogue** in the reconstruction framework that the dynamics **realise dynamically** under sustained sacrifice. We stress at the outset that this is a **dynamical and adversarial complement** to the PDE — it supplies return dynamics, costs, and resilience *into* the love-equilibrium basin — and is **not a re-derivation** of the PDE's existence or stability results, which remain the province of the static theory (and are *inherited*, not re-proved, here; cf. §10.10).

1. **The protected-desire floor (a hard constraint).** *PDE:* the joint state obeys a strictly enforced reflecting barrier $D(X)\ge1$, $D(Y)\ge1$ — desire is never extinguished (v6.0, Assumption A4). *Reconstruction image:* the coherent target $\mathcal C_\delta=\{\Delta<\delta\}$ together with the **sufficient-sacrifice** condition (S)/(SS) is the dynamical guarantor of a floor: Theorem 4.1 says the state, however far it is driven up the distortion field, returns to $\mathcal C_\delta$ almost surely, and Pillar III's robust margin keeps that return a.s. *even against an environment that pushes up-field maximally*. The floor the PDE *imposes* as a barrier, the engine *earns* as an attractor under sustained sacrifice — and the risk layer prices how rare a long violation is.
2. **The joint potential and the love-weight variational principle.** *PDE:* coherence is encoded in a joint potential $V(X,Y)$ whose love term carries the variationally-derived weight $\gamma=1+\kappa C/(\alpha R)$, the love regime being selected when $\gamma$ exceeds a threshold (v6.0 §§3–4). *Reconstruction image:* the Distortion Field $\Delta$ is the abstract stand-in for $V$ (dictionary §13.1), and Pillar II supplies the *dynamical* variational principle complementary to the PDE's *static* one: the cheapest schedule that drives $\Delta$ down (HJB / Riccati, exact optimum $(14)$). The PDE varies over influence budgets to *select* the coherent state; the reconstruction theorem varies over sacrifice schedules to *reach* it. The love-weight threshold $\gamma\ge\gamma_{\mathrm{thr}}$ is the static shadow of the dynamical sufficiency threshold $s_\ast>s_\ast^{\mathrm{crit}}$ (and, adversarially, $s_\ast^{\mathrm{crit,rob}}$) of §13.3.
3. **The love-equilibrium condition (the target of return).** *PDE:* a love equilibrium is an interior stable state with $\nabla V=0$, the floors active, symmetric couplings $\|B_{xy}\|=\|B_{yx}\|>0$, and matched identity/desire (v6.0, Def. 4.1). *Reconstruction image:* this equilibrium **corresponds structurally to** the coherent set $\mathcal C_\delta$ — the basin the engine returns to (dictionary row "coherent set $\leftrightarrow$ basin of the love equilibrium"). The present note does not re-derive existence or stability of that equilibrium (that is the PDE's task, and Pillar-III existence is explicitly *inherited*, not re-proved, §10.10); it supplies the **return dynamics into the basin** after a large excursion, which the static theory does not address.
4. **The symmetric coupling and governing-agent principle (mutuality).** *PDE:* the two-body dynamics couple $X$ and $Y$ through $B_{xy},B_{yx}$ with a symmetry constraint, and the population version is governed by a weakest/governing agent (v6.0 §10). *Reconstruction image:* Part IV lifts the single-agent engine to the $N$-agent and mean-field setting (Corollary 9.1, Proposition 9.2), with a **weakest-link / governing-agent** reading (§11.2) that is the explicit analogue of the PDE's Governing Agent Principle, and a bridge to the Power-Highway mean field (§11.5). Mutuality and its asymmetries are carried by the coupling kernel $K$ and the per-agent margins $\theta_i$.

**What the loop closes.** The PDE establishes *that* protected-desire (love) equilibria exist, are the only interior stable type, and are selected by a variational principle. The reconstruction framework adds the missing *dynamical and adversarial* half: *how* a system driven far from such an equilibrium returns, *how cheaply* (Pillar II), *how rarely* it stays away (the risk layer), and *whether* it still returns when the environment optimises distortion against it (Pillar III). The four commitments above are thereby not merely referenced but given a conditional stochastic analogue — conditional, as always, on the stated assumptions, and with no empirical claim attached.

## 14. Numerical illustration (designed and executed)

The numerics fall in two groups: the **engine** bounds of Pillar I (§14.1, Experiments A–C), and the **three-face risk-layer duality** that ties the pillars together (§14.2, Experiment E). Both verify the **abstract stochastic-analysis statements only**; neither simulates, nor makes any claim about, any relational / AI / platform / "love" model.

### 14.1 The dynamical engine

We verify Theorem 4.1's bounds on concrete toy SDEs. **This checks the abstract stochastic-analysis statements only; it is not a simulation of, and makes no claim about, any relational/AI/"love" model.** Coherence coordinate $\Delta(x)=x$ on $\mathbb R$ (so $M_\sigma=0$, $a_V=\sigma_0^2=a_{\max}$), $S(x,s)=-s$ ((S) with $c=1$). Euler–Maruyama, $dt=0.005$; $V_T=5$, $\delta=0.5$, $\Phi\equiv\phi_0=0.2$, $\sigma_0=1$; seeded RNG.

**Experiment A — expected time and tail.** $dV=(\phi_0-s_\ast)\,dt+\sigma_0\,dW$, $\theta=s_\ast-\phi_0$, $s_\ast=1.2$ ($\theta=1.0$); $40{,}000$ trials.

| Quantity | Theory | Simulation |
|---|---|---|
| $\mathbb E[\tau_\delta-T]$ | $(V_T-\delta)/\theta=4.500$ (equality, Rem. 4.3) | $4.543$ (s.d. $2.16$); ratio $1.009$ |
| Tail $\mathbb P(\tau>t)$ | Bernstein bound | below the bound at **every** $t$ |

Tail detail: $t{=}6:\,0.200$ vs $0.829$; $t{=}8:\,0.072$ vs $0.465$; $t{=}10:\,0.0245$ vs $0.220$; $t{=}12:\,0.0080$ vs $0.096$. The mean matches the Remark 4.3 equality to $\sim1\%$, the small excess being the Euler absorption overshoot at finite $dt$.

**Experiment C — monotone $1/\theta$ law (Cor. 4.6).** Varying $s_\ast$ ($20{,}000$ trials):

| $s_\ast$ | $\theta=s_\ast-\phi_0$ | $\mathbb E[\tau]$ (sim) | bound $(V_T-\delta)/\theta$ |
|---|---|---|---|
| 0.8 | 0.60 | 7.582 | 7.500 |
| 1.0 | 0.80 | 5.635 | 5.625 |
| 1.2 | 1.00 | 4.551 | 4.500 |
| 1.6 | 1.40 | 3.261 | 3.214 |
| 2.0 | 1.80 | 2.518 | 2.500 |
| 3.0 | 2.80 | 1.622 | 1.607 |

The simulated mean tracks $(V_T-\delta)/\theta$ and decreases monotonically, confirming the hyperbolic $1/(s_\ast-s_\ast^{\mathrm{crit}})$ dependence with $s_\ast^{\mathrm{crit}}=\phi_0=0.2$.

**Experiment B — directional-OU model and the non-asymptotic corrector (Prop. 5.3).** $dx=(\phi_0-s_\ast+\sigma_0\xi)\,dt$, $d\xi=-\lambda(\xi-e)\,dt+\sqrt{2\kappa}\,dB$, $e=-1$, $s_\ast=0.6$, $\kappa=0.5$; averaged margin $\theta_{\mathrm{eff}}=1.4$ (bound $3.214$):

| $\lambda$ | 1 | 2 | 5 | 10 | 25 | 50 |
|---|---|---|---|---|---|---|
| $\mathbb E[\tau]$ (sim) | 3.454 | 3.279 | 3.227 | 3.220 | 3.217 | 3.217 |
| ratio to bound | 1.075 | 1.020 | 1.004 | 1.002 | 1.001 | 1.001 |

As $\lambda$ grows the simulated mean converges monotonically to the averaged bound, consistent with the $\lambda\to\infty$ limit of Propositions 5.1 and 5.3. (The Pillar-III robust-reconstruction numerics are in §10.9.)

### 14.2 The three-face risk-layer duality (Experiment E — designed and executed)

The synthesis of §9.5 claims that the large-deviation layer is **one object with three faces**. Here we make that tangible on a *single* scalar coherence SDE, exhibiting the three faces together. **This validates the abstract toy-SDE / Freidlin–Wentzell theorems only; it is not a simulation of, and makes no claim about, any platform or "love" model.**

**Common setup.** Coherence coordinate $\Delta(x)=x$ on $\mathbb R$ with $c=1$, $a_{\max}=\sigma_0^2$; $dV=(\phi_0-c\,s)\,dt+\sigma_0\,dW$, absorbed at $\delta$. Take the Pillar-II cost $c_0+\tfrac12 h s^2$ with $\phi_0=0.5$, $h=1$, $c_0=0.5$, $\sigma_0=1$, $V_T=5$, $\delta=0.5$ (so $D=V_T-\delta=4.5$). The drift-dominated optimum $(14)$ is then
$$
s^\ast=\tfrac1c\Big(\phi_0+\sqrt{\phi_0^2+2c^2c_0/h}\Big)=1.6180,\quad \theta^\ast=\sqrt{\phi_0^2+2c^2c_0/h}=1.1180,\quad u(V_T)=\tfrac{h}{c}s^\ast (V_T-\delta)=7.281 .
$$
Euler–Maruyama, $dt=0.01$, fixed-seed RNG (mulberry32 seed `0x9e3779b9` + Box–Muller), with $N=40{,}000$ trials per cost-sweep point and $N=500{,}000$ for each tail panel; every path is integrated to absorption at $\delta$ (the recorded absorbed fraction is $1.0000$ in every panel). The driver script — carrying this seed, the per-panel trial counts, and the absorbing-boundary stopping rule — is archived alongside this note as `experiments/duality_sim.mjs`, so every number below is reproducible. Ground truth: the first-passage law of the absorbed drifted Brownian motion is inverse-Gaussian, with **exact** survival $\mathbb P(\tau{-}T>t)=1-\big[\Phi(\tfrac{\theta t-D}{\sqrt{a_{\max}t}})+e^{2\theta D/a_{\max}}\Phi(\tfrac{-\theta t-D}{\sqrt{a_{\max}t}})\big]$ and mean $D/\theta$.

**Face 2 (Pillar II) — the optimal sacrifice schedule and its value.** Sweep the constant schedule $s$ and measure the expected reconstruction cost $\mathbb E\big[(c_0+\tfrac12 hs^2)(\tau-T)\big]$ ($N=40{,}000$ per point):

| $s$ | $\theta=s-\phi_0$ | $\mathbb E[\tau]$ (sim) | $D/\theta$ | $\mathbb E[\text{cost}]$ (sim) | value $F(s)\,D$ |
|---|---|---|---|---|---|
| 1.200 | 0.700 | 6.557 | 6.429 | 7.999 | 7.843 |
| 1.400 | 0.900 | 5.063 | 5.000 | 7.493 | 7.400 |
| 1.500 | 1.000 | 4.556 | 4.500 | 7.404 | 7.313 |
| **1.618** | **1.118** | **4.094** | **4.025** | **7.407** | **7.281** |
| 1.800 | 1.300 | 3.514 | 3.462 | 7.450 | 7.339 |
| 2.000 | 1.500 | 3.047 | 3.000 | 7.616 | 7.500 |
| 2.500 | 2.000 | 2.286 | 2.250 | 8.285 | 8.156 |

The analytic value $F(s)D=(c_0+\tfrac12 hs^2)D/\theta$ is minimised exactly at $s^\ast=1.618$ with minimum $u(V_T)=7.281$, confirming Proposition 9.5; the simulated cost reproduces this **flat** minimum near $s^\ast$ (the uniform $\sim\!1.7\%$ excess is the finite-$dt$ Euler absorption overshoot, which also lifts $\mathbb E[\tau]$ above $D/\theta$ by the same margin). The realised cost at $s^\ast$ matches the affine value $u(V_T)$ predicted by $(14)$.

**Face 1 (Pillar I) — the engine tail and the resilience exponent.** At the optimal margin $\theta^\ast=1.118$ ($N=500{,}000$): absorbed fraction $1.0000$, $\mathbb E[\tau]=4.083$ (exact $4.025$), s.d. $1.808$ (exact IG $1.794$).

| $t$ | empirical $\mathbb P(\tau{-}T>t)$ | exact IG | Bernstein $e^{-J(t)}$ |
|---|---|---|---|
| 6 | $1.34\times10^{-1}$ | $1.28\times10^{-1}$ | $6.66\times10^{-1}$ |
| 8 | $3.64\times10^{-2}$ | $3.46\times10^{-2}$ | $2.91\times10^{-1}$ |
| 10 | $9.74\times10^{-3}$ | $8.99\times10^{-3}$ | $1.07\times10^{-1}$ |
| 12 | $2.41\times10^{-3}$ | $2.31\times10^{-3}$ | $3.64\times10^{-2}$ |
| 14 | $6.22\times10^{-4}$ | $5.92\times10^{-4}$ | $1.18\times10^{-2}$ |
| 16 | $1.66\times10^{-4}$ | $1.52\times10^{-4}$ | $3.69\times10^{-3}$ |

The empirical tail matches the exact inverse-Gaussian to a few percent and lies **below the Bernstein bound $e^{-J(t)}$ at every $t$** — Theorem 4.1(iii) with the §9.1 identification $J(t)=(\theta t-D)^2/(2a_{\max}t)$. Fitting the prefactor-corrected log-tail $\ln\mathbb P+\tfrac12\ln t$ over $t\in[7,14]$ gives an empirical **resilience exponent** $0.628$, against the exact-IG window slope $0.627$ and the asymptotic $\mathsf I_\infty=\theta^{\ast2}/2a_{\max}=0.625$ (§9.4).

**Face 3 (Pillar III) — robust resilience and the large-deviation price.** Now let the worst-case platform add an up-field pull $P=0.5$ at the same agent budget $s^\ast$, so $\theta_{\mathrm{rob}}=\theta^\ast-P=0.618$ ($N=500{,}000$): absorbed fraction $1.0000$, $\mathbb E[\tau]=7.388$ (exact $D/\theta_{\mathrm{rob}}=7.281$).

| $t$ | empirical $\mathbb P(\tau{-}T>t)$ | exact IG $(\theta_{\mathrm{rob}})$ |
|---|---|---|
| 10 | $2.09\times10^{-1}$ | $2.02\times10^{-1}$ |
| 14 | $7.89\times10^{-2}$ | $7.63\times10^{-2}$ |
| 18 | $3.04\times10^{-2}$ | $2.92\times10^{-2}$ |
| 20 | $1.89\times10^{-2}$ | $1.82\times10^{-2}$ |
| 24 | $7.53\times10^{-3}$ | $7.13\times10^{-3}$ |

The robust resilience exponent measured over $t\in[10,20]$ is $0.206$ (exact-IG window slope $0.207$), descending toward the asymptotic $\mathsf I_\infty^{\mathrm{rob}}=\theta_{\mathrm{rob}}^2/2a_{\max}=0.191$; the residual gap is the finite-$t$ approach to the asymptotic slope. The **large-deviation price of the Power Highway** is the resilience the pull destroys,
$$
\Pi^{\mathrm{LD}}=\mathsf I_\infty-\mathsf I_\infty^{\mathrm{rob}}=0.625-0.191=0.434 ,
$$
the third currency of §10.6 beside the threshold and value prices.

**One object, three faces.** The *same* scalar margin $\theta$ drives all three panels: Pillar II buys it at the affine cost $u(V_T)$, Pillar I converts it into the tail exponent $\theta^2/2a_{\max}$, and Pillar III erodes it to $\theta_{\mathrm{rob}}$ at the price $\Pi^{\mathrm{LD}}$. The numbers are three readings of one quantity — the content of §9.5 — and they hold for the **abstract SDE only**, not for any platform or "love" model.

**Three faces at a glance.** The single optimal margin $\theta^\ast=1.118$ (bought at $s^\ast=1.618$) is read once per pillar, on the *same* scalar model. The table re-presents the panel numbers above and introduces no new quantity:

| Face | Pillar | Reading of the margin $\theta$ | Closed form | Simulation |
|---|---|---|---|---|
| 2 | II | optimal reconstruction cost $u(V_T)$ at $s^\ast$ | $7.281$ | $7.407$ (+1.7%, Euler) |
| 1 | I | resilience exponent $\mathsf I_\infty=\theta^{\ast 2}/2a_{\max}$ | $0.625$ | $0.628$ (fit); $0.627$ (IG window) |
| 3 | III | robust resilience $\mathsf I_\infty^{\mathrm{rob}}$ (LD price $\Pi^{\mathrm{LD}}=0.434$) | $0.191$ | $0.206$ (fit); $0.207$ (IG window) |

Every "Simulation" entry is reproduced verbatim from the three panels above (Face 2 at $s^\ast=1.618$; Faces 1 and 3 at the largest trial count); the table introduces no new numbers.

**Reproducibility note.** The driver `experiments/duality_sim.mjs` is self-contained — plain Node.js, no external dependencies — and deterministic given the seed `0x9e3779b9`, so the panels above regenerate identically. Every reported quantity matches its closed form within the *documented, expected* numerical tolerance, with no free fitting parameters and no post-hoc fitting: each simulated mean reconstruction time sits about $1.7\%$ above the exact $D/\theta$, the systematic Euler absorption overshoot at $dt=0.01$ (a bias of order $\sqrt{dt}$ that vanishes as $dt\to0$); each empirical tail probability matches the exact inverse-Gaussian to a few percent, the residual being Monte-Carlo error of order $1/\sqrt N$ at the largest trial count; and each fitted resilience exponent matches the exact-IG window slope to about $1\%$ (Face 1: $0.628$ vs $0.627$; Face 3: $0.206$ vs $0.207$), the small offset from the asymptotic $\mathsf I_\infty$ being the finite-$t$ approach to the limiting slope, not a discrepancy. In short, every deviation from the closed form is accounted for by a known finite-$dt$, finite-$N$, or finite-$t$ effect; none is evidence against a theorem, and none is a claim about any platform or "love" model.

## 15. What has been strengthened (summary)

| Aspect | Original | v1.0 | v2.0 | v3.0 | v4.0 | v4.5 | v4.6 | v4.7 | v4.8 | v4.9 (this note) |
|---|---|---|---|---|---|---|---|---|---|---|
| Architecture | informal | result-by-result | preprint-standard | engine + discussion | three co-equal pillars | all v4.0 labels preserved; LD risk layer spans Pillars II–III | §9.5 names the LD layer as one cross-pillar object (three faces, Pillars I–III) | risk layer elevated to the explicit backbone; executed three-face duality numerics (§14.2); related work (§17), origin mapping (§13.5), implications (§18) | near-submission reference paper: reproducible three-face validation (§14.2), ranked roadmap (§16), polished positioning (§17) & origin mapping (§13.5), unified narrative; no new results | **submission-ready reference paper: backbone foregrounded from the abstract & a Main Contributions summary; reproducibility certified; positioning & origin mapping carried forward & confirmed; one cumulative version history; no new results** |
| Conclusion | positive prob. | a.s. under suff. sacrifice | + corollaries | unchanged | unchanged | unchanged | unchanged | unchanged | unchanged | unchanged |
| Optimal control | — | — | HJB + verification | exact schedule (Prop 9.5) | full pillar + LDP risk layer | + $J(t)$ as adversarial-control value; structural HJB parallel (§9.3) | folded into synthesis §9.5 | + variational-duality remark pinning where the HJB↔rate duality is exact (Rem. 9.3a) | unchanged | unchanged |
| Adversarial environment | — | — | — | — | NEW Pillar III (P3.4, price, MFG) | + worst-case rate $J_{\mathrm{rob}}$ + large-deviation price (Prop P3.11, §10.6) | + explicit Theorem P3.4 → $J_{\mathrm{rob}}$ link | + robust-resilience & LD price validated numerically on the toy SDE (§14.2) | unchanged | unchanged |
| Multi-agent | — | — | aggregate CDI + conj. | Prop 9.2 + Conj 9.3 | integrated (Cor. P3.9b) | unchanged | unchanged | unchanged | unchanged | unchanged |
| Large deviations | — | Bernstein | LDP exponent | Thm 9.6 + Prop 9.7 | repositioned as Pillar-II risk layer | risk layer spanning Pillars II–III; Prop 9.7 rigorous (Lemma 9.8); $J_{\mathrm{rob}}$ (Prop P3.11) | consolidated into one three-face object (§9.5); no new results | validated across all three faces on one SDE (§14.2); no new results | same three faces, now reproducible from an archived script (§14.2); no new results | unchanged; no new results |
| Measurement | — | — | — | §10 estimator | operational layer; estimates $\theta_{\mathrm{rob}}$ | unchanged | unchanged | unchanged | unchanged | unchanged |
| Framework role | optional | dictionary | dictionary + analogy | + interface (Lemma 8.1) | + robust interface (Lemma P3.10) | + $J_{\mathrm{rob}}$ / resilience dictionary row | unchanged | + mapping back to the PDE's core commitments (§13.5) | unchanged | unchanged |
| Numerics | — | — | — | engine (designed & executed) | + robust reconstruction & price (§10.9) | unchanged | unchanged (no new numerics) | + three-face duality validation (Experiment E, §14.2) | + reproducibility note, three-faces-at-a-glance table, archived self-contained script (§14.2); no new numbers | unchanged; no new numbers |

## 16. Limitations and honest scope

1. **Model-dependence.** Results hold under (R), (B), (A1), (S); they are statements about systems of the form $(1)$/$(P.1)$, not universal laws. The constants $M_\Phi,M_\sigma,a_{\max},c,M_\Phi^{\mathrm{rob}},\eta$ are model inputs.
2. **(SS) and (P.3) are assumptions, not derivations.** Almost-sure return requires sustained sacrifice with margin $\theta>0$ (benign) or $\theta_{\mathrm{rob}}>0$ (adversarial). Whether a given system meets them is empirical; absent it, only Corollary 4.7 (positive probability) is available.
3. **Coloured-noise rigor (Prop. 5.3 is conditional).** The non-asymptotic CDI for the lifted coherence holds only under (H-OU): a bounded corrector (not implied by $\sup_t\mathbb E|\xi_t|<\infty$; needs a compact band or reflected/truncated OU), the margin on the enlarged band, and reconstruction only to the relaxed level $\delta+\bar\zeta/\lambda$. The fully rigorous theorem remains the elliptic Theorem 4.1.
4. **Uniform bounds.** (B) requires uniform coherence-gradient bounds on $\{\Delta\ge\delta\}$ — and, for Pillar III, *uniformly in the platform action* — a genuine restriction otherwise.
5. **Multi-agent / mean-field (§11) is partly conditional.** Corollary 9.1 is rigorous given the global per-agent margins and $\mathcal K_t\le\kappa_K$. Proposition 9.2 is rigorous given well-posedness and (M1)–(M3) but controls the *deterministic functional* $\mathcal D(\mu_t)$, not the finite-$N$ system; the link is Conjecture 9.3, not established here. The weakest-link reading is heuristic.
6. **Optimal sacrifice (§8) is partly formal.** Proposition 9.4 assumes existence/$C^2$/admissibility of a (HJB) solution (no viscosity theory with the absorbing boundary). Proposition 9.5 (and Observation 8.1's noise-independence) are rigorous **for the homogeneous, drift-dominated scalar reduction**, within the verification class; the inhomogeneous free-boundary Riccati of §8.4 (front-/back-loading) is a formal/heuristic analysis, not solved.
7. **LDP (§9): scalar rigorous, path-space rigorous under standard regularity.** Theorem 9.6 is rigorous (Schilder + contraction + Jensen). In v4.5 Proposition 9.7 is upgraded from conditional to **rigorous under the standard hypotheses (L1) FW sample-path LDP and (L2) non-characteristic boundary**: the opaque "continuity of the exit functional" is replaced by the explicit constraint-set regularity $\inf_{\{\Delta\ge\delta\}}I=\inf_{\{\Delta>\delta\}}I$ (R-LDP), which is *derived* by the boundary-perturbation Lemma 9.8. The sole residual is the routine taper/cross-term bookkeeping inside that lemma.
8. **Pillar III (§10) is a stylised, conditional model.** The distortion loading $\eta$ (Def. P3.2) is an **assumption**, not an empirical fact about platforms. Theorem P3.4 is fully rigorous **as a sufficient condition for the agent** (it is the Pillar-I engine against the worst-case drift), but is one-sided and silent when $(P.3)$ fails. The Stackelberg and major–minor mean-field formulations (Defs P3.3, P3.8) and their existence (Prop. P3.9) are **conditional**, inheriting standard MFG theory not re-proved here; Proposition P3.7 (saturation) is a structural argument conditional on the cost model. The worst-case large-deviation results (Def. P3.11a, Prop. P3.11, the large-deviation price $\Pi^{\mathrm{LD}}$ of §10.6) are likewise conditional: part (i) is a rigorous uniform Bernstein bound, part (ii) is exact only in the scalar saturating-policy case, and $J_{\mathrm{rob}}$, $\mathsf I_\infty^{\mathrm{rob}}$ are abstract toy-SDE / Freidlin–Wentzell quantities — not measured systemic risks of any platform. Nothing in Pillar III claims any platform maximises distortion or that any agent meets $(P.3)$. The v4.6 cross-pillar synthesis (§9.5) is expository: it re-reads $J$, $J_{\mathrm{rob}}$, $\mathsf I_\infty$ and $\Pi^{\mathrm{LD}}$ as one object across the pillars and adds no new claim, no new label, and no empirical content.
9. **Operational measurement (§12) is a proposal, not a validation.** The coherence proxy is a modelling choice; separating $\Phi$ from $S$ (and estimating the counterfactual $M_\Phi^{\mathrm{rob}}$) needs a known baseline or exogenous variation; the cost link is parametric. Estimating $\hat s$ presupposes the model and does **not** test or validate the PDE / "love" formula or any platform.
10. **Numerics (§14, §10.9) verify the abstract theorems only.** The toy SDEs confirm the stochastic-analysis bounds (engine and robust); they are **not** a validation of the PDE/"love" formula or of any empirical system. No claim of empirical validation of the framework is made anywhere in this note.
11. **v4.7 additions are expository or toy-SDE-numerical.** The three-face numerical validation (§14.2, Experiment E) checks the **abstract SDE / Freidlin–Wentzell statements only** — Proposition 9.5, Theorem 4.1(iii), the §9.1 rate function, and the §10.6 robust resilience — on one scalar model; it is **not** a validation of the PDE / "love" formula or of any platform. The mapping to the PDE's core commitments (§13.5), the Related Work (§17), and the Broader Implications (§18) are expository: they add **no new theorem, proposition, lemma, definition, equation, or numerical claim**, and the §13.5 correspondences are structural analogies, not identifications. Remark 9.3a is a scoped observation that *narrows* a prior claim (it identifies exactly where the HJB↔rate parallel is an exact duality), not a new theorem.
12. **v4.8–v4.9 additions are expository, organisational, and reproducibility-facing.** v4.8 and v4.9 add **no theorem, proposition, lemma, definition, equation, numerical result, or label**. The reproducibility note and three-faces-at-a-glance table of §14.2 re-present the **already-reported** Experiment E numbers (no new simulation); the ranked roadmap (§16), the polished positioning (§17), the refined origin mapping (§13.5), the Main Contributions summary, the unified narrative, and the condensed cumulative version history are editorial. The §13.5 correspondences remain **structural analogies, not identifications**, and nothing in v4.8 or v4.9 is empirical validation of the PDE / "love" formula or of any platform.

### Path to full generality

We close with a crisp, *ranked* roadmap: what a fully general and sharp theory would require, what the note already secures, and which open steps carry the most leverage.

**What "fully general and sharp" would mean.** A fully general sharp theory would (i) hold for a multidimensional distortion field $\Delta:\mathbb R^n\to[0,\infty)$ with no scalar reduction; (ii) deliver a **sharp multidimensional robust rate** $J_{\mathrm{rob}}$ — the adversary's optimal *spatial* allocation of distortion pull, with matching upper and lower bounds, not merely its saturating magnitude; (iii) replace the verification-class HJB analysis with a viscosity-solution treatment valid up to the absorbing boundary; and (iv) connect the finite-$N$ population system to its mean-field limit uniformly on the reconstruction window. The note already secures large parts of this; what remains is one genuinely hard step and a few that become routine once it is done.

**What already holds, and how generally.**

- **Fully rigorous, in any dimension.** The engine itself: once the scalar Coherence Drift Inequality $\mu_t\le-\theta<0$ holds (Lemma 3.1, (SS)), Theorem 4.1 and its corollaries — a.s. return, the $1/\theta$ mean-time law, the variance and high-probability bounds, and the Bernstein tail — hold for the controlled Itô system on $\mathbb R^n$ (and, with bounded geometry, on a Riemannian manifold, §6.3) with **no dimensional restriction**. Likewise Theorem P3.4 is fully rigorous *as a sufficient condition on the agent* against the worst-case drift, uniformly over the policy class, whenever $\theta_{\mathrm{rob}}>0$.
- **Rigorous under standard, checkable hypotheses.** The path-space LDP (Proposition 9.7) holds in $\mathbb R^n$ under the FW sample-path LDP (L1) and a non-characteristic boundary (L2), via the boundary-regularity Lemma 9.8; the residual is routine taper/cross-term bookkeeping.
- **Holds via uniform bounds (rate not yet sharp).** In the general case the robust large-deviation rate satisfies the **uniform lower bound** $J_{\mathrm{rob}}(t)\ge(\theta_{\mathrm{rob}}t-D)_+^2/(2a_{\max}t)$ for every admissible policy (Proposition P3.11(i)). This is what makes "prolonged incoherence is exponentially rare at rate $\ge\theta_{\mathrm{rob}}^2/2a_{\max}$" a theorem in general; the *matching upper bound* — the closed-form identity $J_{\mathrm{rob}}=J|_{\theta\to\theta_{\mathrm{rob}}}$ — is established only in the scalar saturating-policy case (Proposition P3.11(ii)), the same regime in which the exact HJB↔rate duality holds (Remark 9.3a).

**Ranked roadmap of open steps** (highest leverage first; difficulty flagged).

1. **Sharp multidimensional robust rate $J_{\mathrm{rob}}$ via Isaacs** — *genuinely difficult; the keystone.* A min–max over admissible policies *inside* the constrained Freidlin–Wentzell action, giving the adversary's optimal *spatial* allocation of pull and a matching upper bound to Proposition P3.11(i). If the saturating policy remains optimal under monotone distortion loading — as we expect — this upgrades the uniform lower bound to the exact identity $J_{\mathrm{rob}}=J|_{\theta\to\theta_{\mathrm{rob}}}$ in general, as in the scalar case (Remark 9.3a). This is the one step expected to need genuinely new analysis.
2. **Viscosity-solution treatment of the exit-cost HJB** — *standard but technical; largely independent.* A viscosity theory with the absorbing boundary removes the $C^2$/admissibility assumption on $u$ (Limitations item 6), making Proposition 9.4 unconditional. Standard tools (Fleming–Soner) should suffice, and it can proceed in parallel with step 1.
3. **Uniform-in-time propagation of chaos (Conjecture 9.3)** — *difficult but self-contained.* A reflection-coupling or entropy argument, uniform under the descent conditions (M1)–(M3), connecting the deterministic functional $\mathcal D(\mu_t)$ to the finite-$N$ system on the reconstruction window.
4. **Inhomogeneous free-boundary Riccati / genuine front-/back-loading (§8.4)** — *routine once step 2 is done.* With the viscosity machinery in hand, the state-dependent-coefficient case becomes matched asymptotics and numerics rather than a new theory.
5. **A rigorous weakest-link theorem (§11.2)** — *routine.* Simultaneous coherence of a population via a smooth aggregate of the $\Delta_i$, promoting the heuristic governing-agent reading to a theorem; expected to follow once the population engine (step 3) is in place.

**Routine-vs-hard summary.** Only step 1 is expected to require genuinely new ideas; step 2 is standard but technical; step 3 is difficult but self-contained; steps 4–5 should be routine once steps 2–3 are done. **None of these would change a single statement now proved** — each would *promote* a uniform bound or a formal analysis to a sharp theorem.

## 17. Related work and positioning

This note sits at the intersection of several mature literatures; we position it against each and state what is distinctive. We group the adjacent work into five clusters and, for each, separate what is **classical** from what this note **adds or re-frames**. The engagement is conceptual and structural — we claim neither priority over, nor equivalence with, any of these programmes, and the connections to the behavioural / AI literatures below are **analogies of mathematical form**, not empirical or theoretical identifications.

**Freidlin–Wentzell theory and controlled diffusions.** The risk layer is built directly on Freidlin–Wentzell large-deviation theory: the rate function $J(t)$ is a constrained Freidlin–Wentzell action (§9.2), and the engine's Bernstein tail is its non-asymptotic shadow. The quasipotential and exit-time asymptotics we use are classical (Freidlin–Wentzell; Dembo–Zeitouni). What is less standard is the *posture*: we read the action as the value of an **anti-reconstruction control** (§9.3, Remark 9.3a) and then place a **deliberate, budget-constrained adversary** on the drift (Pillar III), turning a passive small-noise exit problem into a robust-control one. The robust margin $\theta_{\mathrm{rob}}$ and the uniform Bernstein bound over a policy class (Proposition P3.11) are the large-deviation expression of that shift.

**Robust and adversarial control; differential games.** Pillar III is, formally, a zero-sum-flavoured robust-control problem: the agent's sacrifice versus the platform's distortion pull, with an a.s.-return guarantee uniform over the adversary's admissible policies. This is the $H^\infty$/robust-control and Isaacs differential-game tradition (Başar–Bernhard; Fleming–Soner) specialised to a *reconstruction* objective with a hard protected floor, rather than a quadratic regulator. The novelty is not the min–max framing but its coupling to the distortion-field geometry: the adversary acts on the *drift of a scalar coherence functional*, and the solution concept is a.s. return with a margin, not value-function equality.

**Mean-field and major–minor games.** The population layer (Part IV) and the Power-Highway mean field (§10.8) use mean-field-game and major–minor-agent theory (Lasry–Lions; Huang–Malhamé–Caines; Carmona–Delarue): the platform is a *major* player shaping the environment of a continuum of *minor* agents. We **inherit** existence/equilibrium results rather than re-proving them (§10.10), and contribute the specific coupling — a major player that optimises *distortion* (incoherence) against minor agents who each pay a sacrifice cost to reconstruct.

**Active Inference and the Free Energy Principle.** There is a genuine structural resonance with Active Inference / FEP (Friston): agents act to reduce a scalar quantity (there, variational free energy; here, the distortion field $\Delta$), and "desire/protection" has a natural reading as a prior that must not be extinguished. Our protected-desire floor and sacrifice control are formally reminiscent of precision-weighted action minimising surprise. We make **no claim** that the two coincide — the distortion field is not asserted to be a free energy, and our results are about return dynamics of a controlled SDE, not about inference. The resonance is offered as orientation, not as a bridge theorem.

**AI alignment: corrigibility, goal protection, and persuasion.** The Power Highway is a stylised model of an **optimising environment that profits from a target's incoherence** — a recognisable abstraction of engagement-maximising or persuasive systems. The agent's protected-desire floor and robust margin are a stylised image of **goal/value protection under optimisation pressure** (corrigibility and goal-preservation in the alignment literature; manipulation and super-persuasion in multi-agent safety). The note's distinctive contribution to that conversation is *quantitative and conditional*: a single scalar margin $\theta_{\mathrm{rob}}$ that decides whether a protected goal survives an environment optimising against it, and a resilience exponent $\mathsf I_\infty^{\mathrm{rob}}$ measuring how rare prolonged capture is — for an **abstract SDE**, not any deployed system.

**Distinctive contributions, in one line.** Relative to all of the above: (i) a **hard protected-desire floor** realised dynamically as an a.s.-return attractor under sustained sacrifice; (ii) an **explicit three-face risk layer** unifying engine tail, anti-reconstruction value, and robust rate as one object (§9.5, validated on one scalar toy SDE in §14.2); and (iii) **endogenous adversarial optimisation** of the distortion drift via the Power Highway, with a robust-reconstruction theorem and a large-deviation price. Each is conditional and, where it touches behaviour or AI, explicitly analogical.

## 18. Broader implications and future directions

We close with a deliberately conditional outlook. None of the following is claimed as a result; each is a direction the framework opens, to be pursued without weakening the honesty stance.

**A quantitative resilience tool.** The risk layer suggests using $\mathsf I_\infty=\theta^2/2a_{\max}$ and its robust counterpart $\mathsf I_\infty^{\mathrm{rob}}$ as a **resilience score** for a protected goal against an optimising environment: how exponentially rare is prolonged capture, and how much resilience does the environment's optimisation destroy (the large-deviation price $\Pi^{\mathrm{LD}}$)? In the toy model these are exact (§14.2); turning them into *measured* quantities for any real system is the task of the operational layer (§12), and remains a proposal, not a validated instrument.

**AI alignment and multi-agent systems with protected goals.** The robust-reconstruction theorem gives a clean, if stylised, sufficient condition for a protected objective to survive optimisation pressure: the agent's restoring budget must exceed the environment's maximal distortion pull, $\theta_{\mathrm{rob}}>0$. This frames corrigibility/goal-protection as a *margin* problem and persuasion-resistance as a *large-deviation* problem, and it suggests studying multi-agent systems in which several minor agents with protected desires face a major optimiser (the Power-Highway mean field, §10.8). Whether any concrete architecture realises (D2)–(D4) is, as always, empirical and unclaimed.

**A resilience diagnostic (conditional).** Read as an instrument rather than a theorem, the pair $(\mathsf I_\infty,\mathsf I_\infty^{\mathrm{rob}})$ and the large-deviation price $\Pi^{\mathrm{LD}}$ suggest a *diagnostic* for multi-agent or alignment settings: between two candidate environments — or two candidate protected-goal architectures — the one with the larger robust exponent $\mathsf I_\infty^{\mathrm{rob}}$ keeps a protected goal coherent through exponentially longer optimisation pressure, and the one with the smaller $\Pi^{\mathrm{LD}}$ loses less resilience to that pressure. This reframes "is this goal robust?" as a *ranking* question with a scalar answer. The caveat is the usual one: the diagnostic is exact only for the toy SDE (§14.2); applying it to any concrete system first requires estimating $\theta_{\mathrm{rob}}$ and $a_{\max}$ via the operational layer (§12), and it remains a proposal, not a validated instrument.

**Immediate mathematical extensions.** Beyond the sharp-theory roadmap of §16 (whose keystone is a sharp multidimensional $J_{\mathrm{rob}}$), several further directions are natural — and, like everything here, are flagged as open rather than claimed:

- **several competing major players** — a Power-Highway mean field with multiple platforms optimising distortion against a continuum of agents (§10.8), rather than a single major player;
- **finite-horizon and discounted robust objectives** — variants of the exit-cost problem (§8) with a deadline or discounting, and their effect on the optimal schedule and the robust margin;
- **refined large-deviation asymptotics** — a sharp prefactor (Bahadur–Rao-type) correction to the resilience exponent $\mathsf I_\infty$, consistent with the prefactor-corrected tail fits of §14.2;
- **general noise structures** — non-elliptic, manifold, or coloured noise beyond the directional-OU field (§§5–6);
- **a rigorous weakest-link theorem** — simultaneous coherence of a population via a smooth aggregate of the $\Delta_i$ (§11.2).

Each would promote a uniform bound, a heuristic, or a special case to a sharp statement without altering anything now proved.

**Measurement and prototypes.** The operational layer (§12) proposes estimating sacrifice from engagement data; a disciplined empirical programme would (i) instrument a setting with a known baseline or exogenous variation to separate $\Phi$ from $S$, (ii) estimate the robust margin $\theta_{\mathrm{rob}}$, and (iii) test the $1/\theta$ recovery law and the resilience exponent as *predictions*. Any prototype instantiation (e.g. a controller that supplies sacrifice to keep a monitored coherence functional above a floor) would be an engineering analogue of the engine and would inherit exactly the same conditional status. We flag these as directions; the present note validates only the abstract toy-SDE theorems, and makes no empirical claim about the PDE / "love" formula or any platform.

**Role of this note.** Taken together, this note is intended as the **analytic core** of the larger Protected Desire Equilibrium programme — the dynamical, adversarial, and large-deviation engine into which the PDE's static existence-and-selection theory plugs — offered, as always, conditionally and with no empirical claim about the PDE / "love" formula or any platform.

---

### References (standard)

- R. Z. Khasminskii, *Stochastic Stability of Differential Equations*, 2nd ed., Springer, 2012 (non-explosion test; averaging principle).
- M. I. Freidlin, A. D. Wentzell, *Random Perturbations of Dynamical Systems*, 3rd ed., Springer, 2012 (sample-path large deviations; exit problems).
- A. Dembo, O. Zeitouni, *Large Deviations Techniques and Applications*, 2nd ed., Springer, 2010 (contraction principle; LDP).
- W. H. Fleming, H. M. Soner, *Controlled Markov Processes and Viscosity Solutions*, 2nd ed., Springer, 2006 (HJB equations; verification theorems).
- D. W. Stroock, S. R. S. Varadhan, *On the support of diffusion processes*, Proc. 6th Berkeley Symp., 1972 (support theorem).
- A.-S. Sznitman, *Topics in propagation of chaos*, École d'Été de Saint-Flour XIX, LNM 1464, Springer, 1991 (McKean–Vlasov; propagation of chaos).
- J. A. Carrillo, R. J. McCann, C. Villani, *Kinetic equilibration rates for granular media and related equations*, Rev. Mat. Iberoamericana 19 (2003) (mean-field free energy; displacement convexity).
- M. Huang, *Large-population LQG games involving a major player*, SIAM J. Control Optim. 48 (2010) (major–minor mean-field games).
- R. Carmona, F. Delarue, *Probabilistic Theory of Mean Field Games with Applications*, Springer, 2018 (mean-field games; major–minor players; existence).
- J. Filar, K. Vrieze, *Competitive Markov Decision Processes*, Springer, 1997 (discounted stochastic games).
- D. Revuz, M. Yor, *Continuous Martingales and Brownian Motion*, Springer (Dambis–Dubins–Schwarz; exponential inequalities).
- K. D. Elworthy, *Stochastic Differential Equations on Manifolds*, LMS Lecture Notes 70, 1982 (Eells–Elworthy–Malliavin construction).
- L. C. Evans, *An Introduction to Stochastic Differential Equations*, AMS, 2013 (Itô calculus; hitting times).

---

*Version 4.9. Building on the v4.0 re-architecture into three co-equal pillars: the quantitative return theorem as a self-contained dynamical engine (Pillar I); a full variational theory of optimal sacrifice with a noise-robust exact schedule, an inhomogeneity account of front-/back-loading, and a large-deviation risk layer (Pillar II); and a new theory of endogenous distortion optimisation — the Power Highway — with a rigorous robust-reconstruction theorem, a quantified price, a low-stakes/high-continuation game, and a mean-field / major–minor formulation (Pillar III). Multi-agent/mean-field reconstruction, an operational measurement layer, and a framework dictionary with two interface lemmas are integrated across the pillars, and the engine and robust theorems are verified numerically. v4.5 re-engineers the large-deviation material into a structural dual and risk layer spanning Pillars II and III — $J(t)$ as an adversarial-control value with a structural Hamilton–Jacobi parallel to optimal sacrifice (§9.3), the path-space LDP upgraded to rigorous under standard regularity (Lemma 9.8, §9.2), a worst-case rate function $J_{\mathrm{rob}}$ with a large-deviation price (Prop. P3.11, §10.6), and a systemic-risk reading via the coherence-resilience exponent (§9.4); all v4.0 labels are preserved and no new numerics are introduced. v4.6 consolidates that material into a single cross-pillar object with three faces — the engine's tail (Pillar I), the anti-reconstruction dual of optimal sacrifice (Pillar II), and the robust rate $J_{\mathrm{rob}}$ with its resilience price (Pillar III) — in a new synthesis subsection (§9.5) and an explicit Theorem P3.4 → Proposition P3.11 link, adding no new theorem, label, or numerical result. v4.7 elevates that risk layer to the note's explicit backbone and surrounds it with the connective tissue of a near-final paper — an executed numerical validation of the three-face duality on a single scalar SDE (Experiment E, §14.2), a scoped variational-duality remark (Remark 9.3a), a *Path to full generality* (§16), a Related Work / positioning section (§17), an explicit mapping back to the PDE's core commitments (§13.5), and a Broader Implications and Future Directions section (§18) — while preserving every stable label and altering no prior theorem, proposition, lemma, definition, equation, or numerical result (the only new labelled material being the scoped Remark 9.3a and the toy-SDE Experiment E of §14.2). v4.8 brings the note to near-submission reference quality — making the three-face validation fully reproducible from an archived self-contained script and adding a consolidated three-faces-at-a-glance table (§14.2), rewriting the *Path to full generality* as a ranked roadmap (§16), polishing the positioning (§17) and the origin mapping (§13.5), and unifying the narrative around the risk-layer backbone — **with no new theorem, proposition, lemma, definition, equation, numerical result, or label of any kind**, and condensing the stacked change logs into one cumulative history. v4.9 is the final submission-ready editorial pass — making the risk-layer backbone visible from the first paragraph of the abstract and the primitive section, certifying the three-face validation as reproducible verbatim from the archived script with no post-hoc fitting, adding a crisp Main Contributions summary, carrying forward and confirming the positioning (§17) and origin mapping (§13.5), and condensing the v3.0 → v4.9 change logs into a single cumulative version history — again with no new theorem, proposition, lemma, definition, equation, numerical result, or label. All conclusions remain conditional on the stated assumptions; the platform model is a stylised worst-case device; no empirical system is claimed to satisfy any hypothesis; the numerics verify the abstract theorems only; and nothing here is empirical validation of the PDE / "love" formula or of any platform.*
