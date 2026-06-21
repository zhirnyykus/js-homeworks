let count = +prompt('Введите количество символов: ', 15);
let symbol = prompt('Введите тип символа (например, @ или *): ', '@');
let orientation = +prompt('Выберите ориентацию: 0 - горизонтальная, 1 - вертикальная', 0);

if (count > 0 && (orientation === 0 || orientation === 1) && symbol !== '') {
    
    for (let i = 0; i < count; i++) {
        if (orientation === 0) {
            document.write(symbol);
        } else {
            document.write(symbol + '<br>');
        }
    }
    
} else {
    alert('Некорректные данные! Проверьте все введенные значения.');
}