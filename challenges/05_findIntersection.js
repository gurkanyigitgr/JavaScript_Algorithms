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

// ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

/*
Have the function findIntersection(strArr) read the array of strings stored
in strArr which will contain 2 elements: the first element will represent a
list of comma-separated numbers sorted in ascending order, the second element
will represent a second list of comma-separated numbers (also sorted).
Your goal is tı return a cınna-separated string containing the numbers
that occur in elements of strArr in sorted order. If there is no intersection,
return the string false.
*/
