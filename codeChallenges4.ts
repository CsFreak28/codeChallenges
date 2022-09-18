// word ladder
function transformSequence(
  beginWord: string,
  endWord: string,
  wordList: Array<string>
) {
  if (!wordList.includes(endWord)) {
    console.log("it does not");
  } else {
    let previousSequenceWordArray: Array<string> = [];
    let endWordArray: Array<string> = [];
    for (let i = 0; i < endWord.length; i++) {
      endWordArray.push(endWord[i]);
    }
    let shortestSequenceFound: boolean = false;
    let returnSequence: Array<string> = [beginWord];
    wordList.forEach((word) => {
      if (!shortestSequenceFound) {
        let numberOfDifferentLetters = 0;
        let lastWordOfSequence = returnSequence[returnSequence.length - 1];
        for (let i = 0; i < word.length; i++) {
          previousSequenceWordArray.push(lastWordOfSequence[i]);
        }
        for (let i = 0; i < endWordArray.length; i++) {
          if (word.includes(endWordArray[i])) {
          } else {
            numberOfDifferentLetters += 1;
          }
        }
        numberOfDifferentLetters <= 1 &&
          returnSequence.push(word) &&
          (shortestSequenceFound = true);
        previousSequenceWordArray = [];
        numberOfDifferentLetters = 0;
        if (!shortestSequenceFound) {
          for (let i = 0; i < previousSequenceWordArray.length; i++) {
            if (word.includes(previousSequenceWordArray[i])) {
            } else {
              numberOfDifferentLetters += 1;
            }
          }
          numberOfDifferentLetters <= 1 && returnSequence.push(word);
          previousSequenceWordArray = [];
        }
      } else {
        if (!returnSequence.includes(endWord)) {
          returnSequence.push(endWord);
        }
      }
    });
    console.log(returnSequence);
  }
}

transformSequence("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
// output = ['hit','hot','dot','dog','cog']
