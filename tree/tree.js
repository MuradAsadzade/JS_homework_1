
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(callback) {
        const arr = [this.root];  

        while (arr.length) {
            const node = arr.shift(); 
            callback(node);           
            arr.push(...node.children); 
        }
    }

    traverseDF(callback) {
        const arr = [this.root];  

        while (arr.length) {
            const node = arr.shift(); 
            callback(node);           
            arr.unshift(...node.children);
        }
    }
}

module.exports = { Tree, Node };
