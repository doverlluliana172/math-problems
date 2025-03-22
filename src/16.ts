import random

def calculate_expression(expression: str) -> float:
    # Assuming the expression is valid
    result = eval(expression)
    return round(result, 2)
