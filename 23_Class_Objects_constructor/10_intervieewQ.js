
let a =10

class TestRunner{
    static totalTests =0
    static passCount =0

    constructor (name, passed){
        this.name =name
        TestRunner.totalTests ++
        if(passed){
            TestRunner.passCount++
        }
        console.log(a);
        
    }
    //non static fn
    jafar_fn(){
        return this.name
    }

    static summary(){
        return TestRunner.passCount + "/" + TestRunner.totalTests + "Passed"
    }


}
 let t1 = new TestRunner("Login", true)
t1.jafar_fn()
 let t2 = new TestRunner("Signup", false)
 let t3 = new TestRunner("Cart", true)
 let t4 = new TestRunner("Checkout", true)

 console.log(TestRunner.summary);
 
 //to call non static function

 //new TestRunner("Login", true).jafar_fn()