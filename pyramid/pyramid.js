function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);   // Number of spaces on each side
        let hashes = '#'.repeat(2 * i - 1);  // Number of hashes for the current level
        console.log(spaces + hashes + spaces);  // Combine spaces and hashes for the pyramid
    }
}

module.exports = pyramid;
