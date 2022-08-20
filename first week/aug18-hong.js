// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

function reverseNumber(num) {
  num = num + "";
  num = +num.split("").reverse().join("");

  return num;
}

// console.log(reverseNumber(1234));

// 2.Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run

function isPalindrome(str) {
  str = str.split("");
  let end = str.length - 1;
  let i = 0;
  while (i <= end) {
    if (str[i] === str[end]) {
      end -= 1;
      i += 1;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("1221"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g

function createCombinations(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      res.push(str.slice(i, j));
    }
  }
  return res;
}

// console.log(createCombinations("dog", 3));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortStringAlphabetical(str) {
  str = str.split("").sort().join("");
  return str;
}

// console.log(sortStringAlphabetical("aabcsdeds"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox  + words[i].substr(1);

function makeUpper(str) {
  if (typeof str === "string" || str instanceof String) {
    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  } else {
    return "";
  }
}

// console.log(makeUpper("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development
function findLong(str) {
  let max = " ";
  str = str.split(" ");
  for (let s = 0; s < str.length; s++) {
    if (str[s].length > max.length) {
      max = str[s];
    }
  }
  return max;
}

// console.log(findLong("the best development class"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

function findVowels(str) {
  str = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      res += 1;
    }
  }
  return res;
}

// console.log(findVowels("The qUick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself

function isPrime(num) {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(13));

//9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function returnType(thing) {
  return typeof thing;
}

// console.log(returnType(false));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function generateIdentityMatrix(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    if (!res[i]) {
      res[i] = [];
    }
    for (let j = 0; j < n; j++) {
      if (i === j) {
        res[i][j] = 1;
      } else {
        res[i][j] = 0;
      }
    }
  }
  return res;
}

// console.log(generateIdentityMatrix(3));
// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function findTwoGreat(arr) {
  arr.sort();

  return [arr[1], arr[arr.length - 2]];
}

// console.log(findTwoGreat([3, 2, 1, 5, 4]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
    if (sum === num) {
      return true;
    }
  }
  return false;
}

// console.log(isPerfectNumber(6));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function computeFactors(num) {
  let res = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }

  res.push(num);
  return res;
}

// console.log(computeFactors(6));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function countCoins(money) {
  let res = [];
  const coin = [25, 10, 5, 2, 1];

  while (money > 0) {
    for (let i = 0; i < coin.length; i++) {
      if (money - coin[i] > 0) {
        money = money - coin[i];
        res.push(coin[i]);
        i--;
      } else if (money - coin[i] === 0) {
        res.push(coin[i]);
        return res;
      }
    }
  }
  return res;
}

// console.log(countCoins(32));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

function exponent(b, n) {
  return Math.pow(b, n);
}

// console.log(exponent(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function findUniqueCharacters(str) {
  str = str.split("");
  let res = new Set(str);
  res = Array.from(res).join("");
  return res;
}

// console.log(findUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function conutOccurrences(string) {
  let string1 = string.split("").sort().join("");
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 1;
    }
  }
}

// console.log(conutOccurrences("thequickbrownfoxjumpsoverthelazydog"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9], 5));
// 19. Write a JavaScript function that returns array elements larger than a number.

function getLargerElements(nums, num) {
  if (!nums) {
    return [];
  }
  const res = [];
  nums.forEach((element) => {
    if (element > num) {
      res.push(element);
    }
  });

  return res;
}

// console.log(getLargerElements([2, 3, 1, 2, 5], 4));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomChar(len) {
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// console.log(getRandomChar(5));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

function findSubsets(nums, length) {
  let cur = [];
  let res = [];
  for (let i = 0; i <= nums.length; i++) {
    recursiveSearch(nums, i, 0, cur, res);
  }
  return res.filter((subset) => subset.length === length);
}

function recursiveSearch(nums, n, start, cur, res) {
  if (cur.length === n) {
    res.push(cur.concat());
    return;
  }

  for (let i = start; i < nums.length; i++) {
    cur.push(nums[i]);
    recursiveSearch(nums, n, i + 1, cur, res);
    cur.pop();
  }
}
// console.log(findSubsets([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o
// Expected output: 3

function countOccurrences(str, char) {
  let res = 0;
  str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      res += 1;
    }
  }
  return res;
}

// console.log(countOccurrences("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'

function findFirstUnique(s) {
  const count = {};

  for (const letter of s) {
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const stringLetter = s[i];

    if (count[stringLetter] === 1) {
      return stringLetter;
    }
  }

  return "";
}

// console.log(findFirstUnique("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );
// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function findLongestCountryName(arr) {
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    if (res.length < arr[i].length) {
      res = arr[i];
    }
  }
  return res;
}

// console.log(
//   findLongestCountryName(["Australia", "Germany", "United States of America"])
// );

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

function findLongestSubstring(s) {
  let k = 0;

  let maxString = "";
  for (i = 0; i < s.length; i++) {
    for (j = k; j < i; j++) {
      if (s[i] === s[j]) {
        k = j + 1;
        break;
      }
    }
    if (i - k + 1 > maxString.length) {
      maxString = s.substring(k, i + 1);
    }
  }
  return maxString;
}

// console.log(findLongestSubstring("abcabcbb"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.
function findLongestPalindrome(s) {
  let currentLongest = [0, 1];

  for (let i = 1; i < s.length; i++) {
    const odd = expand(s, i - 1, i + 1);
    const even = expand(s, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return s.slice(currentLongest[0], currentLongest[1]);
}

function expand(s, left, right) {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

// console.log(findLongestPalindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function callback(num, func) {
  func();
  return num;
}
function hi() {
  console.log("hi");
}
callback(6, hi);

// 29. Write a JavaScript function to get the function name.

const func1 = function () {};
console.log(func1.name);
