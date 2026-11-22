class Student {
    static collegeName = "PW AT Batch"
    static mentorName =" Pramod Datta"

    constructor(name,score){
        this.name = name
        this.score = score
    }
    static display(){
        console.log(this.name + "are part of the", Student.collegeName + this.score);
        
    }
    nsf(){
        console.log((this.name));
        
    }
    
}

let amit = new Student("amit", 60)
let jafar = new Student("Jafar",80)
let sumu = new Student("sumu",77)
let padmini = new Student("Padmini",78)

console.log(Student.collegeName);
console.log(amit.name);

