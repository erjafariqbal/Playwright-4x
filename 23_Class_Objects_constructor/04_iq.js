//Javascripts allow only one constructor in a class

class Bad{
    constructor(a){}
    constructor(b){}
}

/** Error
 * file:///Users/zafariqbal/LearnJSTSPlaywright4x/23_Class_Objects/04_iq.js:5
    constructor(b){}
    ^^^^^^^^^^^

SyntaxError: A class may only have one constructor
 * 
 */