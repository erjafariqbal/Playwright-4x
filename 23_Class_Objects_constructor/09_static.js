class TestRunner{
    static totalTests =0
    static passCount =0

    constructor(name, passed){
        this.name =name
        TestRunner.totalTests++
        if(passed){
            TestRunner.passCount++
        }
    }


}

 let t1 = new TestRunner("loginTest", true)
 let t2 = new TestRunner("Signup", false)
 let t3 = new TestRunner("dashboard", true)
 let t4 = new TestRunner("supportTest", true)
 console.log("Total Test:", TestRunner.totalTests);
 console.log("PassCount:", TestRunner.passCount);
 console.log(t1.name);
 console.log(t2.name);
 console.log(t3.name);
 console.log(t4.name);

 
 
 




