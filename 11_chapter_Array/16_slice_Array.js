//slice :

let arr =[1,3,4,6,3]
//slice.(start, end-1)

// It returns a new array
// it does not mutate the actual array
// if end is not mention then it will select all the element till end.
//I will create a new array
//It will always move from left to right
//if slice(start, end-1) is in backword direction then it will give an empty array.

let a = [1,2,3,4,5]

let slice=a.slice(3,4)
console.log(a);
console.log(slice);


