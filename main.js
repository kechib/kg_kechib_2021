// an npm package that converts numbers (including decimal points) into words.
const { ToWords } = require('to-words')

//problem setup instructions

/* Convert an array of integers into an array of strings representing the phonetic equivalent of the
 integer 
 For example:
Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.
*/


//an array of numbers that we use to set up the problem
let numsArray = [ 7, 19, 23, 5, 4000]

// we use the map function to iterate over the numsArray and assign it a new name called wordArray
const wordArray = numsArray.map(words => {
    // creating a new method will allow us to use the 'convert' property
    const toWords = new ToWords()
    // use the covert property, taking the parameter words to change our integer to the phonetic equivalent
  let word1 = toWords.convert(words)
  // the return stores and helps end the iteration. We also stringify our return. 
  return word1.toString()
    
})

// we log our function to run test in node
console.log(wordArray)