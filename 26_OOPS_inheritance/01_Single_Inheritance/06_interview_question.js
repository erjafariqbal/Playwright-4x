class TestCase{
    execute(){
        console.log("Running generic test");
    }
}
class UnitTest extends TestCase{
    execute(){
        console.log("Running Unit Test: Checking One Function");
    }
}
class APITest extends TestCase{
    execute(){
        console.log("Running API Test: sending Https requests");
    }
}
class E2ETest extends TestCase{
    execute(){
        console.log("Running E2E Test: Opening the Browser");
    }
}

let tests = [new UnitTest(), new APITest(),new E2ETest()]
tests.forEach(function (test){
    test.execute()
})

