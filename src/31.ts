import sympy as sp

# Example variable
x = sp.symbols('x')

# Define the expression
expr = x**2 - 3*x + 2

# Simplify the expression
simplified_expr = sp.simplify(expr)

print(simplified_expr)
