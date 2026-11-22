class A{
    who(){
        return "A"
    }
}
class B extends A{
    who(){
        return "B>" + super.who()
    }
}

class C extends B{
    who(){
        return "C>" + super.who()
    }
}
let c = new C()
console.log(c.who());


//C>B>A
