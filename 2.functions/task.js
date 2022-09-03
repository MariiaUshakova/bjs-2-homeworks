// Задание 1
function getArrayParams(arr) {
  let max = -100;
  let min = 100;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let average = sum / arr.length;

  return { max: max, min: min, avg: +average.toFixed(2) };
}

let result = getArrayParams([-99, 99, 10]);

console.log(result);




// Задание 2
function worker(arr) {
  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = worker(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
let result = makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker);

console.log(result)




// Задание 3
function worker2(arr) {
  // Ваш код
}
