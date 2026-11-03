# Regular Expression (Regex) - Email Extraction

## Overview
Regular expressions (RegEx) are patterns used to match character combinations in strings. In JavaScript, RegEx is commonly used with methods like `match()`, `test()`, `replace()`, and `search()`.

---

## 1. The Regex Pattern

```javascript
/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/
```

> **Note:** In JavaScript, regex literals are enclosed between forward slashes `/.../` without quotes. Wrapping them in quotes (e.g., `" /.../ "`) treats it as a plain string instead of a regular expression pattern.

---

## 2. Example Usage

```javascript
let msg = "Pramod Dutta is a very handsome man. He has an email ID of pramod@gmail.com, and he is working almost 10 hours per day. Something like";

// Extract email using match()
let result = msg.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/);

if (result) {
  console.log("Found email:", result[0]); 
  // Output: "pramod@gmail.com"
} else {
  console.log("No email found.");
}
```

---

## 3. Pattern Breakdown

| Pattern | Explanation |
| :--- | :--- |
| `[\w.+-]+` | Matches one or more characters for the username (`\w` covers letters, digits, and `_`; plus `.`, `+`, `-`). |
| `@` | Matches the literal `@` symbol. |
| `[\w-]+` | Matches the domain name (e.g., `gmail`, `yahoo`, `vwo`). |
| `(?:\.[\w-]+)+` | Non-capturing group `(?:...)` matching a dot `.` followed by domain extension (e.g., `.com`, `.co.in`, `.org`), repeated one or more times. |

---

## 4. Useful Flags

- **Global search (`g`)**: Find all email addresses in a text:
  ```javascript
  let text = "Contact us at support@example.com or sales@example.org";
  let emails = text.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g);
  console.log(emails); // ['support@example.com', 'sales@example.org']
  ```
- **Case-insensitive (`i`)**: Matches both uppercase and lowercase regardless of casing:
  ```javascript
  let regex = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/i;
  ```

