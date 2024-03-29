---
title: Bose Gas
summary: Gross--Pitaevskii approximation. Superfluidity. Bogoliubov theory.
author: Austen Lamacraft
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: book  # Do not modify.
markup: pandoc
weight: 80
---

$$
\nonumber
\newcommand{\cE}{\mathcal{E}}
\newcommand{\cH}{\mathcal{H}}
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


You know that noninteracting bosons form a Bose condensate: we will see how weak interactions alter this picture, and make a connection to the phenomenon of __superfluidity__.

---

## The Gross--Pitaevskii Approximation

Our first attack on the problem is variational. It's very easy to come up with a variational wavefunction for the ground state of a Bose gas: put all the particles in the same single particle state!

$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
\label{bose_GPW}
$$

A state with a macroscopic number of particles in a single particle state is known as a __Bose condensate__. You have probably studied the statistical mechanics of an ideal Bose gas before: the main feature is a __condensation temperature__ below which macroscopic occupation occurs.

We know that if we have a noninteracting Hamiltonian

$$
H = \sum\left[-\frac{\nabla_i^2}{2m} + V(\br_i)\right],
$$

then the ground state has exactly the form $\eqref{bose_GPW}$, with $\varphi_0(\br)$ the ground state of the single particle Hamiltonian. After adding interactions to the Hamiltonian, in the form

$$
H_\text{int.} = \sum_{j<k} U(\br_j-\br_k) = \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
$$

it is no longer true that the exact ground state has the form $\eqref{bose_GPW}$, but we can treat $\varphi_0(\br)$ as a variational function that we must find. This leads to the __Gross--Pitaevskii equation__.

### Gross--Pitaevskii Equation

From now on we will take a model of short-ranged interactions for simplicity

$$
U(\br-\br') = U_0\delta(\br-\br')
$$

To implement the variational calculation we need to find

$$
\langle E \rangle = \frac{\braket{\Psi}{H}{\Psi}}{\inner{\Psi}{\Psi}}
$$

In fact, it turns out to be more convenient to minimize $\braket{\Psi}{H}{\Psi}$, using a Lagrange multiplier to fix the normalization. We have

$$
\begin{align}
\braket{\Psi}{H}{\Psi}=N \int d\br \left[\frac{1}{2m}|\nabla\varphi_0|^2+V(\br)|\varphi_0(\br)|^2
\right]\\
+\frac{1}{2}N(N-1)U_0\int d\br |\varphi_0(\br)|^4.
\label{bose_energy}
\end{align}
$$

For large $N$, we can neglect the difference between $N$ and $N+1$. Now we want to extremize this functional with respect to $\varphi_0(\br)$, keeping $\varphi_{0}(\br)$ normalized. To do this we introduce a Lagrange multiplier $\mu N$ (the factor of $N$ will become clear shortly) and extremize the functional

$$
\braket{\Psi}{H}{\Psi} - \mu N \int d\br |\varphi_{0}(\br)|^{2}.
$$

To find the extremum requires a standard application of the calculus of variations, yielding the equation

$$
	\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+NU_0|\varphi_0(\br)|^2\right]\varphi_0(\br)=0.
  \label{bose_static_PreGPEqn}
$$

It's convenient to deal with the stray factor of $N$ in $\eqref{bose_static_PreGPEqn}$ by defining $\varphi(\br)\equiv\sqrt{N}\varphi_{0}(\br)$. $\varphi(\br)$ is known as the __condensate wavefunction__ or __order parameter__. Later we will give a more general definition that does not depend on the above variational approximation. We have thus obtained the __Gross--Pitaevskii equation__

$$
\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+U_0|\varphi(\br)|^2\right]\varphi(\br)=0.
$$

It remains to fix the Lagrange multiplier $\mu$. This is done by demanding that $\int d\br\,\abs{\varphi(\br)}^{2}=N$. Since $\braket{\Psi}{H}{\Psi}- \mu \int d\br \abs{\varphi(\br)}^{2}=\braket{\Psi}{H-\mu \mathsf{N}}{\Psi}$ was extremized under general variations, including those that changed $N$, we must have

