class BasePage{
    verify(){
        console.log("Verify: the Base Page");
        
    }
}
class LoginPage extends BasePage{
    verify(){
        console.log("Verify: Username field Exist");
        console.log("Verify: Password field Exist");
        console.log("Verify: Login Button field Exist");
    }
}
class DashboardPage extends BasePage{
    verify(){
    console.log("Verify: Welcome Message appeared");
    console.log("Verify: side menu bar appeared")
       
    }
}
class CartPage extends BasePage{
    verify(){
    console.log("Verify: Cart iteam is displayed");
    console.log("Verify: total price is correct")  
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()]

// pages.forEach(function (page){
//     page.verify()
// })
for (let i=0 ; i<pages.length; i++){
    pages[i].verify()
}

