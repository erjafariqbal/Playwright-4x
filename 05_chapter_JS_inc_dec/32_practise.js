let a = 100;

console.log(a++ + ++a +a++ + ++a);

console.log(a);

//Explanation

//A = a++ => A = 100 and a =101
//B =++a  B = 1+101 => B =102, a =102
//C = a++ C = 102 a = 102+1 =103
//D = ++a, 1+a = 1+103 = 104, a=>104
// Answer = 408, 