
class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }


class Stack {
      constructor(maxAmount) {
      this.head = null;
      this.tail = null;
      this.maxAmount = maxAmount;
      this.isValidMaxAmount();
      this.isUndefined();
      }

      isValidMaxAmount () {
      let isValidMaxAmountCondition = 
      (this.maxAmount !== undefined) && (typeof(this.maxAmount) !== "number")

      if ( isValidMaxAmountCondition ) {
          throw new Error("Invalid input");
        }
      }

    isUndefined() {
      if(this.maxAmount === undefined) {
          this.maxAmount = 10;
        }
      }

    push(value) {
      const newNode = new LinkedListNode(value);
      
      if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;
      
          return this;
      }
      
      this.tail.next = newNode;
      
      this.tail = newNode;

      if (this.toArray().length > this.maxAmount ) {
        return this.pop();
      }
    
      return this;
    }

    toArray() {
      
      const nodes = [];
      
      let currentNode = this.head;
      
      
      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }

      return nodes;
    }

    pop() {
      if (!this.tail) {
        return null;
      }

      const deletedTail = this.tail;
    
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
    
        return deletedTail;
      }
    
      let currentNode = this.head;

      while (currentNode.next) {
        if (!currentNode.next.next) { 
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }

      this.tail = currentNode;
      
      return deletedTail;
    }

    peek() {
      return this.tail
    }

    isEmpty() {
      if(this.toArray().length === 0) {
        return true;
      }

      return false;
    }

    static fromIterable(obj) {
      const fromIterableCondition = 
      (typeof obj[Symbol.iterator] === 'function' || obj == null);

      if(!fromIterableCondition) {
        throw Error("not iterable!")
      }

      let fromIterableNew = new Stack();

      for(let i = 0; i < obj.length; i++) {
        fromIterableNew.push(obj[i])
      }

      return fromIterableNew;
  }
}
    
let stack = new Stack();
console.log(stack);
console.log(Stack.fromIterable([1, 2]));


        
     
    
// module.exports = { Stack };
