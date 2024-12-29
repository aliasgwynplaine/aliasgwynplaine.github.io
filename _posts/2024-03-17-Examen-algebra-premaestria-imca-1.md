---
layout:     post
title:      Álgebra lineal - pre-maestría IMCA 2024 | parte 1
date:       2024-03-17 12:12:09 -0500
categories: blog matemática uni es imca
author:     gwynplaine
---

Esta es la primera parte de un solucionario del examen de álgebra lineal del IMCA. 
Consta de las soluciones que reuní de otros participantes, recomendaciones de amigos, 
y las observaciones de los evaluadores. Para ver el solucionario del examen de 
análisis real, puedes hacer clic en [estos]({% post_url 2024-03-10-Examen-analisis-premaestria-imca-1 %}) 
[enlaces]({% post_url 2024-03-16-Examen-analisis-premaestria-imca-2 %}).

## Pregunta 1
### Enunciado
Sea $V$ un espacio vectorial de dimensión finita. Diremos que dos bases $B$ y $B'$ de $V$ 
son vecinas si difieren en un elemento. Por ejemplo las siguientes parejas de bases de 
$\mathbb{R}^3$ son vecinas

+ $B = \\{(1,0,0),(0,1,0),(0,0,1)\\}$ y $B' = \\{(1,0,0),(0,1,0),(1,1,1)\\}$
+ $B = \\{(1,0,0),(2,1,3),(1,0,1)\\}$ y $B' = \\{(1,0,0),(0,100,5),(1,0,1)\\}$
+ $B = \\{(2,1,4),(0,1,9),(-\pi,0,0)\\}$ y $B' = \\{(2,1,4),(-\pi,0,0),(0,0,1)\\}$

Sea $V$ un espacio vectorial de dimensión $n$ y dos bases de $V$, $B$ y $B'$. Demuestre 
que existen bases $B_0, B_1, ... , B_n$ de modo que

i) $B_0=B$, y $B_n=B'$, \\
ii) $B_i$ y $B_{i+1}$ son vecinas, para todo $i = 0, 1, ..., n-1$.

### Solución
Observe que, si $Z=\\{u_1,...,u_n\\}$ una base de $V$, notemos lo siguiente:

Sea $v\in V$, entonces existen (únicos) $\alpha_i\in\mathbb{R}$ tales que:
$$
v = \sum_{i=1}^n {\alpha_i u_i}.
$$
Veamos que el conjunto $\\{v, u_2,...,u_n\\}$,  es una base de $V$ cuando $\alpha_1 \neq 0$:

Hagamos 
$$
\begin{aligned}
\beta_1 v + \beta_2 u_2 +...+ \beta_n u_n, \beta_i\in\mathbb{R}, i = \\{1,...,n\\} \\\\\
\Rightarrow \beta_1 \left(\sum_{i=1}^n {\alpha_i u_i}\right) + \beta_2 u_2 +...+ \beta_n u_n, \beta_i\in\mathbb{R}, i = \\{1,...,n\\}\\\\\
\Rightarrow \alpha_1\beta_1 u_1 + (\beta_1 \alpha_2 + \beta_2) u_2 +... + (\beta_1\alpha_n + \beta_n)u_n = 0
\end{aligned}
$$
Como $u_1,...,u_n$ son l.i., entonces tenemos:
$$
\begin{aligned}
\alpha_1\beta_1 &= 0\\\\\
\beta_1\alpha_1 &= -\beta_2\\\\\
&\vdots\\\\\
\beta_1\alpha_n &= -\beta_n
\end{aligned}
$$
Para que $\\{v, u_2, ..., u_n\\}$ sea l.i., basta que $\alpha_1 \neq 0$. Es decir, no es necesario 
$\alpha_i = 0$ para todo $i\in\\{1,...,2\\}$; únicamente $\alpha_1$.

Tomando eso en cuenta, podemos afirmar que $Z_1 =\\{\sum_{i=1}^n {\gamma_i u_i}, u_2,...,u_n\\}$, 
con $\gamma_i\in\mathbb{R}-\\{0\\}, i=\\{1,...,n\\}$ es base vecina de $Z$.

Si $B = B'$, basta reemplazar $v_i$ con $\sum_{j=1}^n {v_j}$ para todo $i=1,...,n$.

Si $B\neq B'$: como $B$ es base, entonces $\forall w_i\in B'$ existen $\alpha_1,...,alpha_n\in\mathbb{R}$ 
tales que $\sum_{j=1}^n \alpha_{ij} v_j = w_i$. Ahora, debe existir un $i\in\\{1,..,n\\}$ que cumpla que 
$\alpha_{i1}\neq 0$. Luego, tomamos ese $w_i$ y hacemos $B_1=\\{w_i,v_2,...,v_n\\}$. Llamamos a ese 
$w_i=u_1$, entonces $B_1=\\{u_1,v_2,...,v_n\\}$ es base vecina de $B_0=B$. Usando el mismo procedimiento 
encontramos $u_2=w_i$ tal que $w_i=\sum_{i=1}^n {\alpha_{ij}v_j}$ con $\alpha_{i2}\neq 0$ y $\alpha{ij}\in\mathbb{R}$, 
$j\in\\{1,...,n\\}-\\{2\\}$. Así, conseguimos $u_2$ y $B_2=\\{u_1,u_2,v_3...,v_n\\}$, que es vecino de $B_1$.

Siguiendo ese razonamiento, $B_{n-1} =\\{u_1,u_2,...,u_{n-1},v_n\\}$ que es vecino de $B_n$ y $B_{n-2}$. 
$B_n$ será, entonces, $\\{u_1,...,u_n\\}$ pero como $w_i$ es $u_j$; de donde $B_n=B'$.

## Pregunta 2
### Enunciado
Sea $V$ un espacio vectorial real de dimensión finita y $T:V\to V$ una transformación lineal 
tal que 
$$
T^{2024} = \pi T.
$$

Demuestre que 
$$
V = \ker(T)\oplus Ima(T).
$$

### Solución
Sabemos que $\ker(T) + Ima(T) = V$.

Sea $v\in\ker(T)\oplus Ima(T)$, como $v\in\ker(T)$, entonces existe $w\in V$ tal que $T(w) = v$. 
Luego, tenemos que 
$$
T^{2023}\circ T(w) = T^{2023}(v) = 0
\Rightarrow \pi T(w) = \pi v = 0
$$
De ahí, $v=0$. Luego, la suma es directa.

<br><br>

Si hay alguna observación respecto a alguna de las soluciones mostradas, estaré encantado 
de saberlo :\)