function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Slow is now pointing to the element n from the last
    return slow;
}

module.exports = fromLast;
