---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  math_renderer: mathjax3
  reveal_options:
    hash: true
scripts: []

---

# Welcome!

---
## About this course

- What can we solve in quantum mechanics?

  - Particle in a box
  - Harmonic oscillator
  $$
  H = -\frac{1}{2m}\left(\frac{d}{dx}\right)^2 +\frac{1}{2}m\omega^2 x^2
  $$
  - Hydrogen atom
  $$
  H = -\frac{1}{2m}\nabla^2 - \frac{e^2}{r}
  $$

- What would we like to solve?

$$
\nonumber
\newcommand{\br}{\mathbf{r}}
\newcommand{\bp}{\mathbf{p}}
\newcommand{\bk}{\mathbf{k}}
\newcommand{\bq}{\mathbf{q}}
\newcommand{\bv}{\mathbf{v}}
\newcommand{\pop}{\psi^{\vphantom{\dagger}}}
\newcommand{\pdop}{\psi^\dagger}
\newcommand{\Pop}{\Psi^{\vphantom{\dagger}}}
\newcommand{\Pdop}{\Psi^\dagger}
\newcommand{\Phop}{\Phi^{\vphantom{\dagger}}}
\newcommand{\Phdop}{\Phi^\dagger}
\newcommand{\phop}{\phi^{\vphantom{\dagger}}}
\newcommand{\phdop}{\phi^\dagger}
\newcommand{\aop}{a^{\vphantom{\dagger}}}
\newcommand{\adop}{a^\dagger}
\newcommand{\bop}{b^{\vphantom{\dagger}}}
\newcommand{\bdop}{b^\dagger}
\newcommand{\cop}{c^{\vphantom{\dagger}}}
\newcommand{\cdop}{c^\dagger}
\newcommand{\bra}[1]{\langle{#1}\rvert}
\newcommand{\ket}[1]{\lvert{#1}\rangle}
\newcommand{\inner}[2]{\langle{#1}\rvert #2 \rangle}
\newcommand{\braket}[3]{\langle{#1}\rvert #2 \lvert #3 \rangle}
\newcommand{\sgn}{\mathrm{sgn}}
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\E}{\mathbb{E}}
$$

---

## Everything...

- Given ion positions $\mathbf{R}_k$, charge $+Z_k e$

$$
H = -\frac{1}{2m}\sum_{j=1}^M\nabla^2_j + e^2\sum_{j<k}\frac{1}{|\br_j-\br_k|} - e^2\sum_{j<k}\frac{Z_k}{|\br_j-\mathbf{R}_k|}
$$

- Want __many-electron__ wavefunction $\Psi(\br_1,\ldots \br_N)$

- Hard for atoms / molecules: __impossible__ for matter $N\sim N_A$!

- __Goal__: what _is_ a solid / metal / superconductor / superfluid?  

---

## So what do we do?

- Use __simple models__ that we can analyse in $N\to\infty$ limit

<p align="center">
<img src="assets/ElasticChain.png" alt="drawing" width="400" class="center"/>
</p>

$$
\label{coll_Hchain}
H = \sum_{j=1}^N \left[\frac{p_j^2}{2m} + \frac{k}{2} (u_j-u_{j+1})^2 \right].
$$

- New techniques to represent wavefunctions and Hamiltonians (__second quantization__ aka __quantum field theory__)


---

## Housekeeping



- Course website [austen.uk/courses/tqm-lectures](https://austen.uk/courses/tqm-lectures) (updated with slides)

- Lecture capture (all three screens)

- Lectures are 90 minutes with 5 minute break roughly halfway

- Supervision details to follow

---

# $\hbar=1$ !

---

## Many Body Wavefunctions

This lecture is about the general character of many body wavefunctions and what they tell us, focusing on the simplest type: __product states__ 

---

> Systems of indistinguishable particles are described by __totally symmetric__ or __totally antisymmetric__ wavefunctions.

- The first kind are __bosons__, the second __fermions__

---

## Two Particles

- In general described by $\Psi(\mathbf{x},\mathbf{y})$

- A pair of particles in states $\ket{\varphi_1}$ and $\ket{\varphi_2}$

$$
\Psi(\br_1,\br_2)\stackrel{?}{=} \varphi_1(\br_1)\varphi_2(\br_2).
\label{quantum_statistics_ProductWavefunction}
$$

- This would be fine for _distinguishable_ particles

---

## Accounting for symmetry

$$
\label{quantum_statistics_sym}
 \Psi(\br_1,\br_2)=\frac{1}{\sqrt{2}}[\varphi_1(\br_1)\varphi_2(\br_2)\pm \varphi_2(\br_1)\varphi_1(\br_2)]
$$

- upper sign for bosons and the lower for fermions 

- $1/\sqrt{2}$ for normalization if $\varphi_{1,2}(\br)$ are orthonormal

- When $\varphi_1=\varphi_2$ fermion $\Psi(\br_1,\br_2)$ _vanishes_: __exclusion principle__

---

## Independent Particles?

- Probability density is $\rho_{12}(\br_1,\br_2)=|\Psi(\br_1,\br_2)|^2$

- For _distinguishable_ particles 

$$
\rho_{12}(\br_1,\br_2)=|\varphi_1(\br_1)\varphi_2(\br_2)|^2=\rho_1(\br_1)\rho_2(\br_2)
\label{eq:classicaljoint}
$$

> Work it out for identical bosons and fermions
> Show that $\rho_{12}(\br,\br) = 0$ for fermions, and $\rho_{12}(\br,\br) = 2\rho_1(\br)\rho_2(\br)$ for bosons.

---

- For identical particles

`$$
\begin{align}
\rho_{12}(\br_1,\br_2) &= \frac{1}{2}\left[\rho_1(\br_1)\rho_2(\br_2)+\rho_1(\br_2)\rho_2(\br_1)\right] \\
&\pm\frac{1}{2}\left[\varphi^{}_1(\br_1)\varphi^*_2(\br_1)\varphi^{}_2(\br_2)\varphi^*_1(\br_2)+\varphi^{}_1(\br_2)\varphi^*_2(\br_2)\varphi^{}_2(\br_1)\varphi^*_1(\br_1)\right]
\end{align}
$$`

- Identical particles in quantum mechanics are _never_ truly independent.

---

## Hong--Ou--Mandel effect

- Two photons (bosons) approach a beam splitter from either side.  

- Start in orthogonal states, end up in orthogonal states e.g.

$$
\begin{align}
\ket{\text{Left}}\to\frac{1}{\sqrt{2}}\left(\ket{\text{Left}}+ \ket{\text{Right}}\right)\\\\
\ket{\text{Right}}\to\frac{1}{\sqrt{2}}\left(\ket{\text{Left}}- \ket{\text{Right}}\right)
\end{align}
$$

---

> If we start in 
>$$\frac{1}{\sqrt{2}}[\varphi_\text{L}(\br_1)\varphi_\text{R}(\br_2)\pm \varphi_\text{R}(\br_1)\varphi_\text{L}(\br_2)]$$
> What state do we end up in?

<p align="center">
<img src="assets/HOM.png" alt="drawing" width="1000" class="center"/>
</p>

---

## Noninteracting particles

$$
 H = \sum_{i=1}^{N} \overbrace{\left[-\frac{\nabla_i^{2}}{2m}+V(\br_i)\right]}^{\equiv H_\text{sp}\text{, single particle Hamiltonian}}
 \label{quantum_statistics_SPHamiltonian}
$$
- $H_\text{sp}$ has eigenstates $\{\varphi_\alpha(\br)\}$ and eigenenergies $\{E_\alpha\}$

- Eigenstatate of $N$ _distinguishable_ particles
$$
 \label{quantum_statistics_disting}
 \ket{\Psi_{\alpha_{1}\alpha_{2}\cdots \alpha_{N}}}=\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}})
$$
> What's the energy?

---

$$
E = \sum_{j=1}^N E_{\alpha_j}
$$

> What are the energy eigenstates?

---

## Symmetrize / Antisymmetrize

$$
 \label{quantum_statistics_SymAntisym}
   \mathcal{S}=\frac{1}{N!}\sum_{\pi} P_\pi, \qquad \mathcal{A}=\frac{1}{N!}\sum_{\pi} \sgn(\pi)P_\pi
$$

- $\pi$ is one of $N!$ permutations of $N$ objects

- $P\_\pi$ is permutation _operator_ for permutation $\pi$

- For two particles there are two permutations: $\pi=(12)$ and $\pi=(21)$

$$
P_{(21)}\Psi(\br_1,\br_2) = \Psi(\br_2,\br_1)
$$

---

## Signature of Permutation

- $\sgn(\pi)$ is the __signature__ of the permutation

- $\pm1$ for $\pi$ involving an even (odd) number of exchanges

---

## Symmetric and antisymmetric product states

`$$
\begin{align}
 \ket{\Psi^{S}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}&=\sqrt{N!\prod_{\alpha}N_{\alpha}!}\mathcal{S}\,\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}}) \nonumber \\
 \ket{\Psi^{A}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}&=\sqrt{N!}\mathcal{A}\,\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}})
 \label{quantum_statistics_norm}
\end{align}
$$`

> Show that these are normalized wavefunctions _if_ the single particle state $\ket{\varphi_\alpha}$ are orthonormal

---

## Occupation Numbers

- State is characterized only by __occupation numbers__ $\{N_{\alpha}\}$. Use these as a label instead

- __Caution__: To fix the sign of the fermion wavefunction, have to choose an order e.g. $\varphi_{\alpha_{1}}(\mathbf{r_{1}})\varphi_{\alpha_{2}}(\mathbf{r_{2}})\cdots\varphi_{\alpha_{N}}(\mathbf{r_{N}})$

- The total energy is

$$
 \label{quantum_statistics_TotalEnergy}
 E=\sum_{i=1}^{N}E_{\alpha_{i}}=\sum_{\alpha}N_{\alpha} E_{\alpha}
$$

---

## Slater Determinant 

- The fermion product state is a determinant!

`$$
\label{quantum_statistics_slater}
   \ket{\Psi^{A}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}=\frac{1}{\sqrt{N!}}\begin{vmatrix}
   \varphi_{\alpha_{1}}(\mathbf{r_{1}}) & 	\varphi_{\alpha_{1}}(\mathbf{r_{2}}) & \cdots & \varphi_{\alpha_{1}}(\mathbf{r_{N}}) \\
   \varphi_{\alpha_{2}}(\mathbf{r_{1}}) &  \cdots & \cdots & \cdots  \\
   \cdots & \cdots & \cdots & \cdots  \\
   \varphi_{\alpha_{N}}(\mathbf{r_{1}}) &  \cdots & \cdots & \varphi_{\alpha_{N}}(\mathbf{r_{N}})
 \end{vmatrix}
$$`

- Vanishes when two rows or two columns are identical
   - Zero if two particle coordinates coincide ($\br_{i}=\br_{j}$)
  - Zero if two particles occupy the same state ($\alpha_{i}=\alpha_{j}$)

---

## Noninteracting particles on a ring

- Ring has circumference $L$. Single particle eigenstates
$$
	\label{quantum_statistics_spstates}
	\varphi_{n}(x)=\frac{1}{\sqrt{L}}\exp\left(ik_n x\right),
$$

- $k_n=\frac{2\pi n}{L}$, $n\in\mathbb{Z}$. Energies are $E_{n}=\frac{k_n^2}{2m}$.

---

## Ground State of Bosons

- Every particle in the state $\ket{\varphi_{0}}$ with zero energy: $N_{0}=N$

$$
	\Psi^{S}(x_{1},x_{2},\ldots x_{N})=\frac{1}{L^{N/2}}
$$

- That was easy! The fermion case is harder.

---

## Ground State of Fermions

- Fill each level with one particle, starting at the bottom (Fermi sea)

  - For $N$ odd $n=-(N-1)/2, -(N-3)/2,\ldots, -1, 0, 1 \ldots (N-1)/2$

  - For $N$ even have to decide whether to put the last particle at $n=\pm N/2$

--- 

## Complex notation

$$
z_{i}=\exp(2 \pi i x_{i}/L),
$$

- The Slater determinant is

`$$
	\label{quantum_statistics_1ddet}
	\Psi_0(x_1,\ldots, x_N)=\begin{vmatrix}
	z_{1}^{-(N-1)/2} & 	z_{2}^{-(N-1)/2} & \cdots & z_{N}^{-(N-1)/2} \\
	z_{1}^{-(N-3)/2} &  \cdots & \cdots & \cdots  \\
	\cdots & \cdots & \cdots & \cdots  \\
	z_{1}^{(N-1)/2} &  \cdots & \cdots & z_{N}^{(N-1)/2}
\end{vmatrix}.
$$`

---

### Simple example $N=3$

`$$
\begin{align}
	\Psi_0(x_1,x_2,x_3)&=\begin{vmatrix}
		z_{1}^{-1} & z_{2}^{-1} & z_{3}^{-1} \\
		1 & 1 & 1 \\
		z_{1} & z_{2} & z_{3}
	\end{vmatrix} = \frac{z_{1}}{z_{2}}-\frac{z_{2}}{z_{1}}+\frac{z_{3}}{z_{1}}-\frac{z_{1}}{z_{3}}+\frac{z_{2}}{z_{3}}-\frac{z_{3}}{z_{2}}\nonumber\\
	&=\left(\sqrt{\frac{z_{3}}{z_{1}}}-\sqrt{\frac{z_{1}}{z_{3}}}\right)\left(\sqrt{\frac{z_{1}}{z_{2}}}-\sqrt{\frac{z_{2}}{z_{1}}}\right)\left(\sqrt{\frac{z_{2}}{z_{3}}}-\sqrt{\frac{z_{3}}{z_{2}}}\right)  \nonumber\\
	&\propto \sin\left(\frac{ \pi[x_{1}-x_{2}]}{L}\right)\sin\left(\frac{ \pi[x_{3}-x_{1}]}{L}\right)\sin\left(\frac{ \pi[x_{2}-x_{3}]}{L}\right)
  \label{3particle}
\end{align}
$$`

- Wavefunction vanishes $x_{i}=x_{j}$ 

> Check it is periodic and totally antisymmetric.

---

## Generalization for $N$ odd

$$
\Psi_0(x_1,\ldots, x_N)\propto\prod_{i<j}^{N} \sin\left(\frac{\pi[x_{i}-x_{j}]}{L}\right).
    \label{quantum_statistics_1dFermiGS}
$$


>	Show this using the __Vandermonde determinant__
>`$$
>\begin{vmatrix}
>1 & 1 & \cdots & 1 \\
>z_{1} &  z_{2} & \cdots & \cdots  \\
>z_{1}^{2} & z_{2}^{2} & \cdots & \cdots  \\
>z_{1}^{N-1} &  z_{2}^{N-1} & \cdots & z_{N}^{N-1}
>\end{vmatrix}=\prod_{i<j}^{N}(z_{j}-z_{i})
>$$`

---

## Terminology

- The wavevector of the last fermion added is called the __Fermi wavevector__ $k_\text{F}$

- Here $k_\text{F}=\frac{(N-1)\pi}{L}$

- __Fermi energy__ $E_{F}=\frac{k_\text{F}^{2}}{2m}$ is the corresponding energy

---

## Probability distribution

- For boson ground state $\Psi$ is constant, so is $|\Psi|^2$
<p align="center">
<img src="assets/poisson_phases.png" alt="drawing" width="500" class="center"/>
</p>

---

- For fermions
<p align="center">
<img src="assets/1d_fermions.png" alt="drawing" width="500" class="center"/>
</p>

---

### Marginal distributions

- One particle distribution is related to average density of particles
$$
\rho_1(x_1) = N \int dx_2\ldots dx_N \lvert\Psi(x_1,x_2,\ldots,x_N)\rvert^2.
\label{ave_density}
$$

- Note that density is always a _number_ density (not mass density).

- Normalization of the wavefunction implies
$$
\int dx \rho_1(x) = N.
$$

- In a translationally invariant system like the fermion gas on a ring we expect the average density to be constant.

---

## Density Operator

- Regard $\rho_1(x_1)$ as an expectation of a density operator
$$
\rho(x) = \sum_j \delta(x-x_j),
\label{many_densityop}
$$
so that $\rho_1(x) = \braket{\Psi}{\rho(x)}{\Psi}$.


---  

## Single particle density matrix

$$
g(x,y) \equiv N\int dx_2\ldots dx_N \Psi^{}(x,x_2,\ldots,x_N)\Psi^{*}(y,x_2,\ldots,x_N).
$$

- Note $g(x,x) = \rho_1(x)$.

---

>Starting from the Slater determinant, show that $g(x,y)$ for the ground state of the Fermi gas is
>`$$
>\begin{align}
>g(x,y) &= \frac{1}{L}\sum_{|k|<k_\text{F}} e^{ik(x-y)} \longrightarrow \int_{-k_\text{F}}^{k_\text{F}} \frac{dk}{2\pi} e^{ik(x-y)} \\
&\longrightarrow n \frac{\sin \left[k_\text{F}(x-y)\right]}{k_\text{F}(x-y)}
>\end{align}
>$$`
>where $n \equiv \frac{k_\text{F}}{\pi}$ is the average density.

---

### Pair Distribution

- Marginal probability distribution of a _pair_ of particles
$$
\rho_2(x_1,x_2) = N(N-1) \int dx_3\ldots dx_N\left|\Psi(x_1,x_2,\ldots,x_N)\right|^2.
$$
- The prefactor is to account for all pairs of particles.

>Starting from the Slater determinant, show that
>$$
>\rho_2(x_1,x_2) = n^2\left[1 - \left(\frac{\sin\left[k_\text{F}(x_1-x_2)\right]}{k_\text{F}(x_1-x_2)}\right)^2\right].
>$$
>This vanishes at $x_1=x_2$.

---

## Impenetrable Bose Gas

$$
H = -\frac{1}{2m}\sum_j \frac{\partial^2}{\partial x_j^2} + \overbrace{c\sum_{j<k}\delta(x_j-x_k)}^{\equiv H_\text{int}}.
\label{many_LL}
$$

- The second term is interaction between pairs of particles

- For fermions, the interaction has no effect at all ($\delta$-function)!

- For bosons with $c\to \infty$: _eigenenergies coincide with those of free fermions, and eigenstates are modulus of fermion eigenstates_

> Why?

---

## Ground state

$$
\Psi_0(x_1,\ldots, x_N) = \prod_{i<j}^{N} \left|\sin\left(\frac{\pi[x_{i}-x_{j}]}{L}\right)\right|.
$$

- Can calculate any observable _as long as_ it's insensitive to taking the modulus (e.g. average density and pair distribution)

