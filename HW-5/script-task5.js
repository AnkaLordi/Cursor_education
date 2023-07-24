/*
1.Створіть функцію getRandomArray(length, min, max) – яка
повертає масив випадкових цілих чисел */

function getRandomArray(length, min, max) {
  length = Number(prompt("Desired array length:"));
  min = Number(prompt("Min value:"));
  max = Number(prompt("Max value:"));

  if (!Number.isInteger(length)) {
    length = prompt("Try it again with an integer!", "");
  }

  if (!Number.isInteger(max)) {
    max = prompt("Try it again with an integer!", "");
  }

  if (!Number.isInteger(min)) {
    min = prompt("Try it again with an integer!", "");
  }

  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }

  return arr;
}

const result_task1 = getRandomArray();
console.log("Task 1. Random array: ", result_task1);

/* 
3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
*/

function getAverage(numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (Number.isInteger(num)) {
      sum += num;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  const average = sum / count;
  return average;
}

const arr = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const result_task3 = getAverage(arr);
console.log("Task 3. Straight average: ", result_task3);

/**
4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
 */

function getMedian(numbers4) {

    function isInteger(num) {
        return Number.isInteger(num);
    }

    const filteredElements = numbers4.filter(isInteger); //відфільтрувала масив на цілі числа

    function compare (a, b) {
        return a - b;
    }

   filteredElements.sort(compare);

   const x = filteredElements.length;
   if(x === 0) {
    return 0;
   }

   const middle = Math.floor(x / 2);
   if(x % 2 === 0) {
    return (filteredElements[middle - 1] + filteredElements[middle] / 2)
   } else {
    return filteredElements[middle];
   }
}

const findMedian = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const finalMedian = getMedian(findMedian);
console.log(`Task 4. Arguments' median: `, finalMedian);

/** 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
передані як аргументи функції.
 */

function filterEvenNumbers(numbers) {
  const res = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num % 2 === 0) {
      res.push(num);
    }
  }

  return res;
}

const arr_task5 = [1, 2, 3, 4, 5, 6];
const result_task5 = filterEvenNumbers(arr_task5);
console.log("Task 5. Even numbers: ", result_task5);

/* 
6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
чисел більших 0
*/

function countPositiveNumbers(numbers_6) {
  const positiveNum = numbers_6.reduce(function (count, num) {
    if (num > 0) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return positiveNum;
}

const arr6 = [1, -2, 3, -4, -5, 6];
const res6 = countPositiveNumbers(arr6);
console.log("Task 6. Positive numbers from array: ", res6);

//інший варіант
function countPositiveNumbers_new(numbers6_new) {
  let count = 0;
  const res_ex6 = numbers6_new.filter(function (item, index, array) {
    if (item > 0) {
      count++;
      return true;
    } 
    return false;
  });

  return count;
}

const arr_6 = [1, -2, 3, -4, -5, 6];
const res_6 = countPositiveNumbers_new(arr_6);
console.log("Task 6. Positive numbers from array: ", res_6);



/* 
7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
*/

function getDividedByFive(digits) {
  const newArr = [];

  for (let i = 0; i < digits.length; i++) {
    const x = digits[i];

    if (x % 5 === 0) {
      newArr.push(x);
    }
  }

  return newArr;
}

const arr_task7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const result_task7 = getDividedByFive(arr_task7);
console.log("Task 7. Filtered numbers are: ", result_task7); //то найлегший варіант, але най би було, щоб руку набити

//воно ж
function getDividedByFive_2(newDigits) {
  const res_ex7 = newDigits.filter(function (item, index, array) {
    return item % 5 === 0;
  });

  return res_ex7;
}

const arr7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const res7 = getDividedByFive_2(arr7);
console.log("Task 7. Filtered numbers are: ", res7);