$$
	\label{bose_static_GPmu}
	\mu=\frac{\partial\braket{\Psi}{H}{\Psi}}{\partial N},
$$

so that $\mu$ is identified with the chemical potential.

A fundamental effect of the nonlinearity of the GP equation is that there exists a length scale set by the
typical value of $|\varphi(\br)|^2\sim n$ and the interaction strength

$$
\xi\equiv \frac{1}{\sqrt{2m n U_0}}
$$

This __healing length__ determines the scale over which  $\varphi(\br)$ is disturbed by the introduction
of a localized potential of scale $\ll \xi$. It is a fundamental length scale in the system.

> Show that near a hard wall, where the condensate wavefunction goes to zero, $\varphi(\br)$ is given by
>
> $$
>  \varphi(x)=\varphi_{\infty}\tanh \frac{x}{\sqrt{2}\xi}
> $$
>
> where $x$ is the distance from the wall, and $\varphi_{\infty}=\sqrt{n_{\infty}}$ is fixed by the density of the condensate far from the wall.

### Some Observables

With the ansatz $\eqref{bose_GPW}$ for the wavefunction, we can obtain various observables without
difficulty. The density and current density are

$$
\begin{align}
\rho(\br)&=|\varphi(\br)|^2,\\
\mathbf{j}(\br)&=-\frac{i}{2m}\left[\varphi^{*}(\br)\left(\nabla\varphi(\br)\right)-\left(\nabla\varphi^{*}(\br)\right)\varphi(\br)\right]
\end{align}
$$

Alternatively, one may write this is terms of the velocity field of the gas, using $\mathbf{j}=\rho \mathbf{v}$, and the decomposition of $\varphi(\br)$ into magnitude and phase

$$
	\varphi(\br)=\sqrt{\rho(\br)}e^{i\chi(\br)}.
$$

We thus find the __superfluid velocity__

$$
	\mathbf{v}_{s}\equiv\frac{1}{m}\nabla\chi.
  \label{bose_vs}
$$

The name is to distinguish this contribution from that arising from thermal excitations. For the moment we are considering zero temperature, so this is all there is.

The usefulness of the Gross--Pitaevskii equations lies in its ability to describe spatially nonuniform situations. Often, nonuniformity is imposed by an external potential, but there is an important class of configurations that are stable -- or metastable -- for _topological_ reasons.

### Example: Vortex

Since $\eqref{bose_vs}$ tells us that the superfluid velocity is a gradient of something, we may expect it to be _irrotational_

$$
\nabla\times \mathbf{v}_s = 0,
$$

or equivalently to have vanishing _circulation_

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=0
$$

around any closed loop. However, it is possible for the phase of the wavefunction to increase by a multiple of $2\pi$ around a closed loop, which still gives a single-valued condensate wavefunction since $\varphi(\br)=\sqrt{\rho(\br)}e^{i\chi(\br)}$. Thus in general the circulation

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{2\pi \ell}{m},\quad \ell\in\mathbb{Z},
$$

which is known as the __Onsager--Feynmann quantization condition__. A localized configuration with finite circulation is called a __vortex__ in fluid dynamics, but in a normal fluid there is no reason for the vorticity to be quantized. Restoring Planck's constant just this once

$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{h\ell}{m},\quad \ell\in\mathbb{Z},
$$

shows that this is a truly _quantum_ phenomenon.

A non-zero winding of the phase requires that $\rho(\br)$ vanishes at a point (in two dimensions) or on a line (in three). Let's see how such configurations are described by the Gross--Pitaevskii theory.

We are going to look for 2D solutions where the phase winds $\ell$ times as we encircle the origin

$$
\varphi(r,\theta)\xrightarrow{r\to\infty} \sqrt{n} e^{i\ell\theta}.
\label{bose_vortex}
$$

