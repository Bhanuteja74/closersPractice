const compose = function (...functions) {
  return function (...args) {
    return functions.reduceRight(function (params, f) { return [f(...params)]; }, args)
  }
}

const combine = function (firstFun) {
  return function (secondFunction) {
    return function (value) {
      return firstFun(secondFunction(value));
    }
  }
}

//
const add2 = (num) => num + 2;
const sub1 = (num) => num - 1;

const subAndAdd = combine(add2)(sub1);
//

const numbers = [1, 2, 3, 4, 5];

const isEven = (num) => (num & 1) === 0;
const getEvenNumbers = (list) => list.filter(isEven);

const add = (x, y) => x + y;
const sumOfNumbers = (list) => list.reduce(add, 0);

const addEvenNumbers = combine(sumOfNumbers)(getEvenNumbers);
//