

class APIClient{

    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    get(path){
        return this.baseUrl + path
    }
}

let staging = new APIClient("htpps://staging.api.com")
let prod = new APIClient("https://prod.api.com")

console.log(staging.get("/users"));
console.log(prod.get("/users"));