We parameterize the solution as $\varphi(r,\theta) = \sqrt{n} f(r/\xi)e^{i\ell\theta}$, measuring distances in terms of the healing length. Substituting into the Gross--Pitaevskii equation gives an equation in $s\equiv r/\xi$.

$$
-f'' -\frac{f'}{s} + \frac{\ell^2 f}{s^2} - f +f^3 =0.
$$

We take $\mu = U_0 n$ to get the behaviour $\eqref{bose_vortex}$ at infinity.

> Without finding the solution explicitly, show that $f(s)\sim s^\ell$ for small $s$, and $f(s\to\infty) \to 1$.

The region of suppressed density, of characteristic size $\xi$, is called the __vortex core__. In three dimensions, the vortex core is a line.

We can find the energy of the vortex state by substituting the solution back into the energy functional $\eqref{bose_energy}$ to find the energy excess relative to a uniform state of density $n$

$$
\Delta E = \int d\br \left[\frac{n^2}{2m\xi^2}(f')^2+\frac{U}{2}n^2 \left(f^2-1\right)^2\right] + \frac{n^2}{2m}\int d\br\, f^2(\nabla\chi)^2.
$$

The first integral is finite, and arises purely from the departure of the density away from its bulk value. The second represents the contribution to the kinetic energy arising from the winding of the vortex's phase. Since we have

$$
\nabla \chi = \frac{\ell}{r}\hat{\mathbf{e}}_\theta,
$$

this contribution to the energy is _logarithmically divergent_.

$$
\Delta E = \text{const.} + \frac{\pi n \ell^2}{m}\log\left(\frac{L}{\xi}\right).
$$

There is far-reaching analogy between the superfluid velocity fields of vortices and the magnetostatics of current-carrying wires,

Vortices | Magnetostatics
--- | ---
Vortex cores | Wires
Superfluid velocity $\mathbf{v}_s$ | Magnetic field, $\mathbf{B}$
Kinetic Energy | Magnetostatic Energy

Vortices with $\abs{\ell}>1$ are generally unstable, and will break into multiple vortices of winding $\ell=\pm 1$. Like vortices repel each other, and can form spectacular __vortex lattices__, akin to crystals.

{{< figure src="3dLattices.jpg" title="Vortex lattice in a Bose--Einstein condensate of Sodium atoms. Source: [Ketterle group, MIT](http://cua.mit.edu/ketterle_group/)." numbered="true" lightbox="true" >}}

Vortices are one manifestation of the phenomenon of __superfluidity__: persistent flow without resistance. The true ground state of the system does not have such flows, of course, so these flows are only _metastable_ (as long as rotational symmetry is broken, so that angular momentum is not conserved). In the case of the vortex, it can only decay by its core leaving the system. An even simpler example is provided by currents flowing in a ring, a situation studied in [Problem Set 2]({{< ref "problem-set-2#persistent-currents-without-rotational-symmetry" >}}), which illustrates the important role played by repulsive interactions.

## Bogoliubov Theory

How can we improve upon the Gross--Pitaevskii approximation? From now on we focus on a uniform condensate with no external potential $V(\br)$, in which case the condensate wavefunction is just a constant $\varphi(\br)=\sqrt{n}$. As usual we work in a plane wave basis, where the Hamiltonian takes the form

$$
H =\sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk + \overbrace{\frac{U_0}{2V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}}^{\equiv H_\text{int}},
$$

with $\epsilon(\bk)=\bk^2/2m$, and $V$ the volume. The Gross--Pitaevskii approximation to the ground state is

$$
\ket{\Psi_\text{GP}} = \frac{1}{\sqrt{N!}}\left(\adop_0\right)^N\ket{\text{VAC}}.
$$

When $H_\text{int}$ acts on this state, the only terms that contribute are those with $\bk_3=\bk_4=0$

$$
H_\text{int}\ket{\Psi_\text{GP}} =  \frac{U_0}{2V}\sum_{\bk} \adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0}\ket{\Psi_\text{GP}}.
$$

Thus, if we want a better wavefunction, we are going to have to add some $(+\bk, -\bk)$ pairs!

### Bogoliubov Hamiltonian

When interactions are weak, we expect that the true ground state is close to $\ket{\Psi_\text{GP}}$, so that most of the particles remain in the zero momentum state, with relatively few pairs created. Remembering that

$$
\aop\ket{N} = \sqrt{N}\ket{N-1},\quad \adop\ket{N} = \sqrt{N+1}\ket{N+1},
\label{bose_aN}
$$

we see that a term in the Hamiltonian with $\aop_0$ or $\adop_0$ is going to be more important -- on account of the large occupancy of $\bk=0$ -- than a term without. For this reason we divide up the interaction Hamiltonian according to the number of occurrences of these operators

$$
\begin{align}
H_\text{int} = &\frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 \\\nonumber 
&+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right]\\\nonumber
&+\frac{U_0}{V}\sum_{\substack{\bk_1=\bk_2+\bk_3\\ \bk_{1,2,3}\neq 0}}\left[\adop_{\bk_3}\adop_{\bk_2}\aop_{\bk_1}\aop_0 +\adop_0\adop_{\bk_1}\aop_{\bk_2}\aop_{\bk_3}\right]\\\nonumber
&+\frac{U_0}{2V}\sum_{\substack{\bk_1+\bk_2=\bk_3+\bk_4\\ \bk_{1,2,3,4}\neq 0}} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}.
\end{align}
$$

