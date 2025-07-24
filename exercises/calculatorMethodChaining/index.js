class Calculator {
    /**
     * @param {number} value - Initial value
     */
    constructor(value) {
        this.result = value;
    }

    /**
     * Adds the value and returns the Calculator instance
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }

    /**
     * Subtracts the value and returns the Calculator instance
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }

    /**
     * Multiplies the result by value and returns the Calculator instance
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }

    /**
     * Divides the result by value. Throws error if dividing by zero.
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    /**
     * Raises result to the power of value and returns the Calculator instance
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    /**
     * Returns the final result
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

const calc1 = new Calculator(10).add(5).subtract(7).getResult();  // ➞ 8
console.log(calc1);

const calc2 = new Calculator(2).multiply(5).power(2).getResult(); // ➞ 100
console.log(calc2);

try {
    const calc3 = new Calculator(20).divide(0).getResult();  // ➞ Error
} catch (e) {
    console.log(e.message);  // "Division by zero is not allowed"
}
