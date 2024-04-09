// .......................................Problems ..........................................\\



// 1.Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.


// Pseudo Code:
// 1. Initialize an array to store Fibonacci numbers.
// 2. Set the first two numbers of the Fibonacci sequence (0 and 1) in the array.
// 3. Loop from index 2 to n-1:
//     a. Calculate the next Fibonacci number by adding the two previous numbers.
//     b. Push the calculated number into the array.
// 4. Return the array of Fibonacci numbers.


function generateFibonacci(n) {
   
    let fibonacci = [0, 1];


    for (let i = 2; i < n; i++) {

        let nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
       
        fibonacci.push(nextFibonacci);
    }

   
    return fibonacci;
}


console.log(generateFibonacci(10)); 


// 2.Write a function that takes a number as input and returns the factorial of that number.

// Pseudo Code:

// 1. Define a function named 'factorial' that takes a single parameter 'n'.
// 2. If 'n' is less than 0, return 'undefined' or throw an error (factorial is not defined for negative numbers).
// 3. If 'n' is 0, return 1 (0! = 1 by convention).
// 4. Initialize a variable 'result' to 1 to store the factorial value.
// 5. Loop from 1 to 'n':
//     a. Multiply 'result' by the current loop index.
// 6. Return the 'result' variable.

function factorial(n) {

    if (n < 0) {
        return undefined;
    }

    if (n === 0) {
        return 1;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}


console.log(factorial(5)); 


// 3.Write a function that checks if a given string is a palindrome.

// Pseudo Code:

// 1. Define a function named 'isPalindrome' that takes a single parameter 'str'.
// 2. Initialize two pointers 'left' and 'right', pointing to the start and end of the string respectively.
// 3. While 'left' pointer is less than 'right' pointer:
//     a. If characters at 'left' and 'right' pointers are not equal, return false (string is not a palindrome).
//     b. Move 'left' pointer to the right and 'right' pointer to the left.
// 4. If the loop completes without returning false, return true (string is a palindrome).



function isPalindrome(str) {

    str = str.toLowerCase();
    

    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }
    
    return true;
}

console.log(isPalindrome("level")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 



// 4.Write a function that finds the maximum and minimum elements in an array.


// Pseudo Code:

// 1. Define a function named 'findMinMax' that takes a single parameter 'arr'.
// 2. Initialize two variables 'max' and 'min' to store the maximum and minimum elements respectively.
// 3. Set 'max' and 'min' to the first element of the array 'arr'.
// 4. Loop through the array starting from the second element:
//     a. If the current element is greater than 'max', update 'max' to the current element.
//     b. If the current element is less than 'min', update 'min' to the current element.
// 5. After the loop, return an object with 'max' and 'min' properties.


function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return { max, min };
}

console.log(findMinMax([3, 1, 5, 9, 2])); 
console.log(findMinMax([8, 4, 2, 6]));



// 5.Explain the concept of anagram and write a function to check if two strings are anagrams of each other.


// Pseudo Code:

// 1. Define a function named 'areAnagrams' that takes two parameters, 'str1' and 'str2'.
// 2. If the lengths of 'str1' and 'str2' are different, return false (they cannot be anagrams).
// 3. Initialize an empty object named 'charCount'.
// 4. Loop through each character of 'str1':
//     a. If the character is not in 'charCount', add it with a count of 1.
//     b. If the character is already in 'charCount', increment its count by 1.
// 5. Loop through each character of 'str2':
//     a. If the character is not in 'charCount' or its count is 0, return false (they cannot be anagrams).
//     b. If the character is in 'charCount', decrement its count by 1.
// 6. If the loops complete without returning false, return true (they are anagrams).



function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let charCount = {};


    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}


console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));  
