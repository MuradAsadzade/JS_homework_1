function palindrome(str) {
    // Reverse the string and compare with the original string
    return str === str.split('').reverse().join('');
}

module.exports=palindrome;


