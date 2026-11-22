class TestCases{
    #status ="not run"
    static #count =0

    constructor(name){
        this.name = name
        TestCases.#count++

    }
    run(pass){
        return this.#status =pass ? "PASSED" : "FAILED"
    }
    getStatus(){
        return this.#status
    }
    static getCount(){ return TestCases.#count}
    static setCount(v){
        TestCases.#count = v
    }
}

let tc = new TestCases("login")
tc.run(true)
console.log(tc.getStatus());

new TestCases("login")
new TestCases("login")
new TestCases("login")
console.log(TestCases.getCount())


