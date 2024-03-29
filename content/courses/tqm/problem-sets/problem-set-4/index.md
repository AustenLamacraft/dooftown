---
title: Problem Set 4
summary: Kondo Model; Jordan--Wigner; Bosonization.
author: Austen Lamacraft
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
markup: pandoc
menu:
  tqm:
    parent: Problem Sets
    weight: 4
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

## Anomalous Commutators for 1D Fermions

To describe the physics at low energies, it is convenient to write the fermion field operator in one dimension as

$$
\pop(x) = e^{ik_\text{F}x}\pop_R(x)+e^{-ik_\text{F}x}\pop_L(x),
$$

where the modes contributing to $\pop_{L/R}(x)$ are restricted to a momentum shell $[-\Lambda,\Lambda]$ around the Fermi points, with $\Lambda\ll k_\text{F}$. Thus

$$
\pop_R(x)=\sum_{k=-\Lambda}^\Lambda \aop_{k+k_\text{F}}e^{ikx}.
$$

In this way we hope to affect a clean separation of low energy excitations into right and left movers. This has some slightly surprising consequences, however.

We define the density operators for right movers by

$$
\rho^R_q = \sum_{p=-\Lambda+\abs{q}/2}^{\Lambda-\abs{q}/2}\adop_{p-q/2+k_\text{F}}\aop_{p+q/2+k_\text{F}},
\label{rhodef}
$$

where we have chosen the labels so that the hermiticity condition $\left(\rho^R_q\right)^\dagger=\rho^R_{-q}$ is respected.

