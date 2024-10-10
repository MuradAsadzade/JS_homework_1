const Stack = require('./stack');  // Assuming there's a Stack implementation

class Queue {
    constructor() {
        this.stack1 = new Stack();  // Primary stack
        this.stack2 = new Stack();  // Secondary stack
    }

    add(value) {
        this.stack1.push(value);  // Push value onto stack1
    }

    remove() {
        // Transfer elements to stack2 if it's empty
        while (this.stack1.data.length!==0) {
            this.stack2.push(this.stack1.pop());
        }

        // Pop from stack2 (the front of the queue)
        const removedValue = this.stack2.pop();

        // Transfer back the elements if necessary (optional)
        while (this.stack2.data.length!==0) {
            this.stack1.push(this.stack2.pop());
        }

        return removedValue;
    }

    peek() {
        // Transfer elements to stack2 if it's empty
        while (this.stack1.data.length!==0) {
            this.stack2.push(this.stack1.pop());
        }

        // Peek at the front of the queue (top of stack2)
        const peekValue = this.stack2.peek();

        // Transfer back the elements if necessary (optional)
        while (this.stack2.data.length!==0) {
            this.stack1.push(this.stack2.pop());
        }

        return peekValue;
    }
}

module.exports = Queue;
