class ICICI{

    #balance
    constructor(name, balance){
        this.name =name
        this.#balance = balance
    }
    getBalance(){
        return this.#balance
    }
    setBalance(balance, isCashier){
        if (isCashier){
             this.#balance = balance;
        }
        else{
            console.log("Not Allowed");
            
        }
       
    }

}

let jafar = new ICICI("Jafar", 800)
console.log(jafar);

jafar.setBalance(5000, false)
console.log(jafar.getBalance());
jafar.setBalance(5000, true)
console.log(jafar.getBalance());


