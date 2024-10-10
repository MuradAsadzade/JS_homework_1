function vowels(str) {
    const vowelSet = 'aeiouAEIOU'; 
    let count = 0;

    for (let char of str) {
        if (vowelSet.includes(char)) {
            count++;
        }
    }
    return count;
}

module.exports=vowels;
