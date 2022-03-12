Array.prototype.myFilter = function(callback, context) {
       
    const arr = [];

    for( i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i])
        }
    }

    return arr;
}

const ARR_FOR_FILTER = [0,1,2,3,4,5,6,7,8,9];


const NEW_ARRAY_FOR_FILTER = ARR_FOR_FILTER.myFilter( (element) => ( element > 5 ))

console.log(NEW_ARRAY_FOR_FILTER);


//2
//=========================================================
Array.prototype.myReduce = function(callbackFn, initialValue) {

  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {

      if (accumulator !== undefined) {
        accumulator = callbackFn.call(undefined, accumulator, this[i],   i, this);
      } else {
        accumulator = this[i];
      }
    }

    return accumulator;
  }

  const ARR_FOR_REDUCE = [1, 2, 3, 4]


const NEW_ARR_FOR_REDUCE = ARR_FOR_REDUCE.myReduce((previousValue, currentValue) => previousValue + currentValue, 0)

console.log(NEW_ARR_FOR_REDUCE);