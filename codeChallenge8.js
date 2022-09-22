function findMedianOfTwoSortedArrays(nums1, nums2) {
    var MergedArray = mergeArray(nums1, nums2);
    var middleOfTheArray = MergedArray.length / 2;
    var middleApproximate = Math.floor(MergedArray.length / 2);
    var lengthIsEven = middleApproximate === middleOfTheArray;
    var median = 0;
    if (!lengthIsEven) {
        median = MergedArray[middleApproximate];
    }
    else {
        var middleNumbers = MergedArray[middleOfTheArray - 1] + MergedArray[middleOfTheArray];
        median = middleNumbers / 2;
        console.log(median);
    }
    findMedianOfTwoSortedArrays([1, 2, 3, 4], [5, 6, 7, 8, 9]);
    function mergeArray(arr1, arr2) {
        var i = 0;
        var j = 0;
        var result = [];
        while (i < arr1.length && j < arr2.length) {
            var arr1Element = arr1[i];
            var arr2Element = arr2[j];
            if (arr1Element <= arr2Element) {
                result.push(arr1Element);
                i++;
            }
            else {
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
}
