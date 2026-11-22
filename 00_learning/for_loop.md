# For Loop in JavaScript — Interview Notes

---

## 1. `for` Loop (Traditional)

**Definition:** A control flow statement that repeats a block of code a **known number of times** using an **initializer**, a **condition**, and an **increment/decrement**.

**Syntax:**

```js
for (initialization; condition; increment) {
    // code to execute
}
```

**Example:**

```js
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// apple
// banana
// mango
```

**Key Points:**

- Gives direct access to **index** (`i`)
- Supports `break` and `continue`
- Works with `async/await`
- Best when you need **index-based logic** (skip elements, loop backward, custom step)

---

## 2. `for...of` Loop (ES6+)

**Definition:** Iterates directly over the **values** of any iterable (arrays, strings, Maps, Sets). No index needed.

**Syntax:**

```js
for (let value of iterable) {
    // code to execute
}
```

**Example:**

```js
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
// apple
// banana
// mango
```

**Key Points:**

- Gives **values directly** — cleaner than `for` when index is not needed
- Supports `break` and `continue`
- Works with `async/await`
- Does **NOT** work on plain objects — use `for...in` for objects

---

## 3. `for...in` Loop

**Definition:** Iterates over the **enumerable property keys (indices)** of an object or array. Returns keys as **strings**.

**Syntax:**

```js
for (let key in object) {
    // code to execute
}
```

**Example:**

```js
let students = ["Alex", "John", "Sara"];

for (let index in students) {
    console.log(index, students[index]);
}
// "0" Alex
// "1" John
// "2" Sara
```

**Key Points:**

- Designed for **objects**, not arrays
- Index comes as a **string**, not a number
- Also picks up **inherited enumerable properties** — can cause unexpected results
- **Not recommended for arrays** — use `for`, `for...of`, or `forEach`

---

## 4. `forEach()` Method

**Definition:** A **built-in array method** that executes a callback function **once per element**. Receives value, index, and the array itself.

**Syntax:**

```js
array.forEach((value, index, array) => {
    // code to execute
});
```

**Example:**

```js
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: mango
```

**Key Points:**

- Callback receives **(value, index, array)**
- ❌ Cannot use `break` or `continue`
- ❌ `return` only skips that one iteration (does NOT exit the loop)
- ❌ Not `async/await` friendly
- Returns `undefined`

---

## Quick Comparison Table

| Feature             | `for`     | `for...of` | `forEach`  | `for...in`         |
| ------------------- | --------- | ---------- | ---------- | ------------------ |
| **Gives you**       | index     | value      | value + index | key (as string) |
| **`break/continue`** | ✅ Yes   | ✅ Yes     | ❌ No      | ✅ Yes             |
| **`async/await`**   | ✅ Yes    | ✅ Yes     | ❌ No      | ✅ Yes             |
| **Best for arrays** | ✅ Yes    | ✅ Yes     | ✅ Yes     | ⚠️ Not recommended |
| **Works on objects** | ❌ No    | ❌ No      | ❌ No      | ✅ Yes             |

---

## When to Use What?

| Scenario                              | Best Choice  |
| ------------------------------------- | ------------ |
| Need index and full control           | `for`        |
| Just need values, clean syntax        | `for...of`   |
| Need value + index, no break needed   | `forEach`    |
| Iterate object properties             | `for...in`   |
| Need to break early                   | `for` or `for...of` |
| Async iteration                       | `for` or `for...of` |

---

## Interview One-Liners

- **`for...in` vs `for...of`:** *"`for...in` gives keys, `for...of` gives values."*
- **Can you break `forEach`?** *"No. Use `for` or `for...of` if you need to break."*
- **Which loop for objects?** *"`for...in` — it's designed for enumerating object properties."*
- **Which is best?** *"It depends on the use case"* — then explain trade-offs.

