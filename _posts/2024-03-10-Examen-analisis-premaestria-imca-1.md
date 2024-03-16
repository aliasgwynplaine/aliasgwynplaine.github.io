---
layout:     post
title:      Análisis Real - pre-maestría IMCA 2024 | parte 1
date:       2024-03-10 23:27:59 -0500
categories: blog matemática
author:     gwynplaine
---

Esta es la primera parte de un solucionario del examen de análisis real del IMCA. 
Consta de las soluciones que reuní de otros participantes, recomendaciones de amigos, 
y las observaciones de los evaluadores.

## Pregunta 1
### Enunciado
Pruebe que $\mathcal{P}_f(\mathbb{N}) =  \\{ X : X \text{ es un subconjunto finito de } \mathbb{N} \\}$ 
es un conjunto numerable y que $\mathcal{P} =  \\{ X : X \text{ es un subconjunto de } \mathbb{N} \\}$ 
es un conjunto no numerable.

### Solución 1
Para el primer punto:


Sea $X\in\mathcal{P}_f(\mathbb{N})$, entonces $\exists n\in\mathbb{N}: X\subset I_n$; donde 
$I_n = \\{1,...,n\\}$. Luego, $X\in \mathcal{P}(I_n)$. Como $I_n$ es numerable por se finito, 
entonces $\mathcal{P}(I_n)$ es numerable. Así, tendremos que
$$
\mathcal{P}_f(\mathbb{N})\subset \bigcup\_{n\in\mathbb{N}}{\mathcal{P}(I_n)}
$$
Pero sabemos que $\bigcup{\mathcal{P}(I_n)}$ es numerable por ser unión de conjuntos numerables.
Como $\mathcal{P}_f(\mathbb{N})$ es un subconjunto de un conjunto numerable, entonces debe ser numerable.

\\
Para el segundo punto:

Sabemos que no existen funciones $X \mapsto \mathcal{F}(X,\\{0,1\\})$ que sean sobreyectivas (ver 
el teorema de Cantor). Además, existe una biyección entre $\mathcal{P}(X)$ y $\mathcal{F}(X,\\{0,1\\})$. 
Luego, no existe una función sobreyectiva $X \mapsto \mathcal{P}(X)$. En particular, no 
existe una función sobreyectiva $\mathbb{N} \mapsto \mathcal{P}(\mathbb{N})$. Ergo, $\mathcal{P}(\mathbb{N})$ 
no puede ser numerable.

### Solución 2
Esta es una solución alternativa para el primer punto:

Sea $X = \\{ x_1, ..., x_n\\}\subset\mathbb{N}$. Asignemos un número a cada uno de los símbolos 
que usamos para representar a $X$ por extensión:
$$
\begin{aligned}
0 &\rightarrow 0 \\\\\
1 &\rightarrow 1 \\\\\
& \vdots \\\\\
9 &\rightarrow 9 \\\\\
\\{ &\rightarrow A \\\\\
, &\rightarrow B \\\\\
\\{ &\rightarrow C \\\\\
\end{aligned}
$$
donde $A = 10$, $B = 11$, $C = 12$. 

A la función que realiza estas asignaciones, la llamaremos 
$\texttt{char2int}$, pues nos transforma un caracter en un número entero. Nos tomamos este trabajo 
con el objetivo de representar cada conjunto $X$ como un número en base $D = 13$ (o cualquier número 
mayor que $12$, en realidad). Es decir, por ejemplo:
$$
I_9 = \\{1,2,3,4,5,6,7,8,9\\} \to \overline{A1B2Bb3B4B5B6B7B8B9C}_D
$$
Otro ejemplo, sería:
$$
I\_{10} = \\{1,2,3,4,5,6,7,8,9,10\\} \to \overline{A1B2Bb3B4B5B6B7B8B9B10C}_D
$$
Así, para el alfabeto $\Omega = \\{$'0' , '1' $,...,$ '9' , '{' , ',' , '}'$\\}$ planteamos la siguiente función:

$$
\begin{aligned}
\varphi : \Omega^* &\to \mathbb{N}\\\\\
s &\mapsto \sum\_{i = 0}^{\text{len}(s)} {\texttt{char2int}(s[\text{len}(s) - i]) \cdot D^i}
\end{aligned}
$$
donde $D = 13$, y $\Omega^*$ denota el [conjunto de todas las cadenas de longitud finita](https://en.wikipedia.org/wiki/Kleene_star) 
que se pueden formar con $\Omega$.

La función $\varphi$ es una inyección de $\Omega^*$ en $\mathbb{N}$ debido a que la representación 
polinomial de un número natural en una base dada es única.

Claramente, el conjunto de las representaciones como cadena de caracteres de cualquier $X\subset\mathbb{N}$ 
finito es un subconjunto de $\Omega^*$. Luego, ese conjunto es un conjunto contable.

Ahora bien, es posible construir una función inyectiva de $\mathcal{P}_f(\mathbb{N})$ en $\Omega^*$:

$$
\begin{aligned}
\texttt{to_string} : \mathcal{P}_f(\mathbb{N}) &\to \Omega^* \\\\\
X = \\{x_1,...,x_n\\} &\mapsto \texttt{to_string}(X)
\end{aligned}
$$

Así, $\mathcal{P}_f(\mathbb{N})$ es contable.

## Pregunta 2
### Enunciado
Sea $(u_n)_{n\in\mathbb{N}}$ una sucesión de números reales. Indique la verdad o falsedad de los siguientes enunciados, 
justificando su respuesta con una demostración o contraejemplo.

a) Sea $\mathbb{N} = \bigcup\_{k\in\mathbb{N}}\mathbb{N_k}$ una unión disjunta, donde para cada $k\in \mathbb{N}$, se 
tiene que $\mathbb{N}_k$ es un conjunto infinito de $\mathbb{N}$. Si para cada $k\in\mathbb{N}$, la subsucesión 
$(u_n)\_{n\in\mathbb{N}_k}$ converge al valor de $l\in\mathbb{R}$, entonces la sucesión $(u_n)\_{n\in\mathbb{N}}$ a
converge al valor de $l\in\mathbb{R}$.

b) Sea $\mathbb{N} = \bigcup\_{k\in\mathbb{N}}^{p}\mathbb{N_k}$ una unión disjunta, donde para cada $k\in I_p$, se 
tiene que $\mathbb{N}_k$ es un conjunto infinito de $\mathbb{N}$. Si para cada $k\in I_p$, la subsucesión 
$(u_n)\_{n\in\mathbb{N}_k}$ converge al valor de $l\in\mathbb{R}$, entonces la sucesión $(u_n)\_{n\in\mathbb{N}}$ a
converge al valor de $l\in\mathbb{R}$.

c) Si la sucesión $(u^2_n)$ es convergente, entonces $(u_n)$ es convergente.

