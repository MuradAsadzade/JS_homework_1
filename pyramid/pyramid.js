function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);   
        let hashes = '#'.repeat(2 * i - 1);  
        console.log(spaces + hashes + spaces);  
    }
}

module.exports = pyramid;
