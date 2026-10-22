/**
 * Array is a collection of values.
 * Javascripts arrays are dynamic and can hold mixed types.
 * An orderded, zero-indexd, mutable collection.
 * Type [] is object -> us Array.isArray() to check
 */


const browser = ["Chrome", "Firefox", "webkit"]
console.log(browser[0]);  //chrome
console.log(browser[1]);  // Firefox
console.log(browser[2]);  // Webkit
console.log(browser.at(-1));  //Webkit
console.log(browser[-1]);   // undefined

console.log(browser.length);  //3

