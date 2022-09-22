// function findLowestPositiveInteger(arrayOfIntegers: Array<number>) {
//   if (!arrayOfIntegers.includes(1)) {
//     return 1;
//   } else {
//     let lowestNumber:number|null = null;
//     arrayOfIntegers.forEach((number) => {
//       if (number < lowestNumber) {
//         lowestNumber = number;
//       }
//       else if(lowestNumber )
//     });
//     console.log(lowestNumber);
//   }
// }
// findLowestPositiveInteger([1, 3, 4, 5, 7]);
function addNumbersWithoutLoop(array, index) {
    if (index === void 0) { index = 0; }
    var total = 0;
    var currentNumber = array[index];
    total = total + currentNumber;
    console.log(total);
    if (array[index + 1] != undefined) {
        total += addNumbersWithoutLoop(array, index + 1);
    }
    return total;
}
console.log(addNumbersWithoutLoop([1, 2, 3], 0));
