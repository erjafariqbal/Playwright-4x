let num =[1 ,2, 3, 4]
 let even =[]
 let odd =[]

 for (let i =0 ; i<num.length; i++){
    if (num[i]%2===0){
        even.push(num[i])
    
    }
    else{
        odd.push(num[i])
    }
    
 }
//  console.log("Even Numbers:",even);
//  console.log("Odd Numbers:",odd.join(''));

console.log(`Even Numbers: ${even.join(' ')} Odd Numbers: ${odd.join(' ')}`)
 
 
 