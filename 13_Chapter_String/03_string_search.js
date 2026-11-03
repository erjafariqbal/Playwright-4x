//Searching and Checking


let url ="https://staging.vwo.com/api.login?retry=true"

//include

url.includes("staging");
url.includes("production");

//startWith /endWith

url.startsWith("htpps")
url.startsWith("//")
url.endsWith("true")


// indexOf   //lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));


