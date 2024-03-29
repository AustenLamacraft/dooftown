---
title: Problem Set 1
summary: Product States. Fermi gas. Density, density matrix, and pair distribution.
author: Austen Lamacraft
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
markup: pandoc
menu:
  tqm:
    parent: Problem Sets
    weight: 1
---

$$
\nonumber
\newcommand{\cN}{\mathcal{N}}
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
\newcommand{\Nop}{\mathsf{N}^{\vphantom{\dagger}}}
\newcommand{\bra}[1]{\langle{#1}\rvert}
\newcommand{\ket}[1]{\lvert{#1}\rangle}
\newcommand{\inner}[2]{\langle{#1}\rvert #2 \rangle}
\newcommand{\braket}[3]{\langle{#1}\rvert #2 \lvert #3 \rangle}
\DeclareMathOperator{\sgn}{sgn}
\DeclareMathOperator{\tr}{tr}
\newcommand{\abs}[1]{\lvert{#1}\rvert}
\newcommand{\brN}{\br_1, \ldots, \br_N}
\newcommand{\xN}{x_1, \ldots, x_N}
\newcommand{\zN}{z_1, \ldots, z_N}
$$


## Fermions and Bosons at Finite Temperature

At finite temperature $T$ and chemical potential $\mu$ we can describe a system of free particles in terms of the _$N$-particle density matrix_.

$$
\rho = \frac{1}{\mathcal{Z}}\sum_{\{N_\alpha\}} \exp\left(-\frac{1}{k_\text{B}T}\sum_\alpha N_\alpha [E_\alpha -\mu]\right)\ket{\Psi^{S/A}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}\bra{\Psi^{S/A}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}
$$

where the sum is over the occupation number of each state, and $\mathcal{Z}$ is a normalization factor (the grand canonical partition function). Find the single particle density matrix $g(x,y)$ for bosons and fermions. _Hint: express $g(x,y)$ in terms of occupation numbers and then average_.

## Sutherland Model

_[This one's a bit hard! In the lectures we talked about verifying that the explicit ground state Slater determinant is an eigenstate of the free particle Hamiltonian. DO THIS FIRST!]_

Show that

$$
\Psi(x_1,\ldots, x_N)= \prod_{j<k}\left(\sin\left[\frac{\pi(x_j-x_k)}{L}\right]\right)^\lambda
$$

is an eigenstate -- in fact it's the ground state -- of the __Sutherland model__

$$
H = -\frac{1}{2}\sum_{j=1}^N \frac{\partial^2}{\partial x_j^2} + \frac{\lambda(\lambda-1)\pi^2}{L^2}\sum_{j<k}
\sin^{-2}\left(\frac{\pi[x_j-x_k]}{L}\right).
$$

with periodic boundary conditions $\Psi(x_1,\ldots x_j+L,\ldots x_M)=\Psi(x_1,\ldots x_j,\ldots x_M)$. Find the energy.

_[If you stick with the $x_j$ variables, you'll need the identity_

$$
  \label{2nd_quant_cotident}
\cot(x-y)\cot(y-z)+\cot(y-z)\cot(z-x)+\cot(z-x)\cot(x-y)=1.	\nonumber
$$

_Alternatively, work with the complex variables $z_j=e^{2\pi x_j/L}$]_

## Density Matrix of the Filled LLL of Fermions

In the lecture we found the density of lowest Landau level filled with $N$ fermions

$$
\rho_1(z,\bar z) = \frac{e^{-|z|^2/2}}{2\pi}\sum_{n=0}^{N-1} \frac{\left|z\right|^{2n}}{2^n n!} = \frac{1}{2\pi} \frac{\Gamma(N,|z|^2/2)}{(N-1)!}.
\label{many_LLLdensity}
$$

Find the density matrix, and investigate its behaviour on the edge of the droplet (where $\abs{z}\sim \sqrt{2N}$) in the large $N$ limit.

## Holes in the $\nu=1$ State

The harmonic potential, projected into the LLL, has the form

$$
V_\text{harm}\longrightarrow v\partial_z z =  v\left(1+z \partial_z\right).
\label{many_HarmonicProject}
$$

Show how to resolve the quasihole state

$$
\Psi_\text{hole}(z_1,\ldots, z_N|Z) = \prod_j (Z-z_j)\Psi_{m=1}(z_1,\ldots, z_N).
$$

into a superposition of eigenstates of $V_\text{harm}$, describing the occupation numbers of these eigenstates. _[Try starting with two particles!]_


## Normal Modes in General

Consider the more general Hamiltonian

$$
H = \sum_{j=1}^N \frac{p_j^2}{2m} + \sum_{j<k} V(x_j-x_k) .
$$

1. Impose periodic boundary conditions and find normal modes for the oscillation about the equilibrium state -- a regular arrangement of masses.

2. Expand $H$ to quadratic order in the deviations from equilibrium and express the Hamiltonian in terms of oscillator variables $\aop_n$, $\adop_n$.

3. Expand to _cubic_ order and express the cubic parts in terms of oscillator variables. If we considered this part of the Hamiltonian as a perturbation in time dependent perturbation theory, what transitions could occur?


## Fluctuations in a Finite Chain

Investigate the behaviour of $\bra{0} u_j^2\ket{0}$ in a chain of length $N$. What happens as $N\to\infty$?

## The 2D Elastic Solid

Solve the 2D harmonic solid, defined by

{{< figure src="2dSolid.png" title="2D harmonic solid." numbered="true" lightbox="true" >}}

__NOTE__: You will need to assume that the equilibrium length of the springs is zero. If not, your solid will not be 'solid', in that even infinitely stiff bars connecting the atoms will not give a rigid structure because they are free to shear layer by layer:

{{< figure src="isostatic.png" title="Isostatic solid." numbered="true" lightbox="true" >}}

## Thermal Displacement in 2D

Show that the ground state expectation $\bra{0} \mathbf{u}_{j,k}^2\ket{0}$ is finite in 2D, but the finite temperature expectation diverges as $N\to\infty$.

## Anisotropic Heisenberg Model

Discuss the spin wave spectrum of the _aniotropic_ Heisenberg chain

$$
H = \sum_j\left[J_\parallel s^z_j s^z_{j+1} + \frac{J_\perp}{2}\left(s^+_js^-_{j+1}+s^-_js^+_{j+1}\right)\right],
$$

for both the ferromagnetic $J<0$ and antiferromagnetic $J>0$ cases.

## From Schwinger Bosons to Holstein--Primakoff

1. If we have $N$ bosons with $\left[\aop_j,\adop_k\right]=\delta_{jk}$, show that
  $$
  \left[\hat A, \hat B\right] = \widehat{\left[A,B\right]}
  $$
  where $\hat A = \adop_j A_{jk} \aop_k$ (summation implied). The commutation relations are 'copied' to the second quantized operators (or if you prefer, they form a representation of the Lie algebra of the matrices). This is apparently called the [Jordan map](https://en.wikipedia.org/wiki/Jordan_map).

2. Applying this to the operators $\frac{\boldsymbol{\sigma}}{2}$ gives, with two bosons $\aop$ and $\bop$
  $$
  \begin{align}
  S^x &= \frac{1}{2}\left(\adop\bop+\bdop\aop\right)\nonumber\\
  S^y &= \frac{i}{2}\left(-\adop\bop+\bdop\aop\right)\nonumber\\
  S^z &= \frac{1}{2}\left(\adop\aop-\bdop\bop\right).
  \label{schwinger}
  \end{align}
  $$
  This is a method for representing spins called __Schwinger bosons__. Identify which states $\ket{N_a}_a\ket{N_b}_b$ of the oscillators correspond to the states of a spin $s$.

3. By considering the action of $\eqref{schwinger}$ on the oscillator states corresponding to spin $s$, show that one can write their effect in terms of a _single_ oscillator, and that this gives the Holstein--Primakoff representation.

## Spin Waves from Bogoliubov Transformation

1. After our $\pi$ rotation of every other spin, the Hamiltonian for the antiferromagnetic chain is
  $$
  \begin{align}
  H = -J \sum_{j=1}^N \left[s^x_j s^x_{j+1} - s^y_j s^y_{j+1} + s^z_j s^z_{j+1}\right].
  \end{align}
  $$
  Substitute directly the Holstein--Primakoff representation in terms of $\aop_j$ and $\adop_j$, without introducing $x_j$ and $p_j$. You should find terms of the form $\aop_j\aop_{j+1}$ and $\adop_j\adop_{j+1}$, among others.

2. Write the Hamiltonian in terms of the Fourier representation
  $$
  \begin{align}
  \aop_j = \frac{1}{\sqrt{N}}\sum_n e^{i\eta_n j} \aop_j,\quad \adop_j = \frac{1}{\sqrt{N}}\sum_n e^{-i\eta_n j} \adop_n.
  \end{align}
  $$
  Your answer should involve terms with $\aop_n\aop_{-n}$ and $\adop_{n}\adop_{-n}$.

3. Check that the __Bogoliubov transformation__
  $$
  \begin{align}
  \adop_n \longrightarrow \cosh\theta_n \adop_n +\sinh\theta_n \aop_{-n}\\
  \aop_n \longrightarrow \cosh\theta_n \aop_n +\sinh\theta_n \adop_{-n}
  \end{align}
  $$
  preserves the commutation relations of the bosons. Choose $\theta_n$ to eliminate the $\aop_n\aop_{-n}$ and $\adop_{n}\adop_{-n}$ terms from the Hamiltonian. Your answer should describe a system of bosons with the dispersion we found in the lecture.
