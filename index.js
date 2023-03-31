function isPalindrome(word) {
for (let i = 0; i < word.length / 2; i++) {
  const j = word.length - 1 -i;

  return (word[i] === word[j])
}
}

/* 
  Add your pseudocode here
  Iterate from the beginning of the string to the middle of the string.
  Compare the letter we're iterating over to the corresponding letter at the end of the string. 
  Return the value from an expression equating the iteration from the front and the iteration from the back.
*/

/*
 The function initializes i to zero which will be used as the character index for iteration.
 It iterates until i is no longer less than the length of the word and 
 Initializes i which is equal to the idex of the last letter - the index number contained in i.
 It returns the result of of comparing the letters at index i and index j in the word
 It adds one to i before the next iteration
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("phase"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
