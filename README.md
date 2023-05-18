# JavaScript_Algorithms

This repository contains a collection of JavaScript challenges that are designed to help me improve my coding skills and problem-solving abilities. Each challenge focuses on a specific algorithmic problem or data structure, and provides me with a set of guidelines and constraints that I can use to create a solution.

## Getting Started

To get started with the challenges in this repository, simply clone or download the repository to your local machine, and then open the challenge file that you want to work on. Each challenge file contains a description of the problem, as well as a set of input and output examples that you can use to test your solution.

## Contributing

If you find a bug or issue with any of the challenges in this repository, or if you would like to contribute your own challenges, please feel free to open an issue or pull request. Your contributions are always welcome!

## License

This repository is licensed under the MIT License. Please see the LICENSE file for more information.

## Acknowledgements

This repository was inspired by similar collections of coding challenges, and was created as a way to help others improve their coding skills and knowledge of algorithmic problems and data structures.

### Challenge 1 - userValidation

#### Rules

1. The username is between 4 and 25 characters.
   `  str.length >= 4 &&
str.length <= 25`
2. It must start with a letter.
   `/[a-zA-Z]/.test(str.slice(0, 1))`
3. It can only containe letters, numbers and the underscore character.
   `/^\w+$/.test(str) `
4. It cannot end with an underscore character
   `/[a-zA-Z0-9]/.test(str.slice(-1))`

### Challenge 2 - longestWord

- Using the Javascript language, have the function longestWord(sen) take the sen parameter being passed and return
  the largest word in the string

- If there are two or more words that are the same length, return the first word from the string with that length.

- Ignore punctuation and assume sen will not be empty.

```export const longestWord = (sen) => {
const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
arr.sort((a, b) => {
return b.length - a.length;
});

return arr[0];
};
```

### Challenge 3 - firstFactorial

Using the Javascript language, have the function firstFactorial(num) take the num parameter being passed and return
the factorial of it (ie. if num = 4 , return (4*3*2\*1)). For the test cases, the range will be between 1 and 18.

```
export const firstFactorial = (num) => {
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

```

### Challenge 4 - firstReverse

Have the function firstReverse() take the str parameter being passed
and return the string in reversed order.

```
export const firstReverse = (str) => {
  const arr = str.split("");
  const reversedArr = arr.reverse();
  const newStr = reversedArr.join("");
  return newStr;
};

```

### Challenge 5 - findIntersection

Have the function findIntersection(strArr) read the array of strings stored
in strArr which will contain 2 elements: the first element will represent a
list of comma-separated numbers sorted in ascending order, the second element
will represent a second list of comma-separated numbers (also sorted).
Your goal is tı return a cınna-separated string containing the numbers
that occur in elements of strArr in sorted order. If there is no intersection,
return the string false.

```
export const findIntersection = (arr) => {
  let interSection = [];

  const set1 = arr[0].replace(/\s/g, "").split(",");
  const set2 = arr[1].replace(/\s/g, "").split(",");

  set2.forEach((item) => {
    if (set1.includes(item)) {
      interSection.push(item);
    }
  });

  if (interSection.length != 0) {
    return interSection.toString();
  }
  return false;
};

```

### Challenge 6 - questionMark

Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

```
export const questionMark = (str) => {
  if (str.length < 5) {
    return false;
  }

  const newStr = str.replace(/[^0-9?]/g, "");

  const arr = newStr.split("");

  let sums = [];
  let sum = 0;
  let iterator = 0;
  arr.forEach((item) => {
    if (item != "?") {
      sum = parseInt(item) + parseInt(arr[iterator + 4]);
      sums.push(sum);
    }
    iterator += 1;
  });

  return sums.includes(10) ? true : false;
};

```
