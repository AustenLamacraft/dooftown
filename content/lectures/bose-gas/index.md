---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: github
scripts: []

---

# Bose Gas

- Noninteracting bosons form a Bose–Einstein condensate (BEC)
- What do interactions do? 
- BEC closely related to __superfluidity__

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


---

## Gross--Pitaevskii Approximation

- Variational appraoch to Bose gas (c.f. Hartree–Fock)

- Put all particles in same single particle state!

$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
\label{bose_GPW}
$$

- State with macroscopic number of particles in a single particle state is a __Bose condensate__

---


- For noninteracting Hamiltonian

$$
H = \sum\left[-\frac{\nabla_i^2}{2m} + V(\br_i)\right],
$$

- Ground state is exactly
`$$
\Psi(\br_1,\ldots \br_N) = \prod_{j=1}^N \varphi_0(\br_i)= \frac{1}{\sqrt{N!}}\left(\adop(\varphi_0)\right)^N\ket{\text{VAC}}.
$$`
with $\varphi_0(\br)$ the ground state of single particle Hamiltonian

---

- Add interaction

`$$
\begin{align}
H_\text{int.} &= \sum_{j<k} U(\br_j-\br_k) \\
&= \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1).
\end{align}
$$`

- Ground state is more complicated, but can use BEC form with $\varphi_0(\br)$ as a variational function

- Optimal $\varphi_0(\br)$ obeys __Gross--Pitaevskii equation__

---

### Gross--Pitaevskii Equation

- Take short-ranged interactions for simplicity

$$
U(\br-\br') = U_0\delta(\br-\br')
$$

- For variational calculation we need

$$
\langle E \rangle = \frac{\braket{\Psi}{H}{\Psi}}{\inner{\Psi}{\Psi}}
$$

- Minimize $\braket{\Psi}{H}{\Psi}$ and fix norm. using Lagrange multiplier

`$$
\begin{align}
\braket{\Psi}{H}{\Psi}=N \int d\br \left[\frac{1}{2m}|\nabla\varphi_0|^2+V(\br)|\varphi_0(\br)|^2
\right]\\
+\frac{1}{2}N(N-1)U_0\int d\br |\varphi_0(\br)|^4.
\label{bose_energy}
\end{align}
$$`

---

- Neglect difference between $N$ and $N+1$
`$$
\begin{align}
\braket{\Psi}{H}{\Psi}=N \int d\br \left[\frac{1}{2m}|\nabla\varphi_0|^2+V(\br)|\varphi_0(\br)|^2
\right]\\
+\frac{1}{2}N^2 U_0\int d\br |\varphi_0(\br)|^4
\end{align}
$$`

- Extremize the functional

$$
\braket{\Psi}{H}{\Psi} - \mu N \int d\br |\varphi_{0}(\br)|^{2}.
$$

- Calculus of variations yields

$$
	\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+NU_0|\varphi_0(\br)|^2\right]\varphi_0(\br)=0.
  \label{bose_static_PreGPEqn}
$$

---

- Define $\varphi(\br)\equiv\sqrt{N}\varphi_{0}(\br)$

- $\varphi(\br)$ is __condensate wavefunction__ or __order parameter__. Obeys __Gross--Pitaevskii equation__

$$
\left[-\frac{1}{2m}\nabla^2-\mu+V(\br)+U_0|\varphi(\br)|^2\right]\varphi(\br)=0.
$$

- Fix Lagrange multiplier $\mu$ by $\int d\br\,\abs{\varphi(\br)}^{2}=N$

- $\braket{\Psi}{H}{\Psi}- \mu \int d\br \abs{\varphi(\br)}^{2}=\braket{\Psi}{H-\mu \mathsf{N}}{\Psi}$ was extremized under general variations, including change in $N$
`$$
	\label{bose_static_GPmu}
	\mu=\frac{\partial\braket{\Psi}{H}{\Psi}}{\partial N},
$$`
$\mu$ is identified with the chemical potential.

---

### Healing length

- 1D, no potential 

$$
\left[-\frac{1}{2m}\partial_x^2-\mu+U_0|\varphi|^2\right]\varphi(x)=0.
$$

- Dimensionless form $\varphi(\br)=\sqrt{n}\phi(\br/\xi)$ for $\mu=U_0n$

$$
\left[-\frac{1}{2m \xi^2}\phi''+\mu (|\phi|^2-1)\right]\phi(x)=0.
$$


