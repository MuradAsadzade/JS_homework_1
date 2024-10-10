function steps(n) {
    for (let row = 0; row < n; row++) {
        // Create a step string by concatenating '#' and ' '
        let step = '';

        // Add '#' characters based on the current row index
        for (let col = 0; col < n; col++) {
            if (col <= row) {
                step += '#';
            } else {
                step += ' ';
            }
        }

        // Log the current step row
        console.log(step);
    }
}

module.exports = steps;
