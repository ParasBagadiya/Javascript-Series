const user = {
    username: "paras",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this.price)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username ="neel"
// user.price = 90
// user.welcomeMessage()

// function chai(){
//     let username = "paras"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "paras"
//     console.log(this.username)
//}

const chai = () => {
    let username = "paras"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "paras"})

console.log(addTwo(4, 4))