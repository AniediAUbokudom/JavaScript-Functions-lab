// 1.(completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
  console.log(maxOfTwoNumbers(3, 9));
  
  //2
//   Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else if (num3 > num1 && num2) {
      return num3;
    }
  };
  
  console.log(maxOfThree(99,34,89))
  

  /*3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
 */

  function isCharAVowel(char) {
    // Convert the character to lowercase for case-insensitive comparison
    var lowerChar = char.toLowerCase();
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        return true;
    } else {
        return false;
    }
  }

  console.log(isCharAVowel("y"));
  console.log(isCharAVowel("o"));

  /* 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.*/
  const sumArray = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };
  
  const numbers = [78, 8, 50];
  const result = sumArray(numbers);
  console.log(result); 

/*Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.*/

function multiplyArray(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}

const numbs = [9, 14, 5];
const results = multiplyArray(numbs);
console.log(results); 
/*Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.*/
  
const numArgs = function(...args) {
  return args.length;
};
const count = numArgs(1, 2, 3, 7);
console.log(count); 
const count1 = numArgs(0);
console.log(count1)

/*Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}
const originalString = 'mafrex';
const reversedString = reverseString(originalString);
console.log(reversedString); 

/*Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.*/
const longestStringInArray = function(strings) {
  let maximumLength = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maximumLength) {
      maximumLength = strings[i].length;
    }
  }
  return maximumLength;
};
const stringArray = ['ani', 'wizzy', 'Daniel', 'diana', 'shellyanne'];
const longestLength = longestStringInArray(stringArray);
console.log(longestLength); 

/*Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
*/
function stringsLongerThan(strings, lengthThreshold) {
  const longerThanStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > lengthThreshold) {
      longerThanStrings.push(strings[i]);
    }
  }
  return longerThanStrings;
}
const strArray = ['say', 'hello', 'in', 'the', 'morning'];
const threshold = 3;
const stringResult = stringsLongerThan(strArray, threshold);
console.log(stringResult); 