The Gross--Pitaevskii approximation corresponds to the first term. We are now going to additionally keep the second term, and neglect the third and fourth. Thus we study the Hamiltonian

$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right].
\label{bose_Hpair}
\end{align}
$$

The second line describes the movement of pairs between zero momentum and $(+\bk,-\bk)$. To separate as much as possible the $\bk\neq 0$ modes from the $\bk=0$ mode we use

$$
\adop_0\aop_0 = N - N',\quad N'\equiv \sum_{\bk\neq 0} N_\bk
$$

so that

$$
\adop_0\adop_0\aop_0\aop_0 =  N(N-1) - 2N'N_0+O(N_0^0	).
$$

In this way, $\eqref{bose_Hpair}$ becomes

$$
\begin{align}
H_\text{pair} = &N\epsilon(0)+\frac{U_0}{2V}N(N-1) \nonumber\\\nonumber
&+\sum_{\bk\neq 0}\left(\left[\epsilon(\bk)-\epsilon(0)\right]\adop_\bk\aop_\bk\right.\\
&\left.+\frac{U_0}{2V}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+2\adop_\bk\adop_0\aop_0\aop_\bk\right]\right).
\label{bose_Hpair2}
\end{align}
$$

Even though $\epsilon(0)=0$ for the situation we are interested in right now, we have included the general case in $\eqref{bose_Hpair2}$ to emphasize that it is the energy _difference_ between $0$ and $\bk$ that is important: any energy offset appears as a constant in the first term.

Even now it's not so easy to solve this problem. One last vital simplification is needed. We are going to replace the operators $\adop_0$, $\aop_0$ with $\sqrt{N}$, giving a quadratic Hamiltonian. That may sound like a pretty odd thing to do: after all, the resulting Hamiltonian no longer conserves the number of particles! Let's see why this is a good approximation.

Consider the action of the Hamiltonian $\eqref{bose_Hpair}$ on a product state of the form $\ket{\Psi'}\otimes\ket{N_0}_0$, where $\ket{\Psi'}$ lives in the many body Hilbert space made from non-zero momentum single particle states and $\ket{N_0}_0$ has $N_0$ particles in the zero momentum state. 

The action of $\adop_\bk \aop_0$ on this state is

