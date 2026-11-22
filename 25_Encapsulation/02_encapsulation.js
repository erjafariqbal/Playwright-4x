class Person{
    //hide my variable
    #child1
    #child2
    constructor(name, child1,child2){
        this.name =name
        this.#child1 = child1
        this.#child2 = child2

    }
    getChild(){
        return this.#child1
    }
    setChild(changed_name){
        this.#child1 = changed_name
    }

}

let p = new Person("Pramod", "Pavan", "Jenny")
//console.log(p.#child1); //Not allowed to access the variable otside of class
console.log(p.getChild());

p.setChild("School")

console.log(p.getChild());


