---
layout:     post
title:      Análisis Real - pre-maestría IMCA 2024 | parte 2
date:       2024-03-16 18:12:59 -0500
categories: blog matemática uni es
author:     gwynplaine
---

Esta es la segunda parte del solucionario del examen del curso de análisis real de la 
pre-maestría del IMCA, 2024. Para ver la primara parte, puedes hacer clic en el siguiente 
[enlace]({% post_url 2024-03-10-Examen-analisis-premaestria-imca-1 %}). 

## Pregunta 3
### Enunciado
Sea $f,g : [0,1] \rightarrow [0,1]$ dos funciones continuas tales que $f\circ g = g\circ f$. Muestre que 
existe $x\in [0,1]$ tal que $f(x)=g(x)$

### Solución
Observemos que, como $f$ y $g$ son continuas, entonces existen $x,y\in [0,1]$ tales que $f(x)=x$ y $g(y)=y$ 


Sea $F = \{x\in[0,1] | f(x)=x\} $, afirmamos que $F$ es cerrado.

Sea $(x_n)\subset F$ una sucesión convergente con $x_n \to x\in [0,1]$, entonces $f(x_n) \to f(x)$. Pero 
tenemos que $f(x_n) = x_n, \forall n\in\mathbb{N}$, por ser estos puntos fijos de $f$.
$$
\Rightarrow f(x_n) = x_n \to x = f(x)
$$
Luego, toda sucesión $x_n$ de puntos en $F$ converge a un punto de $F$. Ergo, $F$ es cerrado; y como $F\subset[0,1]$, 
$F$ es acotado. De ahí, $F$ es compacto.

Sean $a=\inf{F}$ y $b=\sup{F}$, $a,b\in F$ por ser $F$ compacto. Además, la restricción de $g|\_{[a,b]}$ es continua 
y se cumple que $g(a) \geq a$ y $g(b) \leq b$, debido a que $g(a), g(b)\in F$.

Definimos la función 
$$
\begin{aligned}
h : [a,b] &\to \mathbb{R}\\\\\
x &\mapsto h(x) = f(x) - g(x)
\end{aligned}
$$

Observe que $h(a) = f(a) - g(a) = a - g(a) \leq 0$ y $h(b) = f(b) - g(b) = b - g(b) \geq 0$. Como $h$ es continua 
por ser diferencia de funciones continuas, entonces existe $z\in[a,b], h(z) = 0$. Luego $f(z) = g(z)$.

## Pregunta 4
### Enunciado (Principio de condensación de Cauchy)
Sea $b>1$ entero, y sea $(a_n)_{n\in\mathbb{N}}$ una sucesión decreciente de números reales no negativos. 
Pruebe que la serie $\sum\_{n=1}^{\infty}{a_n}$ es convergente si, y solo si, la serie $\sum\_{n=1}^{\infty}{b^n a\_{b^n}}$ 
es convergente.

### Solución

$(\Rightarrow)$ veamos. Como $(a_n)$ es decreciente, tendremos:
$$
\begin{aligned}
(b-1)\cdot a_b &\leq a_1+a_2+...+a_b \\\\\
(b^2-b)\cdot a_{b^2} &\leq a_{b+1}+a_{b+2}...+a_{b^2}\\\\\
(b^3-b^2)\cdot a_{b^3} &\leq a_{b^2+1}+a_{b^2+2}...+a_{b^3}\\\\\
(b^4-b^3)\cdot a_{b^4} &\leq a_{b^3+1}+a_{b^3+2}...+a_{b^4}\\\\\
&\vdots\\\\\
(b^n-b^{n-1})\cdot a_{b^n} &\leq a_{b^{n-1}+1}+a_{b^{n-1}+2}...+a_{b^n}\\\\\
\end{aligned}
$$
lo que es equivalente a 
$$
\begin{aligned}
(b-1)\cdot a_b &\leq a_1+a_2+...+a_b \\\\\
(b-1)\cdot b\cdot a_{b^2} &\leq a_{b+1}+a_{b+2}...+a_{b^2}\\\\\
(b-1)\cdot b^2\cdot a_{b^3} &\leq a_{b^2+1}+a_{b^2+2}...+a_{b^3}\\\\\
(b-1)\cdot b^3\cdot a_{b^4} &\leq a_{b^3+1}+a_{b^3+2}...+a_{b^4}\\\\\
&\vdots\\\\\
(b-1)\cdot b^{n-1}\cdot a_{b^n} &\leq a_{b^{n-1}+1}+a_{b^{n-1}+2}...+a_{b^n}\\\\\
\end{aligned}
$$

