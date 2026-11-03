
let text ="madam"
let reversedText=""

for (let i=text.length-1 ; i>=0; i--){
    reversedText = reversedText + text[i]
}
console.log(reversedText);

if (text== reversedText){
    console.log(`${text} is palindrome`);
    
}
else{
    console.log(`${text} not palindrome`);
    
}