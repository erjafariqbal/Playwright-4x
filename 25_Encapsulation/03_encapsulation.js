class Car{
    #engine

    constructor(name, engineName){
        this.name = name
        this.#engine = engineName
    }
    
}

let tesla = new Car ("Tesla", "V8")