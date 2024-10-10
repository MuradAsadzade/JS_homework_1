// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // Adds a child node
    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    // Removes a child node by its data
    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

// Tree class
class Tree {
    constructor() {
        this.root = null;
    }

    // Breadth-First Traversal
    traverseBF(callback) {
        const arr = [this.root];  // Initialize a queue with the root node

        while (arr.length) {
            const node = arr.shift(); // Remove first node from the queue
            callback(node);           // Call the provided callback function on the node
            arr.push(...node.children); // Add all the children of the node to the queue
        }
    }

    // Depth-First Traversal
    traverseDF(callback) {
        const arr = [this.root];  // Initialize a stack with the root node

        while (arr.length) {
            const node = arr.shift(); // Remove first node from the stack
            callback(node);           // Call the provided callback function on the node
            arr.unshift(...node.children); // Add all the children of the node to the front of the stack
        }
    }
}

module.exports = { Tree, Node };
