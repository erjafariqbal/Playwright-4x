
//Numbers 1 to n with exactly one missing. First line is n, second line has the n-1 remaining numbers separated by spaces.
//  Print the missing number.

let arr =[1, 2 ,4 ,5]
let n=5

let expected_Number = n*(n+1)/2
let actual_Number =0

for (let i=0; i<arr.length; i++){
    actual_Number = actual_Number+arr[i]

}
console.log(expected_Number-actual_Number);