- If we set $\xi\equiv \frac{1}{\sqrt{2m \mu}}=\frac{1}{\sqrt{2m n U_0}}$ then

$$
\left[-\phi''+|\phi|^2-1\right]\phi(x)=0.
$$

---

- __Healing length__ $\xi$ is scale on which $\varphi(\br)$ disturbed by localized perturbation of scale $\ll \xi$

> Near a wall
>
> $$
>  \varphi(x)=\varphi_{\infty}\tanh \frac{x}{\sqrt{2}\xi}
> $$
>
> where $x$ is distance from wall, and $\varphi_{\infty}=\sqrt{n}$ is fixed by the density far away.

---

### [Condensate in a Can](https://physics.aps.org/articles/v6/s72)

<p align="center">
<img src="assets/can.png" alt="drawing" width="700" class="center"/>
</p>

---

### Some Observables

- Density and current density

`$$
\begin{align}
\rho(\br)&=|\varphi(\br)|^2,\\
\mathbf{j}(\br)&=-\frac{i}{2m}\left[\varphi^{*}(\br)\left(\nabla\varphi(\br)\right)-\left(\nabla\varphi^{*}(\br)\right)\varphi(\br)\right]
\end{align}
$$`

- Useful decomposition into magnitude and phase

$$
	\varphi(\br)=\sqrt{\rho(\br)}e^{i\theta(\br)}.
$$

- Using $\mathbf{j}=\rho \mathbf{v}$ we get __superfluid velocity__

$$
	\mathbf{v}_{s}\equiv\frac{1}{m}\nabla\theta.
  \label{bose_vs}
$$

---

### Example: Vortex

- Expect $\mathbf{v}_{s}=\frac{1}{m}\nabla\theta$ to be _irrotational_
`$$
\nabla\times \mathbf{v}_s = 0,
$$`

- Equivalently to have vanishing _circulation_ around any closed loop

`$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=0
$$`

- But phase of wavefunction can _increase_ by a multiple of $2\pi$ around a closed loop, so in general
`$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{2\pi \ell}{m},\quad \ell\in\mathbb{Z},
$$`
__Onsager--Feynmann quantization condition__. 

---

- Localized configuration with finite circulation is a __vortex__ in fluid dynamics

- In normal fluid there is no reason for the vorticity to be quantized
`$$
\oint \mathbf{v}_s\cdot d\mathbf{l}=\frac{h\ell}{m},\quad \ell\in\mathbb{Z},
$$`
shows that this is a truly _quantum_ phenomenon.

- A non-zero winding of phase requires that $\rho(\br)$ vanishes at a point (in 2D) or on a line (in 3D)

---

- Look for 2D solutions where phase winds $\ell$ times around origin

$$
\varphi(r,\theta)\xrightarrow{r\to\infty} \sqrt{n} e^{i\ell\theta}.
\label{bose_vortex}
$$

- Paremeterize $\varphi(r,\theta) = \sqrt{n} f(r/\xi)e^{i\ell\theta}$ to give an equation in $s\equiv r/\xi$ (set $\mu=U_0 n$ as before).

