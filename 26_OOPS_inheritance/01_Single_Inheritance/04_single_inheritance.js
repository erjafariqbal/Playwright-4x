class BaseTest{
    setup(){console.log("Base : Open the Browser");
    }
}

class APITest extends BaseTest{
    setup(){console.log("APITest: Open the Browser");
    }
}

let test = new APITest()
test.setup() // This setup will call the function where the object is created means APITest not BaseTest