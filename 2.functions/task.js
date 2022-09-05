// Задание 1
function getArrayParams(arr) {
  let max = -Infinity;
  let min = Infinity;
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
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Задание 3 
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return modulus = Math.abs(max - min)
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }
  }
  return max;
}
let resultWorker = makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker);
let resultWorker2 = makeWork([[-10, -20, -40], [10, 20, 30]], worker2);

console.log(resultWorker);
console.log(resultWorker2);
