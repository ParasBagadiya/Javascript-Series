// const tenderUser = new Object()
const tenderUser = {}

tenderUser.id = "123"
tenderUser.name = "paras"
tenderUser.isLoggedin = false

// console.log(tenderUser)

const regularUser = {
    email: "p@gmail.com",
    fullname: {
        userfullname: {
            firstname: "paras",
            lastname: "bagadiya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "d", 4: "c"}
const obj4 = {3: "e", 4: "f"}

// // const obj3 = { obj1, obj2}
// const obj3  = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

user[1].email
// console.log(tenderUser);

// console.log(Object.keys(tenderUser))
// console.log(Object.values(tenderUser))
// console.log(Object.entries(tenderUser))

// console.log(tenderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "p course",
    price: "999",
    courseInstructor: "paras"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// {
//     "name": "paras",
//     "coursename": "p course",
//     "price": "free"
// }

[
    {},
    {},
    {}
]