let num = +prompt('Введите 5-ти значное число: ', 39671);

let one = parseInt(num / 10000) % 10;
let two = parseInt(num / 1000) % 10;
let three = parseInt(num / 100) % 10;
let four = parseInt(num / 10) % 10; 
let five = num % 10;

let num1 = one * two * three * four * five;
let num2 = (one + two + three + four + five) / 5;

console.log('Произведение цифр: ' + num1);
console.log('Среднее арифметическое: ' + num2);