function phoneLettersCombo(digits: string) {
  let arrayOfLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let firstDigit = digits[0];
  let secondDigit = digits[1];
  let arrayOfFirstDigitLetters: Array<string> = arrayOfLetters[firstDigit];
  let arrayOfSecondDigitLetters: Array<string> = arrayOfLetters[secondDigit];
  let returnArray: Array<string> = [];
  arrayOfFirstDigitLetters.forEach((firstDigitletter) => {
    if (secondDigit == undefined) {
      returnArray.push(firstDigitletter);
    } else {
      arrayOfSecondDigitLetters.forEach((secondDigitLetter) => {
        returnArray.push(firstDigitletter + secondDigitLetter);
      });
    }
  });
  console.log(returnArray);
}
phoneLettersCombo("23");
function createArrayOfLettersMappedToNumbers() {
  interface NumberAndLettersMap {
    2: Array<string>;
    3: Array<string>;
    4: Array<string>;
    5: Array<string>;
    6: Array<string>;
    7: Array<string>;
    8: Array<string>;
    9: Array<string>;
  }
  let stringOfAlphabets: string = "abcdefghijklmnopqrstuvwxyz";
  let arrayOfAlphabets: Array<string> = stringOfAlphabets.split("");
  let NumberAndLettersMap: NumberAndLettersMap = {
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
 
}
