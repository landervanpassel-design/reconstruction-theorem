# Reconstruction after Extreme Distortion

**The Distortion Field as a Primitive, and Three Pillars of Driven Return: a Dynamical Engine, Optimal Sacrifice, and the Power Highway**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)
[![Paper: CC BY 4.0](https://img.shields.io/badge/Paper-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Code: MIT](https://img.shields.io/badge/Code-MIT-green.svg)](./LICENSE)

> Replace `10.5281/zenodo.XXXXXXX` in the badge and links above with the DOI of your new

**Author:** Lander Van Passel — ORCID [0009-0000-1331-3127](https://orcid.org/0009-0000-1331-3127)
**Status:** Preprint, version 4.9 ("Final Orbit"). **Not peer-reviewed.**

---

## Summary

This is a self-contained mathematical paper on **driven return in controlled stochastic
systems**. We take as primitive a *Distortion Field* — a smooth scalar functional $\Delta$
measuring incoherence, whose coherent states are its sublevel sets $\{\Delta < \delta\}$ — and
study *high-distortion systems*, in which coherence, once lost, is not restored automatically
but must be **driven** back by a costly **sacrifice** control. The theory is developed in three
co-equal pillars, tied together by a single **large-deviation risk layer** (the cost of staying
distorted), which is the backbone of the paper.

The results are theorems about abstract controlled SDEs and their large-deviation behaviour.
They are not claims about any empirical, relational, or AI system.

## Scope and honesty statement

Please read this before citing or sharing.

- **All conclusions are conditional** on their stated mathematical assumptions. No empirical,
  relational, or AI system — and no platform — is claimed to satisfy them.
- The "platform" of Pillar III is a **stylised worst-case modelling device**, not a description
  of any real system. In particular, the assumption that engagement rewards distortion is a
  modelling choice, not an empirical finding.
- The numerical experiments verify the **abstract toy-SDE / Freidlin–Wentzell statements only**.
  They are *not* empirical validation of the "Protected Desire Equilibrium" / "love" formula, nor
  of any platform or behaviour.
- This is a **preprint**: it has not been peer-reviewed. Where the mathematics touches behaviour
  or AI, the connection is explicitly **analogical / structural**, never an identity and never an
  empirical result.

## Main contributions

Stated factually and **conditionally** on the assumptions throughout, the paper contributes three
distinctive elements, all organised around the risk-layer backbone:

1. **A hard protected-desire floor, realised dynamically.** Under sustained sacrifice
   ($\theta > 0$), the coherent target is reached almost surely from any level of distortion — a
   floor the dynamical engine *earns as an attractor* (Theorem 4.1), rather than imposes as a
   barrier.
2. **An explicit three-face risk layer as backbone.** A single large-deviation object — the cost
   of staying distorted — unifies the engine's tail (Pillar I), the anti-reconstruction value dual
   to optimal sacrifice (Pillar II), and the robust rate (Pillar III) into one quantity (§9.5),
   validated numerically across all three faces on a single scalar toy SDE (§14.2).
3. **Endogenous adversarial optimisation of distortion (the "Power Highway").** When the
   environment itself optimises the distortion drift, the agent still reconstructs almost surely
   whenever its sacrifice out-budgets the maximal distortion pull ($\theta_{\mathrm{rob}} > 0$,
   Theorem P3.4), at a quantified *price of the Power Highway* and a *large-deviation price*
   $\Pi^{\mathrm{LD}}$.

## The three pillars

- **Pillar I — the dynamical engine.** All probabilistic content of reconstruction is funnelled
  through one scalar *Coherence Drift Inequality* $\mu_t \le -\theta < 0$, driving a quantitative
  almost-sure return theorem with expected-time, variance, high-probability-time, and exponential
  tail bounds.
- **Pillar II — optimal sacrifice.** The cheapest reconstructing schedule via an HJB / Riccati
  analysis, plus a large-deviation risk layer whose rate function is exactly the engine's tail
  exponent, read as the value of an *anti-reconstruction* control problem.
- **Pillar III — the Power Highway.** A stylised model of an environment that optimises distortion
  endogenously, with a rigorous robust-reconstruction theorem, the price of the Power Highway, a
  mean-field / major–minor formulation, and executed numerics.

## Repository contents

```
reconstruction-theorem/
├── README.md                              # this file
├── LICENSE                                # MIT (covers the code in experiments/)
├── CITATION.cff                           # how to cite this work
├── paper/
│   └── Reconstruction_Theorem_v4.9.md     # the paper (Markdown + LaTeX math)
└── experiments/
    └── duality_sim.mjs                    # reproducible three-face numerical validation
```

A typeset **PDF** is the recommended primary artifact for Zenodo. To produce one from the
Markdown source (requires [Pandoc](https://pandoc.org/) and a LaTeX engine):

```bash
pandoc paper/Reconstruction_Theorem_v4.9.md \
  -o paper/Reconstruction_Theorem_v4.9.pdf \
  --pdf-engine=xelatex -V geometry:margin=1in
```

If you do not have a local LaTeX install, paste the Markdown into any Markdown-to-PDF tool that
renders LaTeX math, then add `paper/Reconstruction_Theorem_v4.9.pdf` to this repository.

## Reproducibility

The numerical claims of §14.2 are reproduced **verbatim, with no free parameters and no post-hoc
fitting**, by a single self-contained script. It requires only Node.js (no dependencies):

```bash
node experiments/duality_sim.mjs
```

- **RNG / seed:** mulberry32, fixed seed `0x9e3779b9` (deterministic; same output every run).
- **Integrator:** Euler–Maruyama, step $dt = 0.01$, on the scalar SDE
  $dV = (\phi_0 - c\,s)\,dt + \sigma_0\,dW$ absorbed at $\delta$.
- **Sample sizes:** $N = 40{,}000$ per cost-sweep point (Face 2a); $N = 500{,}000$ per tail panel
  (Faces 1 and 3).
- **Output:** model constants, then the three faces of the risk layer — Pillar-II schedule
  optimality, the Pillar-I engine tail and resilience exponent, and the Pillar-III robust rate and
  large-deviation price.
- **Expected numerical discrepancies** are documented in §14.2: Euler absorption overshoot of
  order $\sqrt{dt}$ and Monte-Carlo error of order $1/\sqrt{N}$.

## Citation

If you use or refer to this work, please cite the Zenodo record (see `CITATION.cff`). After you
publish the record, a representative BibTeX entry is:

```bibtex
@misc{vanpassel2026reconstruction,
  author       = {Van Passel, Lander},
  title        = {Reconstruction after Extreme Distortion: The Distortion Field
                  as a Primitive, and Three Pillars of Driven Return},
  year         = {2026},
  howpublished = {Zenodo preprint, version 4.9},
  doi          = {10.5281/zenodo.XXXXXXX},
  url          = {https://doi.org/10.5281/zenodo.XXXXXXX},
  note         = {Preprint; not peer-reviewed}
}
```

## License

- **Paper** (`paper/`, this README, and all prose): Creative Commons Attribution 4.0
  International ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).
- **Code** (`experiments/`): [MIT](./LICENSE).

## Related work by the author

- *Geometric Protected Desire Equilibrium / Distortion-Field framework* — this paper is the
  standalone analytic core (companion to the PDE preprint).
