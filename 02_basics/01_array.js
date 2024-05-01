// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["man", "women"]

const myArr2 = new Array(1, 2, 3, 4)
// console.table([myArr, myHero, myArr2])
// console.log(myArr[1])

// array method

// myArr.push(8)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(0)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 4)
console.log("c ", myArr)
console.log(myn2)