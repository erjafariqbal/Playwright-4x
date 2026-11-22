// Run Time Polymorphism --> Means Method Overriding

class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}
class APIPage extends BaseTest{
    setup() {
        console.log("APITest: open browser");
    }
}
let btest = new BaseTest();
let test = new APIPage();
test.setup();  //this setup will call to setup of APIPage Class
btest.setup();  // This will call setup of BaseTest class