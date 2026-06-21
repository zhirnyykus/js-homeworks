let num = +prompt('Введите число от 1 до 99: ');

if (num >= 1 && num <= 99) {
    let lastNum = num % 10;
    
    if ((num >= 11 && num <= 14) || lastNum === 0 || (lastNum >= 5 && lastDigit <= 9)) {
        alert(`${num} копеек`);
    } else if (lastNum === 1) {
        alert(`${num} копейка`);
    } else if (lastNum >= 2 && lastNum <= 4) {
        alert(`${num} копейки`);
    }
} else {
    alert('Недопустимое значение! Введите число от 1 до 99');
}

