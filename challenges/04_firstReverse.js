export const firstReverse = (str) => {
  const arr = str.split("");
  const reversedArr = arr.reverse();
  const newStr = reversedArr.join("");
  return newStr;
};

/*
    First Reverse
Have the function firstReverse() take the str parameter being passed 
and return the string in reversed order.
*/
