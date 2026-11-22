class Animal{
    constructor(name){
        this.name =name
    }
    eat(){
        console.log(this.name + "is eating");
    }
    sleep(){
        console.log(this.name + "is sleeping");
        
    }

    foo(){
        console.log("Foo Called"); 
    }

}

class Dog extends Animal{
    constructor(name, breed){
       super(name) // it is used for parrent constructor

    }
    bark(){
        super.foo()  //using super we can call the parrent function as well.
            console.log(this.name, "is barking");
        
    }
}

let dog = new Dog("Rex", "Labrador")
dog.eat()
dog.sleep()
dog.bark()
console.log(dog.name);
console.log(dog.breed);

