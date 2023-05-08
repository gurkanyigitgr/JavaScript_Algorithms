import { userValidation } from "./challenges/01_userValidation.js";
import { longestWord } from "./challenges/02_longestWord.js";
import { firstFactorial } from "./challenges/03_firstFactorial.js";
import { firstReverse } from "./challenges/04_firstReverse.js";
import { findIntersection } from "./challenges/05_findIntersection.js";

console.log(userValidation("u_hello_world123")); // output : true

console.log(longestWord("fun?!! time")); // output : "time"

console.log(firstFactorial(5));

console.log(firstReverse("Spectacular"));

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
