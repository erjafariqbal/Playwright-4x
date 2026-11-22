class BasePage{
    constructor(pageName){
        this.pageName = pageName
    }
    open(){
        console.log("Opening the Page");
        
    }
    close(){
        console.log("Closing the Page");
        
    }
}

class LoginPage extends BasePage{

}

let page = new LoginPage()
page.open()
page.close()
