// String
const string1 = "Hello"
const string2 = 'Hello'
const string3 = `Hello ${string1} ?!`

console.log(string3)

//Number
const Number = 123
const pi = .14

console.log(typeof(Number + undefined))
console.log(typeof(pi))

const a = 0.1
const b = 0.2

console.log(((a + b).toFixed(1))) // 0,3


// Boolean
const a1 = true
const b1 = false

if(a1) {
    console.log('Hello')
}

// null & undefined
let age

console.log(age)

setTimeout(function (){
    age = 100
    console.log(age)
}, 1000)

//Array
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits[fruits.length - 1])

//Object
 
// const user = new Object()
// user.name = 'KIM'
// user.age = 10

// console.log(user)


// function User() {
//     this.name = 'Kim'
//     this.age = 20
// }
// const user = new User()

// console.log(user)
// console.log(user['name'])


const userA = {
    name: 'Yeonu',
    age: 20
}

const userB = {
    name: 'Woo',
    age: 18,
    parent: userA
}

console.log(userB.parent.name)

const usres = [userA, userB]

console.log(usres[0]['name'])