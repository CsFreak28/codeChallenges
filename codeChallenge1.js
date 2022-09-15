//code challenge #1
function get_longest_palindromic_string(value) {
    var previousWord = "";
    var longestPalindrome = "";
    for (var i = 0; i < value.length; i++) {
        var sliceIndex = i + 1;
        previousWord = value.slice(0, sliceIndex);
        var j = 1;
        while (previousWord.length >= 1) {
            if (previousWord === reverseString(previousWord) &&
                previousWord.length > longestPalindrome.length) {
                longestPalindrome = previousWord;
                previousWord = previousWord.slice(j, previousWord.length);
            }
            else {
                previousWord = previousWord.slice(j, previousWord.length);
            }
        }
    }
    console.log(longestPalindrome);
}
function reverseString(value) {
    var stringArrray = value.split("");
    var reversedStringArray = stringArrray.reverse();
    var reversedString = "";
    reversedStringArray.forEach(function (letter) {
        reversedString += letter;
    });
    return reversedString;
}
get_longest_palindromic_string("civic");
