
let n=3

for (let i=0; i<n; i++){
    for (let j=0; j<=i; j++){
        process.stdout.write("*")

    }
    console.log("");
    
}

for(let k=n; k>=0; k--){
    for (let l=0; l<=k; l++){
        process.stdout.write("*")
    }
    console.log("");
}