let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404]
    ["search", "pass",180]


]


//Nested for loop (full index control)

for(let i=0; i<testMatrix.length; i++){
    for(let j=0; j< testMatrix[i].length; j++){
        console.log(testMatrix[i][j]+" ");
        
    }
}