let responseTime = 850 //ms
let sla  = 1000 //ms

let slaStatus = responseTime <= sla ? "within SLA" : "SLA Breached"

console.log(`Response: ${responseTime}ms - ${slaStatus}`);


