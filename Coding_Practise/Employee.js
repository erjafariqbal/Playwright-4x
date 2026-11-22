class Employee{

    empId
    empName
    empAge
    empSalary

    constructor(id, Name, age, salary){
        this.empId =id
        this.empName = Name
        this.empAge = age
        this.salary = salary
    }
    
    employeeInformation(){
    console.log(`The Employee Name : ${this.empAge}`);
    
}
}

let newEmployee = new Employee(10, "Jafar", 23,54000)
console.log(newEmployee);
console.log(newEmployee.empName)

newEmployee.employeeInformation()