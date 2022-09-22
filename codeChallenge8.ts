function findMedianOfTwoSortedArrays(
  nums1: Array<number>,
  nums2: Array<number>
) {
  let MergedArray: Array<number> = mergeArray(nums1, nums2);
  let middleOfTheArray: number = MergedArray.length / 2;
  let middleApproximate: number = Math.floor(MergedArray.length / 2);
  let lengthIsEven = middleApproximate === middleOfTheArray;
  let median: number = 0;
  if (!lengthIsEven) {
    median = MergedArray[middleApproximate];
  } else {
    let middleNumbers =
      MergedArray[middleOfTheArray - 1] + MergedArray[middleOfTheArray];
    median = middleNumbers / 2;
  console.log(median)
}
findMedianOfTwoSortedArrays([1, 2, 3, 4], [5, 6, 7, 8, 9]);

function mergeArray(arr1: Array<number>, arr2: Array<number>) {
  let i = 0;
  let j = 0;
  let result: Array<number> = [];
  while (i < arr1.length && j < arr2.length) {
    let arr1Element = arr1[i];
    let arr2Element = arr2[j];
    if (arr1Element <= arr2Element) {
      result.push(arr1Element);
      i++;
    } else {
      result.push(arr2Element);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr1.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
