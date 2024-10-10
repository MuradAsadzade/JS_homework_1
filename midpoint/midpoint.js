function midpoint(list) {
    let slow = list.getFirst();  
    let fast = list.getFirst(); 

    while (fast.next && fast.next.next) {
        slow = slow.next;         // Move slow by one node
        fast = fast.next.next;    // Move fast by two nodes
    }

    return slow;  // Slow pointer will be at the middle node
}

module.exports = midpoint;
