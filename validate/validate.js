function validate(node, min = null, max = null) {

    if (!node) {
      return true;
    }
  
   
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
      return false;
    }
  
    
    return (
      validate(node.left, min, node.data) && 
      validate(node.right, node.data, max)   
    );
  }
  

module.exports=validate;