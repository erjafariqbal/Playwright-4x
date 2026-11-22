class BaseTest{
    constructor(){
        console.log("Parent");
    }
    setup(){
        console.log("Base: Open the Browser");
    }
    tearDown(){
        console.log("Base: Close the Browser");
    }

}
class UITest extends BaseTest{
    constructor(){
        super()
    }
    setup(){
        super.setup()
        console.log("UI: Maximize the Window");
        
    }
    tearDown(){
        console.log("UI: take screenshot");
        
        super.tearDown()
    }
}

