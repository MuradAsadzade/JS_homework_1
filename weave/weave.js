const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const weavedQueue = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
   
        if (sourceOne.peek()) {
            weavedQueue.add(sourceOne.remove());
        }

   
        if (sourceTwo.peek()) {
            weavedQueue.add(sourceTwo.remove());
        }
    }

    return weavedQueue;
}

module.exports = weave;
