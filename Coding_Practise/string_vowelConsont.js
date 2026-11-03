let text ="Hello programming"
let vowel =0
let consonent =0

for (i=0; i<text.length; i++){
    
    if(text[i]>= "a" && text[i]<= "z"){
        if( text[i]==="a" || text[i]==="e" || text[i]==="i" ||text[i]==="o" ||text[i]==="u"){
            vowel =vowel+1
        }
        else{
            consonent =consonent+1
        }
    }
}
console.log(`Vowels: ${vowel} Consonents: ${consonent}`);
