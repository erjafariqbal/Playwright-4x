let num =[1,2,3,4,2,1]
let count ={}
let dup =[]

for (let i =0; i< num.length; i++){
    if(num[i] in count){
        count[num[i]] = count[num[i]] +1
        
    }
    else{
        count[num[i]]=1
    }
}
//console.log(count);

for (let key in count){
    if (count[key]>1){
        dup.push(Number(key))
    }
}
if (dup.length>0){
    console.log(dup.join
    );
    
}
else{
    console.log("No Duplicate found");
    
}