$$
\begin{align}
\adop_\bk\aop_0\ket{\Psi'}\otimes\ket{N_0}_0 &= \left(\adop_\bk \ket{\Psi'}\right)\otimes \aop_0\ket{N_0}_0\nonumber\\
 &= \left(\adop_\bk \ket{\Psi'}\right)\otimes \sqrt{N_0}\ket{N_0-1}_0.
\end{align}
$$

Likewise

$$
\begin{align}
\aop_\bk\adop_0\ket{\Psi'}\otimes\ket{N_0}_0 &= \left(\aop_\bk \ket{\Psi'}\right)\otimes \adop_0\ket{N_0}_0 \nonumber\\
&= \left(\aop_\bk \ket{\Psi'}\right)\otimes \sqrt{N_0+1}\ket{N_0+1}_0.
\end{align}
$$

Since $N_0$ is assumed to be large, we ignore the difference between $N_0$ and $N_0+1$. To be more precise, we are assuming that in the states we are going to find, $N_0$ will not fluctuate substantially. If this is the case, the _matrix elements_ of $H_\text{pair}$ are approximately unchanged when we make the replacement mentioned above, leaving us with the __Bogoliubov Hamiltonian__

<!-- $$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0n_0}{2}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk} + \aop_{\bk}\aop_{-\bk}+2\adop_\bk\aop_\bk\right].
\label{bose_Hpair3}
\end{align}
$$ -->

$$
\begin{align}
H_\text{pair} &= N\epsilon(0)+\frac{U_0}{2V}N(N-1) \nonumber\\
&+\sum_{\bk\neq 0}\left(\left[\tilde\epsilon(\bk)+U_0n_0\right]\adop_\bk\aop_\bk+\frac{U_0n_0}{2}\left[\adop_{\bk}\adop_{-\bk} + \aop_{\bk}\aop_{-\bk}\right]\right).
\label{bose_Hpair3}
\end{align}
$$

where $n_0 = N_0/V$ is the density of particles in the zero momentum state, and we have defined $\tilde\epsilon(\bk)\equiv\epsilon(\bk)-\epsilon(0)$. The Hamiltonian $\eqref{bose_Hpair3}$ can be diagonalized by a __Bogoliubov transformation__.

### Bogoliubov transformation

This is a change of variables that arises often in many body physics, so we'll take some time to introduce it in a general context. Suppose we have a Hermitian operator that is quadratic in two bosons $\aop_{1,2}$ with the following form

$$
h = \epsilon\left[\adop_1\aop_1+\adop_2\aop_2\right] + \delta\left[\adop_1\adop_2+\aop_1\aop_2\right].
$$

It's convenient to write this as

$$
h = \begin{pmatrix}
\adop_1 & \aop_2
\end{pmatrix}
\begin{pmatrix}
\epsilon & \delta \\
\delta & \epsilon
\end{pmatrix}
\begin{pmatrix}
\aop_1 \\ \adop_2
\end{pmatrix}-\epsilon
$$

It is possible to express $h$ in terms of some new bosons $\bop_{1,2}$ in the form

$$
h = \Omega\left[\bdop_1\bop_1+\bdop_2\bop_2\right] +\text{const.}
$$

(because then the spectrum is obvious). We look to express the new bosons linearly in terms of the old as follows

$$
\begin{pmatrix}
\bop_1 \\ \bdop_2
\end{pmatrix}=
\Lambda
\begin{pmatrix}
\aop_1 \\ \adop_2
\end{pmatrix}
$$

where $\Lambda$ is some $2\times 2$ matrix. What conditions should $\Lambda$ satisfy?

> Show that if we want the new bosons $\bop_{1,2}$ to satisfy the same commutation relations as the original $a_{1,2}$, we must have
> $$
> \Lambda^\dagger \sigma_3 \Lambda = \sigma_3
> $$

The following parameterization satisfies this condition and is sufficiently general for our needs

$$
\Lambda=
\begin{pmatrix}
\cosh\kappa & \sinh\kappa \\
\sinh\kappa & \cosh\kappa
\end{pmatrix}.
$$

Notice the differences from a rotation matrix:

1. Hyperbolic instead of trignometric functions
2. No sign difference between the off digaonal elements.