$$
-f'' -\frac{f'}{s} + \frac{\ell^2 f}{s^2} - f +f^3 =0.
$$

> Without finding the solution explicitly, show that $f(s)\sim s^\ell$ for small $s$, and $f(s\to\infty) \to 1$.

---

- Region of suppressed density size $\xi$, is  __vortex core__

- In three dimensions, vortex core is a line

- Find energy of vortex by substituting solution back into energy

`$$
\begin{align}
\braket{\Psi}{H}{\Psi}=\int d\br \left[\frac{1}{2m}|\nabla\varphi|^2+V(\br)|\varphi(\br)|^2
\right]+\frac{1}{2}U_0\int d\br |\varphi(\br)|^4.
\end{align}
$$`

- Excess energy (relative to uniform state of density $n$)

$$
\Delta E = \int d\br \left[\frac{n^2}{2m\xi^2}(f')^2+\frac{U}{2}n^2 \left(f^2-1\right)^2\right] + \frac{n}{2m}\int d\br\, f^2(\nabla\theta)^2
$$

---

$$
\Delta E = \int d\br \left[\frac{n^2}{2m\xi^2}(f')^2+\frac{U}{2}n^2 \left(f^2-1\right)^2\right] + \frac{n}{2m}\int d\br\, f^2(\nabla\theta)^2
$$

- First integral is finite: due to density $\neq$ bulk value

- Second is KE contribution from winding of vortex

$$
\nabla \theta = \frac{\ell}{r}\hat{\mathbf{e}}_\theta,
$$

- This contribution to the energy is _logarithmically divergent_.

$$
\Delta E = \text{const.} + \frac{\pi n \ell^2}{m}\log\left(\frac{L}{\xi}\right).
$$

---

- Far-reaching analogy between superfluid velocity fields of vortices and magnetostatics of current-carrying wires,

Vortices | Magnetostatics
--- | ---
Vortex cores | Wires
Superfluid velocity $\mathbf{v}_s$ | Magnetic field, $\mathbf{B}$
Kinetic Energy | Magnetostatic Energy

- Vortices with $\abs{\ell}>1$ generally unstable: break into multiple vortices of winding $\ell=\pm 1$

---

- Like vortices repel each other, and can form spectacular __vortex lattices__, akin to crystals.


<p align="center">
<img src="assets/3dLattices.jpg" alt="drawing" width="500" class="center"/>
</p>

-  Vortices are one manifestation of __superfluidity__

---

## Bogoliubov Theory

- How can we improve Gross--Pitaevskii approximation? 

- What about __excited states__?

- From now on... uniform condensate with no $V(\br)=0$

  
---

- As usual work in a plane wave basis, where Hamiltonian is
`$$
H =\sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk + \overbrace{\frac{U_0}{2V}\sum_{\bk_1+\bk_2=\bk_3+\bk_4} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}}^{\equiv H_\text{int}},
$$`
with $\epsilon(\bk)=\bk^2/2m$, and $V$ the volume

- GP approximation to ground state is $\ket{\Psi_\text{GP}} = \frac{1}{\sqrt{N!}}\left(\adop_0\right)^N\ket{\text{VAC}}$

- Act with $H_\text{int}$: only terms that contribute have $\bk_3=\bk_4=0$

$$
H_\text{int}\ket{\Psi_\text{GP}} =  \frac{U_0}{2V}\sum_{\bk} \adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0}\ket{\Psi_\text{GP}}.
$$

- For a better wavefunction, need to add some $(\bk, -\bk)$ pairs!

---

### Bogoliubov Hamiltonian

- When interactions _weak_, expect true ground state close to $\ket{\Psi_\text{GP}}$

- Most particles in zero momentum state, with few $(\bk, -\bk)$ pairs

- Remember that

$$
\aop\ket{N} = \sqrt{N}\ket{N-1},\quad \adop\ket{N} = \sqrt{N+1}\ket{N+1},
\label{bose_aN}
$$

- A term in $H_\text{int}$ with $\aop_0$ or $\adop_0$ is more important than one without. Arrange Hamiltonian by occurrences of $\aop_0$, $\adop_0$

---

`$$
\begin{align}
H_\text{int} = \frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 + \frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right]\\\nonumber
+\frac{U_0}{V}\sum_{\substack{\bk_1=\bk_2+\bk_3\\ \bk_{1,2,3}\neq 0}}\left[\adop_{\bk_3}\adop_{\bk_2}\aop_{\bk_1}\aop_0 +\adop_0\adop_{\bk_1}\aop_{\bk_2}\aop_{\bk_3}\right]+\frac{U_0}{2V}\sum_{\substack{\bk_1+\bk_2=\bk_3+\bk_4\\ \bk_{1,2,3,4}\neq 0}} \adop_{\bk_1}\adop_{\bk_2}\aop_{\bk_3}\aop_{\bk_4}.
\end{align}
$$`

- Gross--Pitaevskii approximation corresponds to the first term

- We now keep second term, and neglect third and fourth

`$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right].
\label{bose_Hpair}
\end{align}
$$`

---

`$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}\adop_0\adop_0\aop_0\aop_0 \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+4\adop_\bk\adop_0\aop_0\aop_\bk\right].
\end{align}
$$`

- Rewrite second term using
`$$
\adop_0\aop_0 = N - N',\quad N'\equiv \sum_{\bk\neq 0} N_\bk
$$`
so that $\adop_0\adop_0\aop_0\aop_0 =  N(N-1) - 2N'N_0+O(N_0^0	)$

`$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+2\adop_\bk\adop_0\aop_0\aop_\bk\right].
\label{bose_Hpair2}
\end{align}
$$`

---

`$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0}{2V}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk}\aop_{0}\aop_{0} + \adop_{0}\adop_{0}\aop_{\bk}\aop_{-\bk}+2\adop_\bk\adop_0\aop_0\aop_\bk\right].
\end{align}
$$`

> Weird trick alert!
> __Replace__  $\adop_0$, $\aop_0$ with $\sqrt{N}$, giving quadratic Hamiltonian (that we can solve)

- Resulting Hamiltonian no longer conserves particle number

---

<p align="center">
<img src="assets/wut.png" alt="drawing" width="500" class="center"/>
</p>

---

 - Let's see why this is a good approximation.

- Consider action of Hamiltonian on product state of form $\ket{\Psi'}\otimes\ket{N_0}_0$

`$$
\adop_\bk\aop_0\ket{\Psi'}\otimes\ket{N_0}_0 = \left(\adop_\bk \ket{\Psi'}\right)\otimes \aop_0\ket{N_0}_0 = \left(\adop_\bk \ket{\Psi'}\right)\otimes \sqrt{N_0}\ket{N_0-1}_0.
$$`
$$
\aop_\bk\adop_0\ket{\Psi'}\otimes\ket{N_0}_0 = \left(\aop_\bk \ket{\Psi'}\right)\otimes \adop_0\ket{N_0}_0 = \left(\aop_\bk \ket{\Psi'}\right)\otimes \sqrt{N_0+1}\ket{N_0+1}_0.
$$

- Ignore the difference between $N_0$ and $N_0+1$

- If $N_0$ doesn't fluctuate much __matrix elements__ of $H_\text{pair}$ are approximately unchanged when replace operator with numbers

---

- Result is __Bogoliubov Hamiltonian__
`$$
\begin{align}
H_\text{pair} &= \sum_\bk \epsilon(\bk)\adop_\bk\aop_\bk  +\frac{U_0}{2V}N(N-1) \nonumber\\ &\quad+\frac{U_0n_0}{2}\sum_{\bk\neq0}\left[\adop_{\bk}\adop_{-\bk} + \aop_{\bk}\aop_{-\bk}+2\adop_\bk\aop_\bk\right].
\label{bose_Hpair3}
\end{align}
$$`
$n_0 = N_0/V$ is density of particles in zero momentum state

- Hamiltonian diagonalized by __Bogoliubov transformation__

`$$
\bop_\bp=\aop_\bp\cosh\kappa_\bp+\adop_{-\bp}\sinh\kappa_\bp\nonumber\\
\tanh2\kappa_\bp=\frac{n_0 U_0}{\epsilon(\bp)+n_0 U_0}.
$$`

- $\kappa_\bp$ chosen so there are no 'anomalous' $\bdop_\bp\bdop_{-\bp}$ or $\bop_\bp\bop_{-\bp}$ terms left

---

$$
H=E_0+\sum_{\bp\neq 0}\omega(\bp)\bdop_\bp
\bop_\bp.
$$

- $\omega(\bp)$ is the Bogoliubov dispersion relation

$$
\omega(\bp) = \sqrt{\epsilon(\bp)\left(\epsilon(\bp)+2U_0n_0\right)},
$$

- Ground state energy is

$$
E_0=\frac{1}{2}nU_0  N+\sum_{\bp\neq 0}\frac{1}{2}\left[\omega(\bp)-\epsilon(\bp)-n_0U_0\right].
$$

---

$$
E_0=\frac{1}{2}nU_0  N+\sum_{\bp\neq 0}\frac{1}{2}\left[\omega(\bp)-\epsilon(\bp)-n_0U_0\right].
$$

- Annoyingly, this integral is divergent at high momenta because

$$
\omega(\bp)\underset{|\bp| \to \infty}{\longrightarrow} \epsilon(\bp) + n_0 U_0 -\frac{(n_0 U_0)^2}{2\epsilon(\bp)}
$$

---

- We can cure the problem by writing

`$$
\begin{align}
E_0&=\frac{1}{2}nU_0  N\left[1-\frac{1}{V}\sum_\bp \frac{U_0}{2\epsilon(\bp)}\right]\\
&+\sum_{\bp\neq 0}\frac{1}
{2}\left[\omega(\bp)-\epsilon(\bp)-n_0U_0+ \frac{(n_0U_0)^2}{2\epsilon(\bp)}\right].
\end{align}
$$`

- Term added and subtracted is next order in Born
approximation for scattering length $a=a_0+a_1+\cdots$

---

$$
E_0=\frac{1}{2}nN\frac{4\pi}{m}\left(a_0+a_1\right)+\frac{1}{2}n_0N\frac{4\pi}{m}a_0\frac
{128}{15\sqrt{\pi}}\left(n a_0^3\right)^{1/2}.
$$

- Where

$$
a_0=(m/4\pi)U_0,\qquad a_1=-(m/4\pi)\frac{U_0^2}{V}\sum_\bp \frac{1}{2\epsilon
(\bp)}.
$$

---

### The Ground State

- So far, ground state defined by condition that it is a vacuum of Bogoliubov excitations

$$
\bop_\bk\ket{0}=\left(\cosh\kappa_\bk \aop_\bk+\sinh\kappa_\bk \adop_{-\bk}\right)\ket{0}=0.
$$

- A state (unnormalized) that satisfies this condition is

$$
\ket{0}=\prod_{\bk\neq 0} \exp\left(-\frac{1}{2}\tanh\kappa_\bk\adop_{\bk}\adop_{-\bk}\right)\ket{\Psi_\text{GP}}
\label{bose_BogWave}
$$

> Show this. If you've seen coherent states before, remember that the state $e^{\alpha \adop}\ket{\text{VAC}}$ is an eigenstate of $\aop$ with eigenvalue $\alpha$.

---

- Recall that Fourier components of density operator are

$$
\rho_\bq = \sum_\bk \adop_{\bk-\bq}\aop_\bk.
$$

- Most important terms: $\adop_{\bk-\bq}$ or $\aop_\bk$ acts on the condensate

$$
\rho_\bq \sim \sqrt{N}\left(\adop_{-\bq} + \aop_{\bq}\right) = \sqrt{N}e^{-\kappa_\bq} \left(\bdop_{-\bq} + \bop_{\bq}\right),
$$

$$
e^{-\kappa_\bq} = \sqrt{\frac{\epsilon(\bq)}{\omega(\bq)}}.
$$

---

- Density fluctuations in ground state
$$
\braket{0}{\rho_{-\bq}\rho_{\bq}}{0} = N\frac{\epsilon(\bq)}{\omega(\bq)}\xrightarrow{\bq\to 0} \frac{N\abs{\bq}}{2mc}.
$$
(Used low momentum form of Bogoliubov dispersion
$$
\omega(\bq)\xrightarrow{\bq\to 0} c\abs{\bq}
$$
where $c = \sqrt{\frac{n_0U_0}{m}}$ is the speed of sound) 

- c.f Gross--Pitaevskii ground state (Poissonian fluctuations)
$$
\braket{0}{\rho_{-\bq}\rho_{\bq}}{0} = N.
$$


---

### Quantum Depletion

- Finite fraction of particles have $\bp\neq 0$. Let's find $\langle N_\bp \rangle$

- $N_\bp=\adop_{\bp}\aop_{\bp}$ in terms of Bogoliubov quasiparticles

$$
	\adop_{\bp}\aop_{\bp}=(\bdop_\bp\cosh\kappa_{\bp}-\bop_{-\bp}\sinh\kappa_{\bp})(\bop_\bp\cosh\kappa_{\bp}-\bdop_{-\bp}\sinh\kappa_{\bp}),
$$

- Then evaluate expectation

$$
\langle N_\bp\rangle=\langle \adop_{\bp}\aop_{\bp}\rangle = \sinh^2\kappa_{p}\xrightarrow{ \abs{\bp}\ll \xi^{-1}}\frac{mc_s}{2\abs{\bp}}.
$$

- Radial density distribution $4\pi p^2 N_\bp$ peaked around $\xi^{-1}$

---

- Fraction of atoms _not_ in the condensate
$$
\frac{1}{N}\sum_{\bp\neq 0} \langle N_\bp\rangle=\frac{8}{3\sqrt{\pi}}\sqrt{n a^3},
$$
Born approximation for scattering length $a=\frac{mU_0}{4\pi}$

- Typical experimental conditions in experiments on ultracold atoms: depletion does not much exceed $0.01$, which justifies GP approximation

- Liquid He$^{4}$ can be described as an interacting Bose condensate, but the depletion is much larger. Bogoliubov not accurate here

- Applying a lattice can lead to total depletion and a __quantum phase transition__ out of superfluid state 
