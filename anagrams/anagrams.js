function anagrams(stringA, stringB) {
    const cleanString = (str) => {
      return str
        .replace(/[^\w]/g, '') 
        .toLowerCase()         
        .split('')            
        .sort()               
        .join('');             
    };
  
    return cleanString(stringA) === cleanString(stringB);
  }


module.exports=anagrams;

// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));
  