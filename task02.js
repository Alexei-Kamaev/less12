'use strict';
//рекурсия генератор массива случайных чисел от 0 до 10 в массив 50 раз
{
  const arrRandom = [];
  const numArr = function getArr() {
    let randomNumber = Math.round(Math.random() * 10);
    arrRandom.push(randomNumber);
    if (arrRandom.length === 50) return arrRandom;
    getArr(arrRandom);
  };
  numArr(arrRandom);
  console.log(arrRandom);
}