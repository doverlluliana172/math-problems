import numpy as np
from sympy import *
x, y = symbols('x y')
eq1 = Eq(x + 2*y, 3)
sol = solve(eq1, (x, y))
print(sol)
