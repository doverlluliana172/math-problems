import sympy as sp

x = sp.symbols('x')
f = x**2 - 3*x + 2
f.diff(x)
