const array=[1,2,3,4]

const reducer = (accumulator,currentValue)=>accumulator+currentValue;

console.log(array.reduce(reducer))

console.log(array.reduce(reducer,5))