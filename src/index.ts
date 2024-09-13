import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

console.log(`result_multiple = ${calc.multiply(2, 3)}`);
console.log(`result_divide = ${calc.divide(6, 2)}`);
console.log(`result_subtract = ${calc.subtract(6, 2)}`);
