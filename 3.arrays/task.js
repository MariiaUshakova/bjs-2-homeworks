// Задача-1
function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  return result;
}
console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

// Задача-2
function advancedFilter(arr) {
  let resultArr = arr
    .filter((item) => item > 0)
    .filter((item) => item % 3 === 0)
    .map((item) => item * 10);

  return resultArr;
}
console.log(advancedFilter([-1, 6, -9, 3]));
console.log(advancedFilter([-10, -21, 12, 123]));
console.log(advancedFilter([-1, -2]));
