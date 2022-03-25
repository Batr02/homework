class Stack {    
    constructor(maxAmount) {
        this.maxAmount = maxAmount;
        this.size = 0;
        this.tail = 0;
        this.head = 0;
        this.storage = {};
        this.isValidMaxAmount();
        this.isUndefined();
    }

   static fromIterable(obj) {   
        if (obj === undefined) {
            throw Error ('not iterable!')
        }

        let iterableStack = new Stack()
        iterableStack.maxAmount = obj.length;
        iterableStack.storage = Object.assign({}, obj);

        return iterableStack;
   }

    isValidMaxAmount () {
        let isValidMaxAmountCondition = 
        (this.maxAmount !== undefined) && (typeof(this.maxAmount) !== "number");

        if ( isValidMaxAmountCondition ) {
            throw new Error("Invalid input");
        }
    }

    isUndefined() {
        if(this.maxAmount === undefined) {
            this.maxAmount = 10;
        }
    }

    push (data) {
        let size = ++this.size;
        this.storage[size] = data;

        if(this.size > this.maxAmount) {
            return this.pop();
        }
    }
    
    pop () {
       let size = this.size;

       if(size === 0) {
           throw Error("Stack is Empty");
       }
    
       if (size) {
        let deletedData = this.storage[size];
        
        delete this.storage[size];
        this.size--;

        return deletedData;
        }
    }

    peek() {
        let getElem = Object.keys(this.storage) [Object.keys(this.storage).length - 1];
        return this.storage[getElem];    
    }

    isEmpty() {
        if (this.size === 0) {  
            return true;
        }

        return false;
    }

    toArray() {
        let storageArray = Object.values(this.storage);
        
        return storageArray;
    }

}

let stack = new Stack();
console.log(stack);
// module.exports = { Stack };
