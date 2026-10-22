let arr = [1,2,3]

//length of array

console.log(arr.length);


//ADD the element to End

//We use push feature to append the element at eld.

//Syntax :

// Array.Push(Value)
// can be pushed multiple element by assigning the value
// Array.push(value1, value2, ....)

arr.push(4)
console.log(arr);


//Remove Element at End

//pop is a feature which will help to remove the elemet from the end
//Syntax:
// Array.pop()

arr.pop()
console.log(arr);


// ADDing the elements at Begining using unshift feature

arr.unshift(0)

console.log(arr);

//We can remove the element from the Begining using shift feature

arr.shift()
console.log(arr);



//Splice : remove the element from the array and add the new element at their place if required.

 
arrs = [1,2,3,4,5,6]

arrs.splice(2,1)
console.log(arrs);


// It means it will select the index 2,
// it will remove the 1 element from the selected index
// It mean it will select index2 = 3 and remove this value form the array

// arrs = [1,2,4,5,6]

arrs.splice(2,0, 55)
// It mean index 2, remove the value start from index 2 . 
// Current Value is 0 so no element will be remove from the aray
// last value is 99 it mean this value will be inserted in after index because remove count was 0

// The final array will be like  [1,2,55,4,5,6]
// 
console.log(arrs);
