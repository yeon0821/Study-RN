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

