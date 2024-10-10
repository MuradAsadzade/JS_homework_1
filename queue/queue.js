class Queue {
    constructor() {
        this.data = [];  // Initialize an empty array to hold the queue elements
    }

    // Method to add an element to the queue
    add(value) {
        this.data.push(value);  // Adds the value to the end of the array
    }

    // Method to remove and return the first element of the queue
    remove() {
        return this.data.shift();  // Removes and returns the first element of the array
    }
}

module.exports = Queue;
