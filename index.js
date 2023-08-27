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


  

