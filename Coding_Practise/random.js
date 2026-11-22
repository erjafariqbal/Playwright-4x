let str ="abcdabcd"
let count ={}

for (let i =0 ; i<str.length; i++){
    if( str[i] in count){
        count[str[i]]= count[str[i]]+1
    }
    else{
        count[str[i]]=1
    }
   
    
}
//  let result = ""
//  for (let key in count){
//     result = result + key + count[key]
//  }
//  console.log(result);
 
let result = ""
for (let key in count) {
    result = result + key + count[key]
}

console.log(result)  
