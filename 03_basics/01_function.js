function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("s");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result)

function loginUserMessage(username = "paras"){
    if(!username){
        console.log ("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("paras"))
// console.log(loginUserMessage("paras"))

function calculaterCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculaterCartPrice(200,400,500,2000))

const user = {
    username: "paras",
    prices: 99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "par",
    price: 9
})

const myNewArray = [200,300,100,900]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,100,900]))