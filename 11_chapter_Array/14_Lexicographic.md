## 🔤 Lexicographic Sort — Key Concepts

**Lexicographic sort** is sorting based on **character-by-character comparison** (like dictionary/alphabetical order), not numeric value.

---

### 🔑 Key Concept

> Characters are compared by their **Unicode/ASCII code point** values, not their numeric magnitude.

```js
// ⚠️ Default .sort() uses LEXICOGRAPHIC order
[10, 9, 2, 100, 21].sort();
// → [10, 100, 2, 21, 9]  ❌ (not numeric!)

// Why? "10" < "2" because '1' (49) < '2' (50) in Unicode
```

---

### 📌 Core Rules

| Concept | Explanation |
|---|---|
| **Left-to-right** | Compares first char, then second, etc. |
| **Unicode basis** | Uses char code: `'A'=65`, `'a'=97`, `'0'=48` |
| **Length fallback** | If all chars match, shorter string comes first |
| **Default `.sort()`** | Always lexicographic — converts to string first |

---

### ✅ Fix for Numeric Sort

```js
// Use a comparator function to override lexicographic behavior
[10, 9, 2, 100, 21].sort((a, b) => a - b);
// → [2, 9, 10, 21, 100]  ✅ (numeric order)
```

---

### 🧠 One-liner Summary

> **Lexicographic = Dictionary order by character codes.** `"10" < "9"` because `'1' < '9'`, ignoring numeric value entirely.