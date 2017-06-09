'use strict';




// range: (number, number) => number[]

const range = (x, y) => {
  let arr = Array.apply({ length: x = y });
  for (let c = 0; c <= y; c++) {
    if (c != 0) arr[c] = c;
  }
  return arr;
};

// type Config = [number, string][]
const config = [[3, 'Fizz'], [5, 'Buzz']];

// type num = [number, string][] => (number, string)
const fiz = (num1, num2) => [config[0][0], config[1][0]];
const buz = (str1, str2) => [config[0][1], config[1][1]];

// fizzbuzz: (number[], config) => undefined
const fizzbuzz = (range, config) => {
  let i = 0;
  let finArr = [];
  for (item in range) {
    if (item % fiz(config)[0] === 0 && item % fiz(config)[1] === 0 && item > 0) item = item + ' : ' + buz(config)[0] + buz(config)[1];else if (item % fiz(config)[0] === 0) item = item + ' : ' + buz(config)[0];else if (item % fiz(config)[1] === 0) item = item + ' : ' + buz(config)[1];else item = false;
    finArr[i] = item;
    i++;
  }
  let res = finArr.filter(x => x !== false);
  console.log(res);
  return res;
};

fizzbuzz(range(1, 115), config
//console.log(fiz(config))
//console.log(buz(config))
//console.log(range(1, 115))
);
