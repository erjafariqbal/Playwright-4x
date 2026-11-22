class Father{
    eat(){
        console.log("I am eating");
        
    }
}
class Son extends Father{
    walk(){
        console.log("I am walking");
        
    }
}
const son = new Son()
son.walk()
son.eat()

const f = new Father()
f.eat()
f.walk()