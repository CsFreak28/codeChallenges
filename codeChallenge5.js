function phoneLettersCombo(digits) {
    var arrayOfLetters = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };
    var firstDigit = digits[0];
    var secondDigit = digits[1];
    var arrayOfFirstDigitLetters = arrayOfLetters[firstDigit];
    var arrayOfSecondDigitLetters = arrayOfLetters[secondDigit];
    var returnArray = [];
    arrayOfFirstDigitLetters.forEach(function (firstDigitletter) {
        if (secondDigit == undefined) {
            returnArray.push(firstDigitletter);
        }
        else {
            arrayOfSecondDigitLetters.forEach(function (secondDigitLetter) {
                returnArray.push(firstDigitletter + secondDigitLetter);
            });
        }
    });
    console.log(returnArray);
}
phoneLettersCombo("2");
