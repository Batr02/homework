function concatStrings(n1) {
  let current = n1;

  function next(n2) {
    if(n2 !== undefined) {  
      current += n2;
      return next;
    }    
    return current;
  }
  return next;
}

console.log(concatStrings("first")("second")('third')());

class Calculator {

  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

   setX(valueX) {
    if(typeof(valueX) === "undefined" || typeof(valueX) !== "number") {
      throw new Error('in setX')
    }
    this.num1 = valueX;
  }

  setY(valueY) {
    if(typeof(valueY) === "undefined" || typeof(valueY) !== "number") {
      throw new Error('in setY');
    }
    this.num2 = valueY;
  }

  logSum() {
    return this.num1 + this.num2;
  } 

   logMul() {
    return this.num1 * this.num2;
  } 
  
   logSub() {
    return this.num1 - this.num2;
  } 
  
   logDiv() {
     if(this.num2 === 0) {
      throw new Error('0')
     }
    return this.num1 / this.num2;
  }

}

const calculator = new Calculator(12, 3);
console.log(calculator.logSum()); 
console.log(calculator.logDiv()); 
calculator.setX(15);
console.log(calculator.logDiv());


