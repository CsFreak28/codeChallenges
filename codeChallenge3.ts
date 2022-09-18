function getAmountOfTrappedWater(arrayOfBlocks: Array<number>) {
  let possibleAmountOfWaterThatCanbeStored: number = 0;
  let amountOfWaterThatCanBeTrapped: number = 0;
  let i = 0;
  while (i < arrayOfBlocks.length) {
    let block = arrayOfBlocks[i];
    if (block > 0) {
      let indexOfNextBlock = i + 1;
      let nextBlock = arrayOfBlocks[indexOfNextBlock];
      console.log(block);
      while (nextBlock && block > nextBlock) {
        indexOfNextBlock += 1;
        nextBlock = arrayOfBlocks[indexOfNextBlock];
      }
      if (!(block > nextBlock)) {
        i = indexOfNextBlock;
      }
    }
    i++;
  }
}
let button = document.querySelector("button");
button?.addEventListener("click", () => {
  getAmountOfTrappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
});
