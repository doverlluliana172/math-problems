import { sqrt } from 'mathjs';

function calculateHypotenuse(a: number, b: number): number {
    return sqrt((a * a) + (b * b));
}
