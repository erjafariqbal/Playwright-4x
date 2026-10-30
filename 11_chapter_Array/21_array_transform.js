// 
/**
 * Transform method
 * 
 * 1. Map  ---- array.map((a,b)=> a>70)
 * 2. Filter ---- array.filter((a,b)=> a>50)
 * 
 * every ==> means each of the element must match the conditions then the condition will be true
 * 
 * some => some of the element satisfied the condition  condition will be true
 * 
 * 
 */


let arr = [2,40,34,54,55,9]

let every = arr.every(s => s>0)
console.log(every);


