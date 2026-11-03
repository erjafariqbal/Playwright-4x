//find the anagrams of the below given texts

let str1 = "evil"
let str2 = "live"

let sortA=str1.split("").sort().join("");
let sortB= str2.split("").sort().join("")


if (sortA===sortB){
    console.log("anagrams");
    
}
else{
    console.log("not Anagarms");
    
}
