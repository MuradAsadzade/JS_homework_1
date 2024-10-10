function matrix(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;


    while (startRow <= endRow && startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++; 

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--; // Move the right boundary left

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--; // Move the bottom boundary up

        // Fill the left column (bottom to top)
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++; // Move the left boundary right
    }

    return result;
}

module.exports = matrix;
