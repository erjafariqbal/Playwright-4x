let i = 1; 

let r = i++ > 1 ? i++ : ++i;  // r = 1>1 which is false 
                               // current value of i = 2 ++i then i =3, and r =3

console.log(r, i);   //3,3