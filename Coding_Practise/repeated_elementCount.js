//Q: Find and print the frequency of each element in an array.


let num =[1 ,2, 1, 3, 2]
let count ={}

for (let i =0 ; i<num.length; i++){
    if (num[i] in count){
        count[num[i]]= count[num[i]]+1
    }
    else{
        count[num[i]] =1
    }
    
}
for (let key in count){
    console.log(`${key} appears in ${count[key]} times`);
    
}


