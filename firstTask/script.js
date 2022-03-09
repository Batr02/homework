let firstInput = +prompt('Введите число');

let secondInput = +prompt('Введите систему счисления');


    if ( (isNaN(firstInput) ) || (isNaN(secondInput)) || (firstInput === '') || (secondInput === '') ) {
            alert('Некорректный ввод!');
        } else if ( (secondInput < 2) || (secondInput > 16) ) {        
            alert('Неправильная система счисления!')
        } else  {
            alert(firstInput.toString(secondInput));
        };