> Show that 
>$$
>\begin{align}
> \tanh 2\kappa = \frac{\delta}{\epsilon},\qquad \Omega = \sqrt{\epsilon^2-\delta^2\nonumber}\\
> h = \Omega\left[\bdop_1\bop_1+\bdop_2\bop_2\right] + \Omega - \epsilon.
>\end{align}
>$$
>
> The form of $\Omega$ is most easily understood by noting that the transformation preserves the determinant ($\det\Lambda=1$). 
> 
> - What happens if $\delta>\epsilon$?
> 
> - What changes if $\begin{pmatrix}
\epsilon & \delta \\
\delta & \epsilon
\end{pmatrix}\longrightarrow \begin{pmatrix}
\epsilon_1 & \delta \\
\delta & \epsilon_2
\end{pmatrix}$?

Applying the same logic to our Hamiltonian $\eqref{bose_Hpair3}$ gives

$$
\bop_\bp=\aop_\bp\cosh\kappa_\bp+\adop_{-\bp}\sinh\kappa_\bp\nonumber\\
\qquad \tanh2\kappa_\bp=\frac{n_0 U_0}{\tilde\epsilon(\bp)+n_0 U_0},
$$

(make sure you understand where the $1/2$ went!) and

$$
H=E_0+\sum_{\bp\neq 0}\omega(\bp)\bdop_\bp
\bop_\bp.
$$

Here $\omega(\bp)$ is the Bogoliubov dispersion relation

$$
\omega(\bp) = \sqrt{\tilde\epsilon(\bp)\left(\tilde\epsilon(\bp)+2U_0n_0\right)},
$$

and the ground state energy is

$$
E_0=\frac{1}{2}nU_0  N+\sum_{\bp\neq 0}\frac{1}{2}\left[\omega(\bp)-\tilde\epsilon(\bp)-n_0U_0\right].
$$

Somewhat annoyingly, this integral is divergent in the ultraviolet. However, this is actually nothing to do with the many body physics of the problem, but is rather related to the need to regularize a $\delta$-function potential in three dimensions (see [Problem Set 2]({{< ref "courses/tqm/problem-sets/problem-set-2#perturbation-theory-for-the-bose-gas" >}})). The cure is described in the [Appendix]({{< ref "#regularizing-the-ground-state-energy" >}}), but it isn't too important in what follows.

### The Ground State

So far, our ground state is just defined by the condition that it is a vacuum of Bogoliubov excitations

$$
\bop_\bk\ket{0}=\left(\cosh\kappa_\bk \aop_\bk+\sinh\kappa_\bk \adop_{-\bk}\right)\ket{0}=0.
$$

But what does it _look_ like? A state (unnormalized) that satisfies the above equation is

$$
\ket{0}=\prod_{\bk\neq 0} \exp\left(-\frac{1}{2}\tanh\kappa_\bk\adop_{\bk}\adop_{-\bk}\right)\ket{\Psi_\text{GP}}
\label{bose_BogWave}
$$

> Show this. If you've seen coherent states before, remember that the state $e^{\alpha \adop}\ket{\text{VAC}}$ is an eigenstate of $\aop$ with eigenvalue $\alpha$.

The form $\eqref{bose_BogWave}$ shows explicitly that the state consists of a superposition of pairs excited out of the $\bk=0$ condensate. As we've discussed, we don't actually keep track of the loss of particles from the condensate in the Bogoliubov approximation, on the assumption that it is small.

We can get some feeling for the properties of the ground state by considering the density fluctuations. Recall that the Fourier components of the density operator are

$$
\rho_\bq = \sum_\bk \adop_{\bk-\bq}\aop_\bk.
$$

On the basis of the logic that we've been following so far, the most important terms will be those where one of $\adop_{\bk-\bq}$ or $\aop_\bk$ acts on the condensate. Thus

$$
\rho_\bq \sim \sqrt{N}\left(\adop_{-\bq} + \aop_{\bq}\right) = \sqrt{N}e^{-\kappa_\bq} \left(\bdop_{-\bq} + \bop_{\bq}\right),
$$

where

