let arr=[
        [13,12,56],
        [34,56,44],
        [44,55,33]
    ]

let sumofArr= arr.map(row=>row.reduce((a,b)=>a+b))
console.log(sumofArr);
