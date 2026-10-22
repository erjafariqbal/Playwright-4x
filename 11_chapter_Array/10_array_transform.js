//map the element

let scores = [45, 84, 67, 59,74]

let grades = scores.map(i => i >70 ? "Pass": "Fail")
console.log(grades);


// Filter the Element

let passing = scores.filter(p => p>70)
console.log(passing);


