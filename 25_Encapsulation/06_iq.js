class Bug{
    constructor(tittle, severity){
        this.tittle = tittle
        this.severity = severity
    }
    display(){
        console.log("[" + this.severity + "]" + this.tittle);
        
    }

}

let b1 =new Bug("Login Crash", "Critical")
let b2 = new Bug("Type in footer", "low")

b1.display()
b2.display()