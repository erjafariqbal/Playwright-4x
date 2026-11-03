/** String
 * Strings are sequence of charector
 * Javascripts provide many methods for string manipulation.
 * A string is a sequence of characters used to repersent the text
 * In software Testing strings are everywhere,  --> URLS, selectors,assertions, response message, log parshing.
 * 
 */

const { PassThrough } = require("node:stream");

//Creating Strings

let url = "https://app.vwo.com";
let status = "pass";
let message = `Test completed in ${320} ms` ; // template litrals


console.log("A".charCodeAt(0));
console.log("a".charCodeAt(0));

console.log(url.length);

console.log(message);

//Single quotes
let a = 'hello'

//Double quotes

let b ="World"

let name1 = "Alice"
let msg = `Hello, ${name1} ! 2+2 = ${2+2}`
console.log(msg);

//Multiline String

let report = `
Test: Login
Status: Pass
Duration: 320ms
`

console.log(String(200));
String(true)
String(null)
String([1,2]) //"[1,2]"