d) Si la sucesión $(u^3_n)$ es convergente, entonces $(u_n)$ es convergente.

e) Si la sucesión $(u^2_n)$ es convergente al valor $0$, entonces $(u_n)$ es convergente.

### Solución
a) (**falso**) Sean $p_1, p_2, ..., p_n, ...$ la sucesión ordenada de los números primos, definimos 
$\mathbb{N}_{k-1} = \\{p_k^i, i\in\mathbb{N}\\}$ para $k>1$. 
Hacemos $\mathbb{N}_0 = \mathbb{N} - \bigcup\_{k=2}^{\infty}\mathbb{N}_k$ y definimos $(u_n)$ como sigue: 
$$
\text{Para } n\in\mathbb{N}_k, u_n = \left\\{\begin{matrix}
7 &\text{ si } n=\min{\mathbb{N}_k}\\\\\
\frac{1}{n} &\text{ caso contrario}
\end{matrix}\right.
$$
Así, las subsucesiones $(u_n)\_{n\in\mathbb{N}_k}$ convergen a 0, pero $(u_n)\_{n\in\mathbb{N}}$ no 
converge porque tiene dos valores de adherencia: $7$ y $0$. 

b) (**verdadero**) Para cada $k\in I_p$, se tiene que $u_n \to l$
$$
\Rightarrow \forall \varepsilon > 0: \exists n_k\in\mathbb{N}, \forall n\in\mathbb{N}:n>n_k \rightarrow 
|u_n - l| < \varepsilon
$$

Si tomamos $n_0 = \max\_{k\in I_p}\\{n_k\\}$, entonces tendremos que 
$$
\forall \varepsilon > 0: \forall n\in\mathbb{N}:n>n_0 \rightarrow |u_n - l| < \varepsilon
$$

Luego, $u_n \to l$.

c) (**falso**) Basta tomar $u_n=(-1)^n$. $u_n^2 \to 1$ pero $u_n$ no converge.

d) (**verdadero**) $u_n^3 \to l \Rightarrow f(u_n^3)\to f(l)$ cuando $f$ es continua. 
Basta tomar $f(x) = \sqrt[3]{x}$. Luego $u_n \to \sqrt[3]{l}$.

e) (**verdadero**) $u_n^2\to 0$, entonces se cumple que
$$
\forall \varepsilon > 0: \exists n_0\in\mathbb{N},\forall n\in\mathbb{N}:n>n_0 \rightarrow |u_n^2| < \varepsilon
$$

$$
\Rightarrow |u_n| < \sqrt\varepsilon
$$

Luego, $u_n \to 0$.

<br><br>

Si hay alguna observación respecto a alguna de las soluciones mostradas, estaré encantado 
de saberlo :\)

La segunda parte del solucionario se encuentra en el siguiente [enlace]({% post_url 2024-03-16-Examen-analisis-premaestria-imca-2 %}).