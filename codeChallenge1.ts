//code challenge #1
function get_longest_palindromic_string(value: string) {
  let previousWord: string = "";
  let longestPalindrome: string = "";
  for (let i = 0; i < value.length; i++) {
    let sliceIndex = i + 1;
    previousWord = value.slice(0, sliceIndex);
    let j = 1;
    while (previousWord.length >= 1) {
      if (
        previousWord === reverseString(previousWord) &&
        previousWord.length > longestPalindrome.length
      ) {
        longestPalindrome = previousWord;
        previousWord = previousWord.slice(j, previousWord.length);
      } else {
        previousWord = previousWord.slice(j, previousWord.length);
      }
    }
  }
  console.log(longestPalindrome);
}
function reverseString(value: string) {
  let stringArrray: Array<string> = 
  value.split("");
  let reversedStringArray: Array<string> =
   stringArrray.reverse();
  let reversedString: string = "";
  reversedStringArray.forEach((letter) => {
    reversedString += letter;
  });
  return reversedString;
}
get_longest_palindromic_string("civic");
