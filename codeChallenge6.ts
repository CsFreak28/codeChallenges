function rotateMatrix(matrix: Array<Array<number>>) {
  let numberOfRows = matrix.length;
  let numberOfColumns = matrix[0].length;
  let rotatedMatrix: Array<Array<number>> = [];
  for (let i = 0; i < numberOfColumns; i++) {
    rotatedMatrix.push([]);
  }
  let currentColumn = 0;
  rotatedMatrix.forEach((row) => {
    for (let i = numberOfRows - 1; i >= 0; i--) {
      row.push(matrix[i][currentColumn]);
    }
    currentColumn += 1;
  });
  return rotatedMatrix;
}
rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
