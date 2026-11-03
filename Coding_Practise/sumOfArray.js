let arr =[12 ,34 ,10]

// let sum = arr.reduce((a,b)=>a+b)
// console.log(sum);


// for(let i=0; i< arr.length; i++ ){
//     sum = sum + arr[i]
// }
// console.log(sum.join(''));


let total = arr.map(row=>row.reduce((a,b)=>a+b))
console.log(total);
