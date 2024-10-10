function levelWidth(root) {
    const counters = [];
    const queue = [root, 's'];

    let levelCounter = 0;

    while (queue.length > 1) {
        const node = queue.shift();

        if (node === 's') {  
            counters.push(levelCounter);
            levelCounter = 0;
            queue.push('s');
        } else {
            levelCounter++;
            queue.push(...node.children);
        }
    }

    counters.push(levelCounter);

    return counters;
}

module.exports = levelWidth;
