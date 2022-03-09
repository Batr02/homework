let firstInput = +prompt('Введите первое число');
let secondInput = +prompt('Введите второе число');

    if ( (isNaN(firstInput) ) || (isNaN(secondInput)) || (firstInput === '') || (secondInput === '') ) {
            alert('Некорректный ввод!');
        } else {
            alert(firstInput + secondInput);
            alert(firstInput / secondInput);
        };