1. Show that as a result

	$$
	\left[\rho^R_{q},\rho^R_{-q}\right] = \frac{qL}{2\pi},\quad \abs{q}<2\Lambda
	\label{Anom}
	$$

	leading to the real space commutator

	$$
	\left[\rho_R(x),\rho_R(x')\right] =-\frac{i}{2\pi}\delta'(x-x').
	$$

2. Show that the left moving commutator has the opposite sign, so the total density $\rho^R(x)+\rho^L(x)$ still commutes at different points.

3. $\eqref{Anom}$ tells us that $\rho^R_q$ can be written

	$$
	\begin{align}
	\rho^R_q &= \sqrt{\frac{qL}{2\pi}}r_q, \\
	\rho^R_{-q} &= \sqrt{\frac{qL}{2\pi}}r^\dagger_q, \quad q>0,
	\end{align}
	$$

	where $\left[r_q,r_{q'}^\dagger\right]=\delta_{q,q'}$. From the definition $\eqref{rhodef}$ we see that $\rho_q^R$ annihilates the ground state, while $\rho^R_{-q}$ creates an excitation with momentum $q$.

4. Show that the structure factor of the density $\rho_q = \rho^R_q+\rho^L_q$ saturates the Onsager bound discussed in [Problem Set 3]({{< ref "problem-set-3#an-inequality-for-the-static-structure-factor" >}}).

## Bosonized Form of the Fermion Operator

Using the density operator in the previous question, define

$$
\begin{align}
\phi^R(x) = 2\pi\int^x \rho^R(x')dx' = -i\sum_{q>0}\sqrt{\frac{2\pi}{qL}}\left[r_q e^{iqx}-r^\dagger_q e^{-iqx}\right].
\end{align}
$$

Show that $e^{\pm i\phi^R(x)}$ _anticommute_ at different positions, and further that

$$
\left\{e^{i\phi^R(x)},e^{-i\phi^R(x')}\right\}\propto \delta(x-x').
$$

The overall normalization is cut-off dependent.

## From the Anderson Model to the Kondo Model

One route to understanding the origin of the Kondo coupling is to start from the [Anderson impurity model](https://en.wikipedia.org/wiki/Anderson_impurity_model).

$$
\begin{align}
H = \sum_{\bk,s}\xi(\bk)\adop_{\bk,s}\aop_{\bk,s}+\overbrace{\sum_s\epsilon_b N_{b,s} + U N_{b,\uparrow}N_{b,\downarrow}}^{\equiv H_b} + \overbrace{\frac{t}{\sqrt{V}}\sum_{\bk,s}\left[\adop_{\bk,s}\bop_s+\text{h.c.}\right]}^{\equiv H_t}
\end{align}
$$

here the $\bop$ fermion describes the impurity site: $N_{b,s}=\bdop_{s}\bop_s$.

For $t=0$ and $\epsilon_b=-U/2$ the singly occupied, doubly degenerate impurity state has energy $-U/2$, with the empty and double occupied states having larger energy $0$ (this choice is made for simplicity). We can then ask for the effective Hamiltonian describing the singly occupied site. We've seen one way to do this in [Lecture 7]({{< ref "courses/tqm/lattice-models" >}}). A second way is to use the __Schrieffer–Wolff transformation__ {%cite Schrieffer:1966aa %}. The idea is to perform a unitary transformation on the Hamiltonian that removes the coupling in the last term to lowest order.

We write

$$
H\to H'\equiv e^S H e^{-S},
$$

where $S$ is antihermitian.

1. Show that, if we ignore the kinetic energy, $S$ must be chosen so that

	$$
	\left[S, H_b\right] = - H_t.
	$$

2. Show that the transformed Hamiltonian $H'$ contains the term

	$$
	H^{(2)} = \frac{1}{2}\left[S,H_t\right]
	$$

	of order $t^2$.

3. Try $S$ of the form

	$$
	S = \sum_{k,s} f(N_{b,\bar s})\adop_{\bk,s}\bop_s - \text{h.c.},
	$$

	where $\bar\uparrow=\downarrow$, $\bar\downarrow=\uparrow$. Find the form of $f(N)$ and compute $H^{(2)}$, retaining only those parts that keep the occupancy of the impurity fixed. You should be able to write $H^{(2)}$ as a Kondo Hamiltonian and identify $J$. What sign does it have?

	_Hint:_ $\bdop_s f(N_b) = f(N_b-1)\bdop_s$, $\bop_s f(N_b) = f(N_b+1)\bop_s$

## Spin-Flip Mediated Inelastic Scattering

{% cite Kaminski:2001aa %}

Consider the scattering of _two_ fermions in the Kondo problem

$$
\ket{\bk_1,s_1,\bk_2,s_2} = \adop_{\bk_1,s_1}\adop_{\bk_2,s_2}\ket{\text{FS}}
$$

Find at second order in $J$ the amplitude for the process

$$
\bk'_1,s'_1,\bk'_2,s'_2\longrightarrow \bk_1,s_1,\bk_2,s_2,
$$

and show that the total scattering rate, averaged over initial spin states of the fermions and the impurity spin $S$, is

$$
\begin{align}
\Gamma(\epsilon_1',\epsilon_2',\epsilon_1,\epsilon_2)&=\frac{\pi}{4}S(S+1)\left(\frac{J}{V}\right)^4\\
&\times\left[\frac{1}{(\epsilon'_1-\epsilon_1)^2}+\frac{1}{(\epsilon'_1-\epsilon_2)^2}\right]\delta(\epsilon_1+\epsilon_2-\epsilon_1'-\epsilon_2').
\end{align}
$$

Making sense of Golden Rule calculations is always tricky. To convert this into a total rate at which a particle scatters from state $1$ requires us to multiply by a factor

$$
N_\text{imp} n_\text{F}(\epsilon_2)\left[1-n_\text{F}(\epsilon_3)\right]\left[1-n_\text{F}(\epsilon_4)\right]\nu^3 V^3 d\xi_2 d\xi_3 d\xi_4,
$$

where $\nu$ is the density of states per spin per unit volume. $n_\text{F}(\epsilon)$ is the Fermi distribution, as states $2$ must be occupied, while $3$ and $4$ must be empty. This rate is volume independent, as it should be. Note that if we wanted the _total_ rate for all particles in state 1 we'd need another $n_\text{F}(\epsilon_1)\nu Vd\xi_1$, which would be proportional to volume.

## Kondo Effect Without Spin

{% cite Matveev:1990aa %}

A model for (spinless) electrons hopping on and off a metal grain or quantum dot  ($a$ fermions) to a lead  ($b$ fermions) is

$$
\begin{align}
H &= \sum_{\bk} \xi(\bk)\left[\adop_\bk\aop_\bk+\bdop_\bk\bop_\bk
\right] + \frac{Q^2}{2C}+\varphi Q\\
&\quad+\overbrace{\frac{1}{\sqrt{V_aV_b}}\sum_{\bk,\bk'} \left[t\,\adop_\bk\bop_{\bk'}+\text{h.c.}\right]}^{\equiv H_t}.
\end{align}
$$

Here $C$ is the capacitance, and $Q$ is the charge of the dot

$$
Q = e\sum_\bk \left[\adop_\bk\aop_\bk - \theta(-\xi(\bk))\right],
$$

defined so that the dot is neutral when filled to $\xi(\bk)=0$. $\varphi$ is a gate voltage. In the region

$$
-\frac{e}{2C}< \varphi < \frac{e}{2C},
$$

the ground state of the decoupled system ($t=0$) has $Q=0$.

1. Show that at second order in the hopping, the ground state 	expectation of the charge on the dot is

	$$
	\langle Q\rangle \sim eg \log\left(\frac{e/2C-\varphi}{e/2C+\varphi}\right),
	$$

	where $g \equiv \abs{t}^2\nu_a(0)\nu_b(0)$.

2. What has this got to do with the Kondo effect? Try to establish a dictionary between the two phenomena.



## Ground State of the Attractive Lieb--Liniger Model

For _attractive_ interactions $c<0$ the ground state of $N$ bosons on the infinite line is

$$
\Psi(x_1,\ldots,x_N) = \prod_{j<k}\exp\left(-\frac{\abs{c}}{2}\abs{x_j-x_k}\right),\quad x_1<x_2<\cdots <x_N
$$

Show that this is a Bethe state, find the Bethe roots, and calculate the energy. Compare with the prediction of the Gross--Pitaevskii equation found in [Problem Set 2]({{< ref "problem-set-2/#bose-gas-with-attractive-interactions" >}}).


## Density Correlations in Lieb--Liniger

If $E_0(c)$ is the ground state energy of the Lieb--Liniger model as a function of $c$, show that

$$
\frac{dE_0}{dc} = \bra{\Psi_0}\sum_{j<k}\delta(x_j-x_k)\ket{\Psi_0},
$$

where $\ket{\Psi_0}$ is the ground state. By solving the Bethe equations numerically (see the [IPython notebook](https://github.com/AustenLamacraft/Theories-of-Quantum-Matter/blob/master/notebooks/BetheGroundState.ipynb)), find how the RHS varies with $c$, and interpret your results.


References
----------

{% bibliography --cited %}
