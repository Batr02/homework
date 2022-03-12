// #1
//====================================
function deepClone (obj) {
    const clone = Object.assign({}, obj);
  
    Object.entries(clone).forEach(([key, value]) => {
        if ( typeof value === 'object') {
            clone[key] = deepClone(value);
        } else {
            clone[key] = value;
        }
    });
  
    return clone;
};
//====================================


// #2
//====================================
let begginigOfInterval;
let endOfInterval;


function isValidArrayOfInterval(arr) {   
    if ( Array.isArray(arr) && arr.every( (item) => typeof(item) === 'number') ) {
        return true;
    } else {
        throw new Error('Неправильный массив');
    }

};
  
function isValidNumberOfInterval(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('Неправильное число');
    } else {
        return true;
    }

};
  
  
function intervalNumberSetting(firstNumber, secondNumber) {   
    if (firstNumber <= secondNumber) {
        (begginigOfInterval = firstNumber) && (endOfInterval = secondNumber);
    } else {
        (begginigOfInterval = secondNumber) && (endOfInterval = firstNumber);
    }

    return [begginigOfInterval,endOfInterval];
};
  
  
function selectFromInterval(arr, firstNumber, secondNumber) {
      
    isValidArrayOfInterval(arr)
    isValidNumberOfInterval(firstNumber, secondNumber)
    intervalNumberSetting(firstNumber, secondNumber)
      
    const result = arr.filter(function (item) {  
        
    if ( (item >= begginigOfInterval) && (item <= endOfInterval) ) {
          return true;
        }
    });
    
    return result; 
}; 
//====================================


// #3
//====================================
const myIterabale = {
    from: 1,
    to: 4
};


function isValidNumber() {
    let isValid;
    let getValues = Object.values(myIterabale);
   
    getValues.every(function(item) { 
        if (typeof item === "number") {
            return isValid = true;
        } else {
            return isValid = false;
        }
    });
    return isValid;
};



if ( !isValidNumber() || (myIterabale.to < myIterabale.from) ) {
    console.log("Неправильные данные");
} else {
    myIterabale[Symbol.iterator] = function() {
     
        return {
            current: this.from,
            last: this.to,
    
            next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
                }
            }
        };  
    }
};


for (let item of myIterabale) {
    console.log(item); 
};

//====================================
