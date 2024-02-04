# Irrationality of Square Roots of Prime Numbers

We all remember from our fundamental mathematics classes the emphasis on the irrationality of $\sqrt{2}$ using a simple proof by contradiction.

Well, it turns out that we can extend this theorem more broadly to the square roots of prime numbers with the same kind of demonstration, and that's what we're going to demonstrate here in this article. But first, let's have some reminders about what prime numbers are.

Let $p$ be a natural number, we say that $p$ is prime if and only if $p$ is different from 1 and it has only 1 and itself as divisors. Let's denote this set of prime numbers as $\mathbb{P}$.

$$\forall p \in \mathbb{N}, \ p \in \mathbb{P} \iff \begin{cases} p \neq 1 \newline \nexists(a, b) \in \mathbb{N}^2/  \ a \neq 1 \And b \neq p \ \Longrightarrow \ p = ab \end{cases}$$

A well-known theorem with prime numbers is that every natural number greater than or equal to 2 can be written in one and only one way, called its prime factorization:

$$\forall n \in \mathbb{N} \setminus \{0, 1\}, \ \exists(p_1, \ldots , p_n) \in \mathbb{P}^n / \ \exists(a_1, \ldots , a_n) \in \mathbb{N}^n / \ n = p_1^{a_1} \ldots p_n^{a_n} $$

Now let's demonstrate from these elements that the square root of a prime number is irrational, i.e., it belongs to the set denoted $\mathbb{R} \setminus \mathbb{Q}$.

Let $p \in \mathbb{P}$, suppose by contradiction that $\sqrt{p}$ is rational, then we can write it in the form of an irreducible fraction:

$$\sqrt{p} \in \mathbb{Q} \iff \exists(a, b) \in \mathbb{N} \times \mathbb{N}^{*} / \ \sqrt{p} = \frac{a}{b}$$

Now let $\alpha$ and $\beta$ be the exponents of $p$ in the prime factorizations of $a$ and $b$ respectively:

$$ a = a_1 \ldots p^{\alpha} \ldots a_n^2 \Longrightarrow a^2  = a_1^2 \ldots p^{2\alpha} \ldots a_n^2$$

$$ b = b_1 \ldots p^{\beta} \ldots b_n^2 \Longrightarrow b^2  = b_1^2 \ldots p^{2\alpha} \ldots b_n^2$$

Therefore,
$$\sqrt{p} = \frac{a}{b} \Longrightarrow a^2 = pb^2 \Longrightarrow a_1^2 \ldots p^{2\alpha} \ldots a_n^2 = (b_1^2 \ldots p^{2\alpha +1} \ldots b_n^2) $$

By the uniqueness of prime factorization, we find ourselves with $2\alpha = 2\beta + 1$ which contradicts the fact that an integer cannot be both even and odd!

Hence, we have $\sqrt{p} \in \mathbb{R} \setminus \mathbb{Q}$.

