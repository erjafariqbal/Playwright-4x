let enveronment = "staging"
let baseUrl = enveronment === "prod" ? "https://api.com"
                                      : "https://staging-api.com"

console.log(baseUrl);


