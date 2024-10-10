function validate(node, min = null, max = null) {
    // Base case: If there's no node, it's valid (empty subtree)
    if (!node) {
      return true;
    }
  
    // Check the boundaries: node's value should be greater than min and less than max
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
      return false;
    }
  
    // Recursively validate the left subtree and right subtree
    return (
      validate(node.left, min, node.data) && // Left subtree: max is current node's data
      validate(node.right, node.data, max)   // Right subtree: min is current node's data
    );
  }
  

module.exports=validate;