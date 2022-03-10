const FIRST_INPUT = +prompt('Введите число');
const SECOND_INPUT = +prompt('Введите систему счисления');

const FIRST_CONDITION = (isNaN(FIRST_INPUT) ) || (isNaN(SECOND_INPUT));
const SECOND_CONDITION = (FIRST_INPUT === '') || (SECOND_INPUT === '');
const THIRD_CONDITION = (SECOND_INPUT < 2) || (SECOND_INPUT > 16);


    if (FIRST_CONDITION ||  SECOND_CONDITION) {
        alert('Некорректный ввод!');
    } else if (THIRD_CONDITION) {        
        alert('Неправильная система счисления!')
    } else  {
        alert(FIRST_INPUT.toString(SECOND_INPUT));
    };


