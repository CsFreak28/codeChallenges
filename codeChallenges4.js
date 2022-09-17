// word ladder
function transformSequence(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        console.log("it does not");
    }
    else {
        var previousSequenceWordArray_1 = [];
        var endWordArray_1 = [];
        for (var i = 0; i < endWord.length; i++) {
            endWordArray_1.push(endWord[i]);
        }
        var shortestSequenceFound_1 = false;
        var returnSequence_1 = [beginWord];
        wordList.forEach(function (word) {
            if (!shortestSequenceFound_1) {
                var numberOfDifferentLetters = 0;
                var lastWordOfSequence = returnSequence_1[returnSequence_1.length - 1];
                for (var i = 0; i < word.length; i++) {
                    previousSequenceWordArray_1.push(lastWordOfSequence[i]);
                }
                for (var i = 0; i < endWordArray_1.length; i++) {
                    if (word.includes(endWordArray_1[i])) {
                    }
                    else {
                        numberOfDifferentLetters += 1;
                    }
                }
                numberOfDifferentLetters <= 1 &&
                    returnSequence_1.push(word) &&
                    (shortestSequenceFound_1 = true);
                previousSequenceWordArray_1 = [];
                numberOfDifferentLetters = 0;
                if (!shortestSequenceFound_1) {
                    for (var i = 0; i < previousSequenceWordArray_1.length; i++) {
                        if (word.includes(previousSequenceWordArray_1[i])) {
                        }
                        else {
                            numberOfDifferentLetters += 1;
                        }
                    }
                    numberOfDifferentLetters <= 1 && returnSequence_1.push(word);
                    previousSequenceWordArray_1 = [];
                }
            }
            else {
                if (!returnSequence_1.includes(endWord)) {
                    returnSequence_1.push(endWord);
                }
            }
        });
        console.log(returnSequence_1);
    }
}
transformSequence("bit", "fat", ["bot", "dot", "dob", "kat", "log", "fat"]);
