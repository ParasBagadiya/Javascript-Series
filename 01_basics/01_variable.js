const accounID = 12
let Email = "p@gmail.com"
var Password = "123"
city = "surat"
let state; //in variable we can not define ani valu to variable then the value is undefine

// accountId = 2 // not allowed because we can not change const variable

Email = "j@gmail.com"
Password = "89"
city = "bharuch"

// var ne use nay karva no kem k e block scope ane functional scop no issu che 
// prefer not to use var because of issue in block scope and functional scope


console.log(accounID); //hum isko eaise bhi declare karsakte he lakin agar hame bhot sara data show karna he to hum .table ka use kar sakte he

console.table([accounID, Email, Password, city, state]);