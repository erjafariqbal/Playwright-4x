class TestCase{

    constructor(name, stats, priority){
        this.name =name
        this.stats =stats
        this.priority =priority

    }

    display(){
        console.log(this.name + "->" + this.stats +"->" + this.priority);
        
    }

}

let ref_Test_login = new TestCase("Login Test", "Pass", "P0")
let ref_Test_Signup = new TestCase ("Signup Test", "Fail", "P1")

ref_Test_login.display()
ref_Test_Signup.display()

