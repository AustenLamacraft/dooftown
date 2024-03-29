---
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: white
  math_renderer: mathjax3
  reveal_options:
    hash: true
scripts: []

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
\newcommand{\sgn}{\mathrm{sgn}}
\newcommand{\abs}[1]{\lvert{#1}\rvert}
\newcommand{\brN}{\br_1, \ldots, \br_N}
\newcommand{\xN}{x_1, \ldots, x_N}
\newcommand{\zN}{z_1, \ldots, z_N}
$$

# Second Quantization

- Avoid dealing explicitly with $\Psi(\br_1,\ldots,\br_N)$
- Represent $H$ and other operators using occupation numbers
- Synonymous with Quantum Field Theory

---

## Recap: Product States

- Normalized state of $N$ bosons in orthonormal states $\varphi_{\alpha_n}(\br)$ 

`$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N)=\sqrt{\frac{\prod_{\alpha}N_{\alpha}!}{N!}}\sum_P\varphi_{\alpha_{1}}(\mathbf{r}_{P_1})\varphi_{\alpha_{2}}(\mathbf{r}_{P_2})\cdots\varphi_{\alpha_{N}}(\mathbf{r}_{P_N}),
\label{A_OrthoProd}
$$`

- The normalization factor involves __occupation numbers__ $\{N_{\alpha}\}$ giving number of particles in state $\alpha$.

---

- Unnormalized symmetric product state using $\psi_n(\br)$, not necessarily orthonormal

`$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProd}
$$`

- Inner product with another symmetric state formed from wavefunctions $\phi_n(\br)$

`$$
\Phi^{\text{S}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P\phi_1(\mathbf{r}_{P_1})\phi_{2}(\mathbf{r}_{P_2})\cdots\phi_{N}(\mathbf{r}_{P_N}).
$$`

`$$
\bra{\Psi}\Phi\rangle = \sum_P \prod_{n=1}^N\bra{\psi_n}\phi_{P_n}\rangle = \operatorname{perm} \bra{\psi_m}\phi_{n}\rangle,
\label{A_perm}
$$`

- This is the [permanent](https://en.wikipedia.org/wiki/Permanent) of the matrix $\bra{\psi_m}\phi_{n}\rangle$

---

## Goal 

- For SHO 
`$$
\frac{1}{\sqrt{n!}}\left(\adop\right)^n\ket{0}\longleftrightarrow \psi_n(x)
$$`
representation using $\aop$, $\adop$ very useful; never need explicit $\psi_n(x)$

- We want 

$$??\longleftrightarrow \Psi^{\text{S}}(\br_1,\ldots,\br_N)$$

- Must respect inner product

---

## Creation & Annihilation Operators

- We consider states with different numbers of particles

- $\ket{\text{VAC}}$ denotes state with no particles (__the vacuum state__)

- $\adop(\psi)$ creates particle in single particle state $\psi(\br)$

$$
\psi(\br)\longleftrightarrow \adop(\psi)\ket{\text{VAC}}.
\label{A_1part}
$$

- Evidently, $\adop(\psi)$ must be linear in $\psi$

$$
\adop\left(c_1\psi_1+c_2\psi_2\right) = c_1\adop(\psi_1)+c_2\adop(\psi_2).
$$


---

- If $\ket{\Psi}$ has $N$ particle state, $\adop(\psi)\ket{\Psi}$ has $N+1$ particles

- Since this is orthogonal to the vacuum state
`$$
\bra{\text{VAC}} \adop(\psi)\ket{\Psi}=0,
$$`
for any state $\ket{\Psi}$

- Taking the adjoint, this means
`$$
\aop(\psi)\ket{\text{VAC}}=0.
$$`


---

- $N$ particle product state

$$
\Psi^{\text{S}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}}.
\label{A_NPart}
$$

- To be _symmetric_ wavefunction, we must have
`$$
\left[\adop(\psi),\adop(\phi)\right]=0
\label{A_adcommute}
$$`
for any states $\psi(\br)$ and $\phi(\br)$. Taking the adjoint gives

$$
\left[\aop(\psi),\aop(\phi)\right]=0
\label{A_acommute}
$$

---

- Inner product between two one particle states

$$
\bra{\psi}\phi\rangle = \braket{\text{VAC}}{\aop(\psi)\adop(\phi)}{\text{VAC}}.
$$

- We impose
`$$
\left[\aop(\psi),\adop(\phi)\right] = \inner{\psi}{\phi}.
\label{A_ada}
$$`
together with $\aop(\psi)\ket{\text{VAC}}=0$ this gives correct inner product

> Show that this also reproduces the inner product for $N$-particle product states

---


## Choosing a basis

- Orthonormal basis by $\varphi_\alpha(\br)$

$$
\adop(\varphi_\alpha)\equiv \adop_\alpha,\quad \aop(\varphi_\alpha)\equiv \aop_\alpha.
\label{A_CCRBasis}
$$

- Then we have

$$
\begin{align}
\left[\aop_\alpha,\aop_\beta\right]=0,\quad \left[\adop_\alpha,\adop_\beta\right]=0,\quad \left[\aop_\alpha,\adop_\beta\right] = \delta_{\alpha\beta}.
\end{align}
$$

- Same as ladder operators of a set of harmonic oscillators

`$$
\Psi^{\text{S}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}(\br_1,\ldots,\br_N) \longleftrightarrow\ket{\mathbf{N}} \equiv \prod_\alpha \frac{\left(\adop_\alpha\right)^{N_\alpha}}{\sqrt{N_\alpha!}}\ket{\text{VAC}}
$$`

---

- `$\Nop_{\alpha}\equiv \adop_{\alpha}\aop_{\alpha}$` is __number operator__ for state $\alpha$

$$
\label{2nd_quant_NOp}
	\Nop_{\alpha}\ket{\mathbf{N}}=N_{\alpha}\ket{\mathbf{N}}
$$

- Commutation relations tell us

$$
\begin{align}
	\left[\aop_{\alpha},\Nop_{\alpha}\right]=\aop_{\alpha}\qquad
	\left[\adop_{\alpha},\Nop_{\alpha}\right]=-\adop_{\alpha}
  \label{2nd_quant_NaComm}
\end{align}
$$

- I think of the first one as: 

> "count then destroy minus destroy then count"

---

## Change of basis

- Move to different basis $\{\ket{\tilde{\varphi}_{\alpha}}\}$

`$$
	\label{2nd_quant_BasisChange}
	\ket{\tilde{\varphi}_{\alpha}}=\sum_{\beta} \inner{\varphi_{\beta}}{\tilde{\varphi}_{\alpha}}\ket{\varphi_{\beta}}
$$`

- One particle states with wavefunctions $\varphi_{\alpha}(\br)$ are $\adop_{\alpha}\ket{\text{VAC}}$. So,

`$$
\tilde{\aop}_{\alpha}^\dagger\equiv\sum_{\beta} \inner{\varphi_{\beta}}{\tilde{\varphi}_{\alpha}}\adop_{\beta}
$$`

---

- Often we work in position eigenstates $\{\ket{\br}\}$, so $\inner{\varphi_{\beta}}{\br}=\varphi^{*}_{\beta}(\br)$

- Denoting corresponding creation operator as $\pdop(\br)$

`$$
\pdop(\br)\equiv\sum_{\beta}  \varphi^{*}_{\beta}(\br)\adop_{\beta}
$$`

- Conjugate is

$$
	\label{2nd_quant_PsiDef}
	\pop(\br)\equiv\sum_{\beta}  \varphi_{\beta}(\br)\aop_{\beta},
$$

---

- These are __quantum fields__ with commutation relations

`$$
\begin{gather}
	\left[\pop(\br_1),\pdop(\br_2)\right]=\delta(\br_1-\br_2)\nonumber\\
	\left[\pop(\br_1),\pop(\br_2)\right]=\left[\pdop(\br_1),\pdop(\br_2)\right]=0.
	\label{2nd_quant_PositionRelations}
\end{gather}
$$`

> If a state $\ket{\Psi}$ has wavefunction $\Psi(x_1,\ldots, x_N)$, show that the wavefunction of the state $\pop(X)\ket{\Psi}$ is the $N-1$ particle wavefunction
>
>$$
>\sqrt{N}\Psi(X,x_1,\ldots, x_{N-1})
>$$
>
>Hint: Show that is is true for a product state first.

---

- Often use eigenstates of the free particle Hamiltonian $H=\frac{\bp^{2}}{2m}$ 
`$$
\begin{align}
	\label{2nd_quant_FreeParticleStates}
	\ket{\bk}=\frac{\exp(i\bk \cdot \br)}{\sqrt{V}}, \quad \bk=2\pi\left(\frac{n_{x}}{L_{x}},\frac{n_{y}}{L_{y}},\frac{n_{z}}{L_{z}}\right),\quad n_{x,y,z}\text{ integer},
\end{align}
$$`
with $V=L_{x}L_{y}L_{z}$ (periodic b.c.)

- Matrix elements of transformation between to position basis $\{\ket{\br}\}$ are $\bra{\bk}\br\rangle=\exp(-i\bk \cdot \br)/\sqrt{V}$
`$$
	\label{2nd_quant_PositionAnnihilation}
	\pdop(\br)\equiv\frac{1}{\sqrt{V}}\sum_{\bk} \exp(-i\bk\cdot\br)\adop_{\bk},
$$`
and similarly
`$$
	\label{2nd_quant_PositionCreation}
	\pop(\br)\equiv\frac{1}{\sqrt{V}}\sum_{\bk} \exp(i\bk\cdot\br)\aop_{\bk}.
$$`

---

>What is the wavefunction of the two-particle state
>
>$$
>\sum_\bk c_\bk \adop_\bk\adop_{-\bk}\ket{\text{VAC}}?
>$$

---

## Fermions

- Trickier on account of minus signs! Seek a representation of
`$$
\Psi^{\text{A}}(\br_1,\ldots,\br_N) = \frac{1}{\sqrt{N!}}\sum_P (-1)^P\psi_1(\mathbf{r}_{P_1})\psi_{2}(\mathbf{r}_{P_2})\cdots\psi_{N}(\mathbf{r}_{P_N}).
\label{A_NProdAnti}
$$`
Note: overall sign fixed by labelling of states $\psi_j$

- If $\Psi^{\text{A}}(\br_1,\ldots,\br_N) \longleftrightarrow \adop(\psi_1)\cdots \adop(\psi_N)\ket{\text{VAC}}$ we'll need
`$$
\left\{\adop(\psi),\adop(\phi)\right\}=0,
\label{A_adanticommute}
$$`
`$\{A,B\}\equiv AB+BA$` is __anticommutator__. Also
`$$
\left\{\aop(\psi),\aop(\phi)\right\}=0.
\label{A_aanticommute}
$$`

---

- `$\left\{\aop(\psi),\adop(\phi)\right\}=0$` can be deduced from inner product
`$$
\bra{\Psi}\Phi\rangle = \sum_P (-1)^P\prod_{n=1}^N\bra{\psi_n}\phi_{P_n}\rangle = \det \bra{\psi_m}\phi_{n}\rangle,
\label{A_det}
$$`
which works out if

`$$
\left\{\aop(\psi),\adop(\phi)\right\} = \inner{\psi}{\phi}.
\label{A_adaanti}
$$`

> Check this.

- Introducing field operators in position basis as before leads to

`$$
\begin{gather}
	\left\{\pop(\br_1),\pdop(\br_2)\right\}=\delta(\br_1-\br_2)\nonumber\\
	\left\{\pop(\br_1),\pop(\br_2)\right\}=\left\{\pdop(\br_1),\pdop(\br_2)\right\}=0.
	\label{2nd_quant_PositionRelationsAnti}
\end{gather}
$$`

---

## Explicit Form of Operators

> Think about the form that the operators $\aop_\alpha$, $\adop_\alpha$ take in the basis of product states. Start with one state $\varphi_\alpha$. What's the matrix form of $\adop_\alpha$ in terms of states $\ket{N_\alpha}$? Now consider two states. Can you see how the commutation and anticommutation relations can be satisfied?

---

## Single Particle Operators

- Notation: $A$ acts on single particle states; $\hat A$ acts on $N$ particles as
`$$
\hat A = \sum_{j=1}^N A_j,
$$`
- Example: Hamiltonian for noninteracting particles
`$$
\hat H = \sum_{j=1}^N H_j = \sum_{j=1}^N \left[-\frac{\nabla_j^2}{2m}+V(\br_j)\right].
\label{A_H1}
$$`
- Operators of this type are __single particle operators__

- How to represent them using creation and annihilation operators?

---

 - Action of $A$ on states $\ket{\varphi_\alpha}$ written 

$$
A\ket{\varphi_\alpha} = \sum_{\beta} \ket{\varphi_\beta}\braket{\varphi_\beta}{A}{\varphi_\alpha} = \sum_\beta A_{\beta\alpha}\ket{\varphi_\beta}
$$

- Action of $\hat A$ on product state `$\ket{\Psi^{\text{S/A}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}}$` is

`$$
\hat A \ket{\Psi^{\text{S/A}}_{\alpha_{1}\alpha_{2}\cdots\alpha_{N}}} = \sum_\beta \left[A_{\beta\alpha_1}\ket{\Psi^{\text{S/A}}_{\beta\alpha_{2}\cdots\alpha_{N}}} +A_{\beta\alpha_2}\ket{\Psi^{\text{S/A}}_{\alpha_1\beta\cdots\alpha_{N}}}+\cdots A_{\beta\alpha_N}\ket{\Psi^{\text{S/A}}_{\alpha_1\alpha_{2}\cdots\beta}}\right]
\label{A_1OpAct}
$$`

- We'll see same job is done by 
`$$
\begin{equation}
\hat A = \sum_{\alpha\beta}A_{\alpha\beta}\adop_\alpha\aop_\beta
\end{equation}
$$`
acting on state $\ket{\mathbf{N}} \equiv \prod_\alpha \frac{\left(\adop_\alpha\right)^{N_\alpha}}{\sqrt{N_\alpha!}}\ket{\text{VAC}}$


---

- We have
`$$
\begin{equation}
\left[\adop_\alpha\aop_\beta,\adop_\gamma\right]=\adop_\alpha\delta_{\beta\gamma}
\end{equation}
$$`
for bosons _and fermions_

- Commute $\adop_\alpha \aop_\beta$ though each of creation operators in $\ket{\mathbf{N}}$, e.g.

`$$
\begin{align}
	\label{2nd_quant_}
	\mathop{\hat A}\adop_{\beta}\ket{\text{VAC}}&=\left(\left[\mathop{\hat A},\adop_{\beta}\right]+\adop_{\beta}\mathop{\hat A}\right)\ket{\text{VAC}}\nonumber\\
							&=\sum_{\alpha} A_{\alpha \beta} \adop_{\alpha}\ket{\text{VAC}}.
\end{align}
$$`

> Try it for a two particle state!

---

`$$
\begin{equation}
\hat A = \sum_{\alpha\beta}A_{\alpha\beta}\adop_\alpha\aop_\beta
\end{equation}
$$`

- Find matrix element $\braket{\mathbf{N}}{\hat A}{\mathbf{N'}}$ between product states made of orthonormal single particle states

- Vanishes unless `$N_\beta = N'_\beta-1$ and $N_\alpha = N'_\alpha+1$` we have

`$$
\braket{\mathbf{N}}{\hat A}{\mathbf{N'}} = A_{\alpha\beta} \sqrt{N_\alpha N'_\beta}.
\label{A_Aab}
$$`

> This formula is not so easy to work out in the first quantized representation. Try it!

- Same for bosons and fermions

--- 

`$$
\begin{equation}
\hat A = \sum_{\alpha\beta}A_{\alpha\beta}\adop_\alpha\aop_\beta
\end{equation}
$$`

- Like _expectation value_ of $\mathop{A}$ in single particle state $\sum_{\alpha}a_{\alpha}\ket{\varphi_{\alpha}}$

- But `$a_\alpha$` are _operators_ not _numbers_. This is the origin of the name __second quantization__

- Resemblance makes it easy to write down second quantized form


---

### Example 1: noninteracting Hamiltonian

`$$
\hat H = \sum_{j=1}^N H_j = \sum_{j=1}^N \left[-\frac{\nabla_j^2}{2m}+V(\br_j)\right].
$$`

- Second quantized form
$$
	\label{2nd_quant_H2ndQ}
	\mathop{\hat H} \equiv \sum_{\alpha,\beta}\braket{\varphi_{\alpha}}{\mathop{H}}{\varphi_{\beta}} \adop_{\alpha}\aop_{\beta},
$$
$H$ is single particle Hamiltonian $H=-\frac{1}{2m}\nabla_{i}^{2}+V(\mathbf{r_{i}})$

- If basis $\ket{\varphi_{\alpha}}$ is eigenbasis of $H$: $\braket{\varphi_{\alpha}}{\mathop{H}}{\varphi_{\beta}}=E_{\alpha}\delta_{\alpha \beta}$ and

$$
\begin{align}
	\label{2nd_quant_Nrep}
	\mathop{\hat H} \equiv \sum_{\alpha} E_{\alpha} \adop_{\alpha}\aop_{\alpha}=\sum_{\alpha} E_{\alpha} \Nop_{\alpha}.
\end{align}
$$

---

- In the position basis
`$$
\begin{align}
	\mathop{\hat H}&=\int d\br \left[-\frac{1}{2m}\pdop(\br)\nabla^{2}\pop(\br)+V(\br)\pdop(\br)\pop(\br)\right]\nonumber\\
					&=\int d\br \left[\frac{1}{2m}\nabla\pdop(\br)\cdot\nabla\pop(\br)+V(\br)\pdop(\br)\pop(\br)\right],
	\label{2nd_quant_HPos}
\end{align}
$$`
(integration by parts)

- Confirm equality to previous expression using

$$
	\pop(\br)\equiv\sum_{\beta}  \varphi_{\beta}(\br)\aop_{\beta},
$$

---

- Heisenberg equation of motion for $\pop(\br)=e^{i\hat Ht}\pop(\br) e^{-i\hat H t}$ with noninteracting Hamiltonian
`$$
\begin{equation}
	\label{2nd_quant_HeomFree}
	\begin{split}
	i\partial_{t}\pop(\br,t) &= -\left[\mathop{\hat H},\pop(\br,t)\right]\\
	&= -\frac{1}{2m}\nabla^{2}\pop(\br,t)+V(\br)\pop(\br,t),
	\end{split}
\end{equation}
$$`
just the time dependent Schrödinger equation!

--- 

### Example 2: Density

- Single particle operator for density at $\mathbf{x}$ is

$$
	\label{2nd_quant_spDens}
	\rho(\mathbf{x})\equiv\delta(\mathbf{x}-\br).
$$

- Expectation value in single particle state $\varphi(\br)$ is $\rho(\mathbf{x})=\abs{\varphi(\mathbf{x})}^{2}$

- Second quantized form of the operator is then

$$
	\label{2nd_quant_2ndQDens}
	\hat\rho(\mathbf{x})\equiv\pdop(\mathbf{x})\pop(\mathbf{x}).
$$

- __Check:__ integrating over position should give total number of particles

$$
	\label{2nd_quant_DensIntegral}
	\hat N=\int d\mathbf{x}\, \pdop(\mathbf{x})\pop(\mathbf{x})=\sum_{\alpha} \adop_{\alpha}\aop_{a}=\sum_{\alpha}\Nop_{\alpha},
$$

---

- Expectation value of density in product state $\ket{N_{0},N_{1}\ldots}$

$$
	\label{2nd_quant_DensityExp}
	\braket{N_{0},N_{1}\ldots}{ \hat\rho(\br)}{N_{0},N_{1}\ldots} = \sum_{\alpha} N_{\alpha}\left|\varphi_{\alpha}(\br)\right|^{2}.
$$

> Prove using $\pop(\br)\equiv\sum_{\beta}  \varphi_{\beta}(\br)\aop_{\beta}$

- Interpretation: `$\left|\varphi_{\alpha}(\br)\right|^{2}$` is probability to find a particle in state $\alpha$ at position $\br$. Density is weighted by occupation

---

### Example 3: Current operator

$$
	\label{2nd_quant_current}
	\hat{\mathbf{j}}(\br)=-i\frac{1}{2m}\left[\pdop(\br)\left(\nabla\pop(\br)\right)-\left(\nabla\pdop(\br)\right)\pop(\br)\right].
$$

- Often we consider Fourier components of density or current
`$$
\begin{align}
	\label{2nd_quant_FourierComp}
	\hat\rho_{\bq}\equiv\int d\br\, \hat\rho(\br)e^{-i\bq \cdot \br}=\sum_{\bk} \adop_{\bk-\bq/2}\aop_{\bk+\bq/2}\nonumber\\
	\hat{\mathbf{j}}_{\bq}\equiv\int d\br\, \hat{\mathbf{j}}(\br)e^{-i\bq \cdot \br}=\sum_{\bk} \frac{\bk}{m}\adop_{\bk-\bq/2}\aop_{\bk+\bq/2}.
\end{align}
$$`
- $\bq=0$ modes are total particle number and $\frac{1}{m}\times$ total momentum, respectively

---

### Single particle density matrix

- From [Lecture 1]({{< ref "many-body-wavefunctions" >}}) 

$$
	g(\br,\br') \equiv N \int d\br_{2}\cdots d\br_{N}\,\Psi^{*}(\br,\br_{2},\ldots,\br_{N})\Psi(\br',\br_{2},\ldots,\br_{N}).
$$


> Show that this can be written as
>
>$$
>	\label{2nd_quant_SPDensity}
>	g(\br,\br')= \braket{\Psi}{\pdop(\br)\pop(\br')}{\Psi}
>$$

- Similar calculation as for density gives

$$
	\label{2nd_quant_SPFock}
	g(\br,\br') = \sum_{\alpha} N_{\alpha}\varphi_{\alpha}^{*}(\br)\varphi^{}_{\alpha}(\br').
$$

---

- For 3D $N_{\bk}=1$ for $\abs{\bk}<k_{F}$, and $0$ otherwise

$$
\ket{\text{Fermi sea}} = \prod_{|\bk|<k_F} \adop_\bk\ket{\text{VAC}}
$$

>$$
>\begin{align}
>	g(\br,\br')&=\frac{1}{V}\sum_{|\bk|<k_{F}} e^{i\bk\cdot(\br'-\br)}=\int_{|\bk|<k_{F}} \frac{d\bk}{(2\pi)^{3}}\,e^{i\bk\cdot(\br'-\br)}\nonumber\\\\
>	&=\frac{k_{F}^{3}}{2\pi^{2}}\left[\frac{\sin\left(k_{F}|\br'-\br|\right)}{(k_{F}|\br'-\br|)^{3}}-\frac{\cos\left(k_{F}|\br'-\br|\right)}{(k_{F}|\br'-\br|)^{2}}\right].
>\end{align}
>$$
>
>Note that $g(\br,\br)=\frac{k_{F}^{3}}{6\pi^{2}}=n$

- c.f. earlier calculation in 1D using Slater determinant


---

<p align="center">
<img src="assets/FermiDensityMatrixCut.png" alt="drawing" width="600" class="center"/>
</p>

---

## Two Particle Operators

- Acts _pairwise_ on the particles ($B_{jk}=B_{kj}$ for indistinguishable particles.) 
`$$
\hat B = \sum_{j<k} B_{jk}.
$$`

- Action of $\hat B$ on product state `$\ket{\varphi_{\alpha}}_1\ket{\varphi_{\beta}}_2$` in terms of matrix elements
`$$
\begin{align}
B_{\alpha\beta,\gamma\delta} &= \bra{\varphi_\alpha}_1\bra{\varphi_\beta}_2 B_{12} \ket{\varphi_\gamma}_1\ket{\varphi_\delta}_2\\
\hat B &= \frac{1}{2}\sum_{\alpha\beta\gamma\delta} B_{\alpha\beta,\gamma\delta}\adop_\alpha\adop_\beta\aop_\delta\aop_\gamma,\qquad B_{\alpha\beta,\gamma\delta} = B_{\beta\alpha,\delta\gamma}
\end{align}
$$`
(Note order, which is important for fermions!). 

---

`$$
\begin{align}
B_{\alpha\beta,\gamma\delta} &= \bra{\varphi_\alpha}_1\bra{\varphi_\beta}_2 B_{12} \ket{\varphi_\gamma}_1\ket{\varphi_\delta}_2\\
\hat B &= \frac{1}{2}\sum_{\alpha\beta\gamma\delta} B_{\alpha\beta,\gamma\delta}\adop_\alpha\adop_\beta\aop_\delta\aop_\gamma.
\end{align}
$$`

> Check this works on product states ($N=2$ first)

---

- Remember that for one particle operators

$$
\braket{\mathbf{N}}{\hat A}{\mathbf{N'}} = A_{\alpha\beta} \sqrt{N_\alpha N'_\beta}
$$

- For two particle operators 
`$$
\braket{\mathbf{N}}{\hat B}{\mathbf{N'}} =  \left[B_{\alpha\beta,\gamma\delta}\pm B_{\alpha\beta,\delta\gamma}\right] \sqrt{N_\alpha N_\beta N'_\gamma N'_\delta}.
\label{A_Babcd}
$$`
with `$N_{\gamma,\delta} = N'_{\gamma,\delta}-1$` and `$N_{\alpha,\beta} = N'_{\alpha,\beta}+1$`

- For fermions the overall sign depends on convention: best to write states explicitly rather than matrix elements

---

`$$
\braket{\mathbf{N}}{\hat B}{\mathbf{N'}} =  \left[B_{\alpha\beta,\gamma\delta}\pm B_{\alpha\beta,\delta\gamma}\right] \sqrt{N_\alpha N_\beta N'_\gamma N'_\delta}.
$$`

- Strictly we have
`$$
\begin{gather}
N'_\gamma N'_\delta \to N'_\gamma (N'_\gamma-1) && \gamma=\delta\\
N_\alpha N_\beta \to N_\alpha (N_\alpha-1) && \alpha=\beta
\end{gather}
$$`
In thermodynamic limit these terms usually make a vanishing contribution when sums replaced with integrals

- Exceptions: when a finite fraction of particles are in one state (which occurs for Bose—Einstein condensates). In those cases we end up neglecting $N_\alpha-1$ relative to $N_\alpha$, however!

---

### Example: pairwise interaction


$$
\hat H_\text{int.} = \sum_{j<k} U(\br_j-\br_k).
$$

- Expressing in position basis

$$
\hat H_\text{int.} = \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\pdop(\br_1)\pdop(\br_2)\pop(\br_2)\pop(\br_1)
$$

- Remembering that $\rho(\br) = \pdop(\br)\pop(\br)$, this is _almost_
`$$
\hat H_\text{int.} = \frac{1}{2}\int d\br_1 d\br_2\, U(\br_1-\br_2)\rho(\br_1)\rho(\br_2)
\label{A_VNotNormal}
$$`
Operator order prevents a particle from interacting with itself!

> $\hat H_\text{int}$ has zero expectation for 1 particle

---


- Hamiltonian of interacting bosons from [Lecture 1]({{< ref "many-body-wavefunctions" >}})
`$$
H = -\frac{1}{2m}\sum_j \frac{\partial^2}{\partial x_j^2} + \overbrace{c\sum_{j<k}\delta(x_j-x_k)}^{\equiv H_\text{int}}.
\label{many_LL}
$$`
has second quantized form
`$$
H = \int dx \left[\frac{1}{2}\partial_x\pdop(x)\partial_x\pop(x) + \frac{c}{2}\pdop(x)\pdop(x)\pop(x)\pop(x)\right].
$$`
$\pop(x)$, $\pdop(x)$ satisfy the canonical bosonic commutation relations

> __QFT is a language__, but writing something in a new way doesn't (necessarily) make it easier to solve!
