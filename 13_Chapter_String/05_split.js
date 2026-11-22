//Split (Separator): splits the string into an arrayof substring based on specific separator

let email = "jafar@gmail.com"

//sepatate the domain from this email id

let domain = email.split("@")[1].split(".")[0]
console.log(domain);

//The step we follow

//   email.split("@")  // [ 'jafar', 'gmail.com' ]
//email.split("@")[1]  // gmail.com
// email.split("@")[1].split(".") // ["gmail", "com"]
// email.split("@")[1].split(".")[0]



 class Employee{
    empId
    employeeName
    empAge

    constructor(id,name,age){
        this.empId = id
        this.employeeName = name
        this.empAge = age

    }

}
    let obj1 = new Employee(101, "Jafar", 35)
    console.log(obj1.empId);
    
