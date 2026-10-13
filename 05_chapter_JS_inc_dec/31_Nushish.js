let amul = null;

let val = amul ?? "Country Delight"
console.log(val);


// If the first condition is null then the second condition will be assigned to first value.

// in the above example first condition amul = null so the val value should be countrydeligh



// in real scenario the example is given below

let api_response = null
let responseData = api_response ?? "{}";

console.log(responseData);


let api_response2 = "Jafar"
let responseData2 = api_response2 ?? "{}";
console.log(responseData2);



//Above concept is called as Nushish coaleshing