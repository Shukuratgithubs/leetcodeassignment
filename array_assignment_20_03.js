// 1. Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0]
}


// Sample Cases
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500




// 2. Pair Management
// Given two arguments, return an array which contains these two arguments.

// Sample Cases
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(a, b) {
    return [a, b]
}
function makePair(a, b) {
    return Array(a, b)
}

// 3. Reverse an Array
// Write a function to reverse an array.

// Sample Case
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

function reverse(arr) {
    return arr.reverse()
 }


// 4. Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Sample Case
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr) { 
    return arr.join(" ")
}


// 5. Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Sample Cases
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6  //10 / 2 = 5
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5 //8.0 / 2 = 4
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4  //6.535355314 / 2 = 3.267677657

function valueAt(arr, index) {
    const arrIndex = Math.floor(index)
    return arr[arrIndex]
}

// 6. Find the Index 
// Create a function that finds the index of a given item.

// Sample cases
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1

function search(arr, item) {
    return arr.indexOf(item)
}

// 7. Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Sample cases
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check(arr, item) { 
    return arr.includes(item)
}

// 8. Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Sample case
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []

function invertArray(arr) {
    return arr.map(function (num) {    
        num * -1
    })
}

function invertArray(arr) {
    let result = []
    arr.forEach(function (num) {
        result.push(num * -1)
        
    })
    return result
}


// 9. Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// Sample case
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]


function skipTooMuchSugarDrinks(drinks) {
    return drinks.filter(function (drink) {
        return drink !== "cola" && drink !== "fanta"
    })
}

function skipTooMuchSugarDrinks(drinks) {
    let result = []
    drinks.forEach(function (drink) {
        if (drink !== "cola" && drink !== "fanta") {
            result.push(drink)
        } 
    })
    return result
}
    
    
// 10. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
    return arr.filter(function (item) {
        return typeof(item) === "number"
    })
}

function filterArray(arr) {
    let result = []
    arr.forEach(function (item) {
        if (typeof(item) === "number") {
            result.push(item)
        }
    })
    return result
}

function filterArray(arr) {
    let result = []
    arr.forEach(function (item) { 
        if (isNaN(item)) {  //if (Number.isInteger(item)) { 
            result.push(item)
        }
    })
  
    return result
}



// 11. The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Sample cases
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true

function forbiddenLetter(letter, arr) {
    arr.forEach(function (word) { 
        if (word.indexOf(letter) > -1) {
            return false
        } else {
            return true
        }
    })

   
}

function forbiddenLetter(letter, arr) {
    arr.forEach(function (word) { 
        if (word.includes(letter)) {
            return false
        } else {
            return true
        }
    })

   
}

// 12. Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. 
//The second only odd.Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Sample cases
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]


function cleanUpArray(arr) {
    let evenNumberResult = []
    let oddNumberResult = []
    arr.forEach(function (num) {
        if (parseInt(num) % 2 === 0) {
            evenNumberResult.push(num)
        } else {
            oddNumberResult.push(num)
        }
    })
    return [  evenNumberResult, oddNumberResult   ]
}

// 13. String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. 
//If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Sample cases
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
// stringPairs("edabit") ➞ ["ed", "ab", "it"]
// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]


// 14. Word Endings
// Create a function that adds a string ending to each member in an array.

// Sample cases
// addEnding(["clever", "meek", "hurried", "nice"], "ly") 
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]
// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]

function addEnding(arr, ending) {
    let res =  arr.map(function (word) {
        return `${word}${ending}`
    })
    
    return res
}

// 15. Spelling it Out
// Create a function which takes in a word and spells it out,
// by consecutively adding letters until the full word is completed.

// Sample cases
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eage"]

function spelling(word){
      let splitted = word.split('')
      let res = []
      splitted.forEach(function(el,i){
        res.push(splitted.slice(0, i + 1).join(''))
      })
      return res
     }