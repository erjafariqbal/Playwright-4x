
class Credentials{
    #apiKey

    constructor(user, key){
        this.user = user;
        this.#apiKey = key
    }
    getAuthHeader(){
        return "Bearer" + this.#apiKey
    }

}

let cred = new Credentials("Admin", '#secretKey_123')
console.log(cred);
