const FIRST_INPUT = +prompt('Введите первое число');
const SECOND_INPUT = +prompt('Введите второе число');

const FIRST_CONDITION = (isNaN(FIRST_INPUT) ) || (isNaN(SECOND_INPUT));
const SECOND_CONDITION = (FIRST_INPUT === '') || (SECOND_INPUT === '');



    if (FIRST_CONDITION ||  SECOND_CONDITION) {
        alert('Некорректный ввод!');
    } else {
        alert(FIRST_INPUT + SECOND_INPUT);
        alert(FIRST_INPUT / SECOND_INPUT);
    };

 
    
        