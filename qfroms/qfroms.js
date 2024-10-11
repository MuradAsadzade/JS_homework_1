const Stack = require('./stack');  

class Queue {
    constructor() {
        this.stack1 = new Stack();  
        this.stack2 = new Stack();  
    }

    add(value) {
        this.stack1.push(value);  
    }

    remove() {
    
        while (this.stack1.data.length!==0) {
            this.stack2.push(this.stack1.pop());
        }

    
        const removedValue = this.stack2.pop();

        
        while (this.stack2.data.length!==0) {
            this.stack1.push(this.stack2.pop());
        }

        return removedValue;
    }

    peek() {

        while (this.stack1.data.length!==0) {
            this.stack2.push(this.stack1.pop());
        }

   
        const peekValue = this.stack2.peek();

        while (this.stack2.data.length!==0) {
            this.stack1.push(this.stack2.pop());
        }

        return peekValue;
    }
}

module.exports = Queue;
