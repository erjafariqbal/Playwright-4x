
## Multilevel Inheritance in JavaScript

## Definition
Multilevel inheritance means a class inherits from a parent class, and that parent class inherits from another class, forming a chain.

```
Grandparent → Parent → Child
```

The child class gets access to the properties and methods of **every class above it** in the chain.

## Syntax

```javascript
class GrandParent {
  methodA() { console.log("Method from GrandParent"); }
}

class Parent extends GrandParent {
  methodB() { console.log("Method from Parent"); }
}

class Child extends Parent {
  methodC() { console.log("Method from Child"); }
}

const obj = new Child();
obj.methodA(); // inherited from GrandParent
obj.methodB(); // inherited from Parent
obj.methodC(); // own method
```

## How It Works
- The `extends` keyword creates the inheritance link.
- Under the hood, JavaScript uses the **prototype chain**.
- When you call a method, JavaScript looks for it on the object first, then checks each parent up the chain until it finds the method or reaches `null`.

## Key Points for Interviews
1. **`extends`** is used to inherit from a parent class.
2. **`super()`** must be called in a child constructor before you use `this`.
3. **`super.methodName()`** calls the parent's version of a method.
4. **Method overriding**: a child can redefine a parent method. The closest one in the chain wins.
5. JavaScript supports **single** and **multilevel** inheritance, but **not multiple inheritance**. A class can extend only one class. (Mixins can work around this.)
6. `instanceof` returns `true` for every class in the chain. For example, `obj instanceof GrandParent` is `true`.

## One-Line Answer
> Multilevel inheritance is a chain of inheritance (A → B → C) where the last class inherits the features of every class above it, implemented in JavaScript with `extends` and `super` over the prototype chain.