$$
e^{-\kappa_\bq} = \sqrt{\frac{\tilde\epsilon(\bq)}{\omega(\bq)}}.
$$

The density fluctuations in the ground state are then

$$
\braket{0}{\rho_{-\bq}\rho_{\bq}}{0} = N\frac{\tilde\epsilon(\bq)}{\omega(\bq)}\xrightarrow{\bq\to 0} \frac{N\abs{\bq}}{2mc}.
$$

On the right hand side we have used the low momentum form of the Bogoliubov dispersion

$$
\omega(\bq)\xrightarrow{\bq\to 0} c\abs{\bq}
$$

where $c = \sqrt{\frac{n_0U_0}{m}}$ is the speed of sound. We see that the density fluctuations vanish as the wavevector goes to zero. This is to be contrasted with the result that we would find in the Gross--Pitaevskii ground state (or ground state of the ideal gas)

$$
\braket{0}{\rho_{-\bq}\rho_{\bq}}{0} = N.
$$

corresponding to uncorrelated, Poissonian fluctuations of number inside any volume of the gas. If we were to take a snapshot of the particles at any instant in the interacting gas, we would see a picture similar to the image of the Laughlin state in [Lecture 2]({{< ref "quantum-hall-effect" >}}).

The other qualitatively new feature of the Bogoliubov ground state is that the zero momentum state is _depleted_. We find the momentum distribution by first writing the number operator $N_\bp=\adop_{\bp}\aop_{\bp}$ in terms of the Bogoliubov quasiparticles

$$
	\adop_{\bp}\aop_{\bp}=(\bdop_\bp\cosh\kappa_{\bp}-\bop_{-\bp}\sinh\kappa_{\bp})(\bop_\bp\cosh\kappa_{\bp}-\bdop_{-\bp}\sinh\kappa_{\bp}),
$$

and then finding the average

$$
\langle N_\bp\rangle=\langle \adop_{\bp}\aop_{\bp}\rangle = \sinh^2\kappa_{p}\xrightarrow{ \abs{\bp}\ll \xi^{-1}}\frac{mc_s}{2\abs{\bp}}.
$$

The radial density distribution $4\pi p^2 N_\bp$ is peaked around $\xi^{-1}$. Summing over $\bp$ gives the fraction of atoms not in the condensate

$$
\frac{1}{N}\sum_{\bp\neq 0} \langle N_\bp\rangle=\frac{8}{3\sqrt{\pi}}\sqrt{n a^3},
$$

where we used the Born approximation for the scattering length $a=\frac{mU_0}{4\pi}$. Excluding the value $\bp=0$ has no effect, because of the vanishing phase space at small momentum in three dimensions.

Under typical experimental conditions in experiments on ultracold atoms the depletion does not much exceed $0.01$, which justifies the use of the GP approximation. Liquid He$^{4}$, the first superfluid to be discovered, can be described as an interacting Bose condensate, but the depletion is much larger (the _condensate fraction_ – the fraction of atoms in the condensate – is around 10%). The Bogoliubov approximation does not provide a quantiatively accurate description in this case.

In the previous lecture we met another situation where the depletion can be increased. Applying a lattice effectively reduces the kinetic energy relative to the interaction, and leads eventually to a __quantum phase transition__ out of the superfluid state.


Appendix
--------

### Regularizing the ground state energy

To find the ground state energy in the Bogoliubov theory we have to compute the sum

$$
\begin{equation}
\sum_{\bp\neq 0}\frac{1}{2}\left[\omega(\bp)-\frac{\bp^2}{2m}-n_0U_0\right].
\label{bog-sum}
\end{equation}
$$

After turning it into an integral in the usual way, we have

$$
\frac{V}{4\pi^2 m}\left[\overbrace{\int_0^\Lambda p^2 \sqrt{p^2\left(p^2+\frac{2}{\xi^2}\right)}dp}^{\equiv I(\Lambda)} - \int_0^\Lambda \left(p^4 + \frac{p^2}{\xi^2}\right) dp \right]
$$

