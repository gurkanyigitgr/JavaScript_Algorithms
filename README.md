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
