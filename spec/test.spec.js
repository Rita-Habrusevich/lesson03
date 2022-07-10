const Calculator = require('../lesson15.js');

describe(`Check calculator functionality`, function() {

    it(`should be return type number`, async () => {
        const obj = new Calculator;
        const result = obj.add(2, 2);
        expect(typeof result).toEqual('number');
    });
    it(`should be return sum of positive numbers`, async () => {
        const obj = new Calculator;
        const result = obj.add(2, 2);
        expect(result).toEqual(4);
    });
    it(`should be return sum for fractional numbers`, async () => {
        const obj = new Calculator;
        const result = obj.add(0.2, 0.2);
        expect(result).toEqual(0.4);
    });
    it(`should be return sum for negative numbers`, async () => {
        const obj = new Calculator;
        const result = obj.add(-2, -2);
        expect(result).toEqual(-4);
    });
    it(`should be return sum of for negative and positive number`, async () => {
        const obj = new Calculator;
        const result = obj.add(-2, 2);
        expect(result).toEqual(0);
    });
    it(`should be return sum for big numbers`, async () => {
        const obj = new Calculator;
        const result = obj.add(99999999, 99999999);
        expect(result).toEqual(199999998);
    });
    it(`should be return sum for multiple numbers`, async () => {
        const obj = new Calculator;
        const result = obj.add(2, 22, 222, 2222);
        expect(result).toEqual(2468);
    });


    it(`should be return type number`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(2, 2);
        expect(typeof result).toEqual('number');
    });
    it(`should be return product`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(2, 2);
        expect(result).toEqual(4);
    });
    it(`should be return product of for negative numbers`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(-2, -2);
        expect(result).toEqual(4);
    });
    it(`should be return product of for negative and positive number`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(-2, 2);
        expect(result).toEqual(-4);
    });
    it(`should be return product of for fractional numbers`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(0.2, 0.2);
        expect(result.toFixed(2)).toEqual('0.04');
    });
    it(`should be return product of for big numbers`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(999999999, 2);
        expect(result).toEqual(1999999998);
    });
    it(`should be return product for multiple numbers`, async () => {
        const obj = new Calculator;
        const result = obj.multiply(2, 22, 222, 2222);
        expect(result).toEqual(21704496);
    });


    it(`should be return type number`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(2, 2);
        expect(typeof result).toEqual('number');
    });
    it(`should be return difference of a and b`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(10, 2);
        expect(result).toEqual(8);
    });
    it(`should be return difference of a and b for negative numbers`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(-10, -2);
        expect(result).toEqual(-8);
    });
    it(`should be return difference of a and b for one negative and one positive number`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(10, -2);
        expect(result).toEqual(12);
    });
    it(`should be return difference of a and b for fractional numbers`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(0.10, 0.2);
        expect(result).toEqual(-0.1);
    });
    it(`should be return difference of a and b for negative fractional numbers`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(-0.10, -0.2);
        expect(result).toEqual(0.1);
    });
    it(`should be return difference for big numbers`, async () => {
        const obj = new Calculator;
        const result = obj.subtraction(999999999, 99999999);
        expect(result).toEqual(900000000);
    });


    it(`should be return type number`, async () => {
        const obj = new Calculator;
        const result = obj.divide(2, 2);
        expect(typeof result).toEqual('number');
    });
    it(`should be return divisor of a and b`, async () => {
        const obj = new Calculator;
        const result = obj.divide(15, 5);
        expect(result).toEqual(3);
    });
    it(`should be return divisor of a and b for one negative and one positive number`, async () => {
        const obj = new Calculator;
        const result = obj.divide(-15, 5);
        expect(result).toEqual(-3);
    });
    it(`should be return divisor of a and b for negative numbers`, async () => {
        const obj = new Calculator;
        const result = obj.divide(-15, -5);
        expect(result).toEqual(3);
    });
    it(`should be return divisor of a and b for fractional numbers`, async () => {
        const obj = new Calculator;
        const result = obj.divide(0.25, 0.5);
        expect(result).toEqual(0.5);
    });
    it(`should be return divisor of a and b for big numbers`, async () => {
        const obj = new Calculator;
        const result = obj.divide(999999999, 9);
        expect(result).toEqual(111111111);
    });


    it(`should be return type number`, async () => {
        const obj = new Calculator;
        const result = obj.exponentiation(2);
        expect(typeof result).toEqual('number');
    });
    it(`should be return exponentiation`, async () => {
        const obj = new Calculator;
        const result = obj.exponentiation(2);
        expect(result).toEqual(4);
    });
    it(`should be return exponentiation for negative number`, async () => {
        const obj = new Calculator;
        const result = obj.exponentiation(-2);
        expect(result).toEqual(4);
    });
    it(`should be return exponentiation for big number`, async () => {
        const obj = new Calculator;
        const result = obj.exponentiation(99999999);
        expect(result).toEqual(9999999800000001);
    });
    it(`should be return exponentiation for fractional number`, async () => {
        const obj = new Calculator;
        const result = obj.exponentiation(0.09);
        expect(result).toEqual(0.0081);
    });
    it(`should be return exponentiation`, async () => {
        const obj = new Calculator;
        const result = obj.exponentiation(0);
        expect(result).toEqual(0);
    });


    it(`should be return result with different calculations`, async () => {
        const obj = new Calculator;
        const sumResult = obj.add(2, 2);
        const multiplyResult = obj.multiply(2, 2);
        const subtractionResult = obj.subtraction(20, 10);
        const divideResult = obj.divide(15, 3);
        expect(sumResult + multiplyResult + subtractionResult + divideResult).toEqual(23);
    });
});