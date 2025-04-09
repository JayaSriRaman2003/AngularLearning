class Adhil {
    constructor(aValue, bValue) {
        this.aValue = aValue;
        this.bValue = bValue;
    }

    calculateSum() {
        return this.aValue + this.bValue;
    }
}

// Initialize values
const a = 5;
const b = 10;

// Create an instance of the Adhil class
const adhilInstance = new Adhil(a, b);

// Log the result of the calculateSum method
console.log(adhilInstance.calculateSum());