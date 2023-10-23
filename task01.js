'use strict';
//рекурсия генератор массива случайных чисел от 1 до 100
{
  const arrRandom = [];
  const numArr = function getArr() {
    let randomNumber = Math.ceil(Math.random() * 100);
    arrRandom.push(randomNumber);
    if (arrRandom.length === num) return console.log(`Массив из случайных ${num} чисел: `, arrRandom);
    getArr(arrRandom);
  };
  const num = +prompt('Введите количество элементов массива:');
  numArr(num);
}