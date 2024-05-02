// singleton
// object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Paras",
    "full name": "paras bagadiya",
    [mySym]: "mykey1",
    age: 20,
    location: "gandhinagar",
    email: "p@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email ="p@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "p@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello paras")
}
JsUser.greetingTwo = function(){
    console.log(`paras, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())