

// Circular detection function
function circular(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // The list is circular
        }
    }

    return false; // The list is not circular
}
module.exports=circular;
