const name = "paras"
const repoCount = "2"

// console.log(name + repoCount +"value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parasba-gadiya')

// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('p'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(newString)

const newStringOne = "     pa ras     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "paras.com/0203bagadiya"

console.log(url.replace('0203', '2003-'))

console.log(url.includes('pna'))

console.log(gameName.split('-'))