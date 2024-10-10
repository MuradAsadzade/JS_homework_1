const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const weavedQueue = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        // If there are still elements in sourceOne, remove and add them to weavedQueue
        if (sourceOne.peek()) {
            weavedQueue.add(sourceOne.remove());
        }

        // If there are still elements in sourceTwo, remove and add them to weavedQueue
        if (sourceTwo.peek()) {
            weavedQueue.add(sourceTwo.remove());
        }
    }

    return weavedQueue;
}

module.exports = weave;
