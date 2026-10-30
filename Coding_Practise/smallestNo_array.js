let num = [5,3,8,1,9]
num.sort((a,b)=>a-b)

console.log(num[0]);


let smallestNo = num.reduce((a,b)=>a<b ? a :b ) 
console.log(`smallest No of array : ${smallestNo}`);
