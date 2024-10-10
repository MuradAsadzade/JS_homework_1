class Stack {
    constructor() {
        this.data = [];  // Initialize an empty array to store stack elements
    }

    // Method to add an element to the top of the stack
    push(value) {
        this.data.push(value);
    }

    // Method to remove and return the top element from the stack
    pop() {
        return this.data.pop();
    }

    // Method to return the top element without removing it
    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