where we have introduced an upper cutoff $\Lambda$ to see what happens as it increases to infinity. The first integral comes from the $\omega(\bp)$ in the summand. $\xi\equiv \frac{1}{\sqrt{2m n U_0}}$ is the healing length as before. Introducing the substitution $u=p^2$ gives

$$
\begin{align}
I(\Lambda) &= \frac{1}{2}\int^{\Lambda^2}_0 u\sqrt{u+\frac{2}{\xi^2}} du \nonumber \\
&= \left[\frac{1}{5}\left(u+\frac{2}{\xi^2}\right)^{5/2}-\frac{2}{3\xi^2} \left(u+\frac{2}{\xi^2}\right)^{3/2}\right]^{\Lambda^2}_0\nonumber \\
&= \frac{\Lambda^5}{5} + \frac{\Lambda^3}{3\xi^2} -\frac{\Lambda}{2\xi^4}+\cdots.
\label{int-eval}
\end{align}
$$
In the expansion we have retained only the terms with positive powers of $\Lambda$. By comparing with the definition of $I(\Lambda)$, we can see that these terms arise from the first three terms in the large $p$ expansion of the integrand

$$
\begin{equation}
p^2 \sqrt{p^2\left(p^2+\frac{2}{\xi^2}\right)} = p^4 + \frac{p^2}{\xi^2} - \frac{1}{2\xi^2}.
\label{exp-integrand}
\end{equation}
$$

In the original sum $\eqref{bog-sum}$ the contributions of the first two terms in $\eqref{exp-integrand}$ are cancelled by subtracting $\frac{1}{2}\left[\frac{\bp^2}{2m}+n_0U_0\right]$. This still leaves us with a divergence $\propto \Lambda$ arising from last term of $\eqref{exp-integrand}$. On the other hand, the sum

$$
E_\text{reg}\equiv\sum_{\bp\neq 0}\frac{1}
{2}\left[\omega(\bp)-\tilde\epsilon(\bp)-n_0U_0+ \frac{(n_0U_0)^2}{2\tilde\epsilon(\bp)}\right]
$$

_is_ finite as $\Lambda\to \infty$, because all positive powers of $\Lambda$ cancelled. The value is then given by the lower limit of the expression in $\eqref{int-eval}$.

$$
E_\text{reg} = \frac{V}{m\pi^2}\frac{16}{15}(mnU_0)^{5/2}
$$

OK, but so what? That isn't what we wanted. But notice that the regularized energy can be used to write the total energy as

$$
E_0=\frac{1}{2}nU_0  N\left[1-\frac{1}{V}\sum_\bp \frac{U_0}{2\tilde\epsilon(\bp)}\right]+E_\text{reg}.
$$

In this form, the term we have added and subtracted can be identified as the contribution to the ground state energy in second order perturbation theory. This is divergent at large momentum for a delta function interaction, but this divergence goes away when we consider a finite range potential (we won't show this, but it's not too hard). Assuming that this contribution is finite because the interaction potential has a small (relative to $\xi$) but finite range, we can then write

$$
E_0=\frac{1}{2}nN\frac{4\pi}{m}\left(a_0+a_1\right)+\frac{1}{2}n_0N\frac{4\pi}{m}a_0\frac
{128}{15\sqrt{\pi}}\left(n a_0^3\right)^{1/2},
$$

where

$$
a_0=(m/4\pi)U_0,\qquad a_1=-(m/4\pi)\frac{U_0^2}{V}\sum_\bp \frac{1}{2\tilde\epsilon
(\bp)}.
$$

are the first two terms in the Born approximation for the scattering length $a=a_0+a_1+\cdots$. This strongly suggests that these two terms can really be expressed only in erms of the true scattering length. Notice also that the second term has a weird $U_0^{5/2}$ dependence on the interaction strength, which is presumably connected to perturbation theory breaking down at the third order (see [Problem Set 2]({{< ref "courses/tqm/problem-sets/problem-set-2#perturbation-theory-for-the-bose-gas" >}})).

References
----------

{% bibliography --cited %}
