function rotateMatrix(matrix) {
    var numberOfRows = matrix.length;
    var numberOfColumns = matrix[0].length;
    var rotatedMatrix = [];
    for (var i = 0; i < numberOfColumns; i++) {
        rotatedMatrix.push([]);
    }
    console.log(rotatedMatrix);
    var currentColumn = 0;
    rotatedMatrix.forEach(function (row) {
        for (var i = numberOfRows - 1; i >= 0; i--) {
            row.push(matrix[i][currentColumn]);
        }
        currentColumn += 1;
    });
    console.log(rotatedMatrix);
}
rotateMatrix([
    [1, 2, 3, 4],
    [4, 5, 6, 9],
    [7, 8, 9, 12],
    [7, 8, 12, 67],
]);