Sumando, obtendremos:
$$
\begin{aligned}
(b-1)\cdot\sum_{k=1}^n {b^{k-1}\cdot a_{b^k}} &\leq \sum_{k=1}^n {a_k} \\\\\
\Rightarrow \sum_{k=1}^n {b^{k-1}\cdot a_{b^k}} &\leq \frac{1}{b-1}\cdot\sum_{k=1}^n {a_k}\\\\\
\Rightarrow \sum_{k=1}^n {b^{k}\cdot a_{b^k}} &\leq \frac{b}{b-1}\cdot\sum_{k=1}^n {a_k}
\end{aligned}
$$
Como $\sum\_{k=1}^{\infty}{a_k}$ es convergente, entonces $\sum_{k=1}^{\infty} {b^{k}\cdot a_{b^k}}$ está 
acotada superiormente. Como los términos son no negativos, entonces $(\sum {b^{k}\cdot a_{b^k}})_{k\in\mathbb{N}}$ 
es una sucesión creciente, luego es convergente.


$(\Leftarrow)$ de manera similar, vemos que:
$$
\begin{aligned}
a_1+a_2+...+a_b^2 &\leq a_b+...+a_b = (b^2-b)\cdot a_b \\\\\
a_{b^2+1}+a_{b^2+2}...+a_{b^3} &\leq a_b^2+...+a_b^2 = (b^3-b^2)\cdot a_{b^3}\\\\\
&\vdots\\\\\
a_{b^{n-1}+1}+a_{b^{n-1}+2}...+a_{b^n} &\leq a_{b^{n-1}}+...+a_{b^{n-1}}= (b^n-b^{n-1})\cdot a_{b^{n-1}}\\\\\
\end{aligned}
$$

Sumando, obtendremos:
$$
\begin{aligned}
\sum_{k=b+1}^{b^n} {a_k} &\leq \sum_{k=2}^n {(b^k-b^{k-1})\cdot a_{b^k}} = (b-1)\cdot\sum_{k=1}^n {b^{k-1}\cdot a_{b^k}}\\\\\
\Rightarrow \sum_{k=b+1}^{b^n} {a_k} &\leq \frac{b-1}{b}\cdot\sum_{k=1}^n {b^{k}\cdot a_{b^k}}\\\\\
\end{aligned}
$$

Usando el mismo razonamiento que antes, se tiene que $(\sum {a_k})$ converge.



## Pregunta 5
### Enunciado
Considere la sucesión de funciones $(f_n)_{n\in\mathbb{N}}$ dada por 
$$
f_n(x) = \left\\{\begin{matrix}
n &\text{ si } n\in(0,\frac{1}{n})\\\\\
0 &\text{ caso contrario}
\end{matrix}\right.
$$

(1) Muestra que $(f_n)_{n\in\mathbb{N}}$ converge puntualmente a la función idénticamente nula en $[0,1]$.

(2) Muestre que $$\lim\_{n\to +\infty}{\int\_0^1 {f\_n(x)\mathrm{d}x}}.$$

(3) Determine (con justificación) si la sucesión $(f_n)\_{n\in\mathbb{N}}$ es uniformemente convergente.

### Solución
#### 1.
Sea $x\in[0,1]$. 

Si $x\in\\{0,1\\}\Rightarrow f_n(x) = 0, \forall n\in\mathbb{N}$

Si $x\in\(0,1)\Rightarrow \exists n_0\in\mathbb{N}: \frac{1}{n_0} < x$, por el principio arquimediano. 
Luego, $\forall n\in\mathbb{N}: n > n_0: f_n(x)=0$, ya que $\frac{1}{n} <\frac{1}{n_0} < x$. 
Así, tenemos que $f_n\to 0, \forall x\in[0,1]$. Es decir, $(f_n)_{n\in\mathbb{N}}$ converge a 0 de 
de manera puntual.

#### 2.
Veamos 
$$
\lim\_{n\to +\infty}{\int\_0^1 {f\_n(x)\mathrm{d}x}} = 
\lim\_{n\to +\infty}{\left\\{\int\_0^{\frac{1}{n}} {f\_n(x)\mathrm{d}x}+ 
\int_{\frac{1}{n}}^1 {f\_n(x)\mathrm{d}x}\right\\} }
$$

Pero $\int_{\frac{1}{n}}^1 {f\_n(x)\mathrm{d}x} = 0$
$$
\Rightarrow \lim\_{n\to +\infty}{\left\\{\int\_0^{\frac{1}{n}} {f\_n(x)\mathrm{d}x}\right\\}}=
\lim\_{n\to +\infty}{\left\\{\int\_0^{\frac{1}{n}} {n\cdot\mathrm{d}x}\right\\}}
$$
$$
\Rightarrow\lim\_{n\to +\infty}{\left\\{n\cdot\left(\frac{1}{n}-0\right)\right\\}}=
\lim\_{n\to +\infty}{\left\\{\frac{n}{n}\right\\}} = 1 \neq 0
$$

#### 3.
Sabemos que si $(f_n)$ es uniformemente convergente, con $f_n\to f$, entonces se debe cumplir 
que $\lim{\int_a^b{f_n}} = \int_a^b{\lim f_n} = \int_a^b f$. Usando el contrareciproco, vemos 
que $\lim_{n\to\infty}{\int_0^1 {f_n} = 1\neq 0 = \int_0^1{\lim f_n}}$. Luego, $f_n$ no es 
uniformemente convergente.

<br><br>
Eso es todo. Si hay alguna observación respecto a alguna de las soluciones mostradas, estaré encantado 
de saberlo :\)