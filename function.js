// function : a function  is basically   a block  of code  that can  execute a specific  task. The  value  or action  performed  by a function  can be
// function  can be achieved  when  we call  or  in voke  a function  . a  function  consist  of a function  name ( to  write a  function name  we have  to follow  the rules of  writing  indentifier  ) a function contained  a paranthesis where paremeter  can be containe

// In javascript  there are three  way to declare a function  in javascript 

// they are

// 1. function declaration
// syntax
// function functionName(){
// code to be executed

//}

// for eg: create a function  that  say Hello World.

// defining a function

// function greeting(){
//     console.log(`hello World`)
// }

// // calling function
// console.log(greeting())

// // parameterized function

// function sayHello(name){
//     console.log('hello${name}')
// }

// sayHello('ram')
// sayHello('hari')
// sayHello('ramesh')


//create a function  that calculates your  age 

// function; calcAge(birthyear){

//     const this year = 2023
//     const age = this year- birthyear
//     return age
// }

// console.log(calcAge(1997))
// document.write(calcAge(1998))

// calcAge(1980)
// calcAge(2005)

// hello  Ram, your age are 18 year old

// function calCAgeWithName(name , birthyear){
//     const thisyear = 2023
//     const age = thisyear-birthyear
//     console.log(`hello ${name}, you are ${age} year old `)

// }
//  console.log('ram', 2000)
//  console.log('ram', 2005)
//  console.log('ram', 2008)


 // write a function to add two number 

//  sum (2,2)
//  function sum (num1, num2){
//     console.log(num1+num2)
//  }




// 2. function  expression

// variable type functionname = (assignment operator )function (){
// code to be executed
//}

// function greetings(){
//     console.log('hello world ')
// }
//  //eg:
//  let greetings : () => void
//  let greetings = function(){
//     console.log(`hello world`)
//  }

//eg:
// let greetings = function (){
// return `hello world`
//}
// let x= greetings()//`hello world`

// sum (10,20)
// var sum = function (a,b){
// console.log(a+b)
//}

//function x(){
// return {a:1, b:2}
//}
// console.log(x())

//function y(){
// return {a:1, b:2}
//}

// console.log(y())

//function z(){
// return {a:1, b:2}
//}
// console.log(z())
// 3. Arrow  function

// it is shorthand  way to create a function 

// syntax :
// variable _ type functionName = () => {



//}


// const greetings =() => {

// console.log(`hello world`)

//}

// function greetingsFD (){
    // return 'hello world'

//}

// const greetingsFE = function (){

// return "hello world"

//}

// const greetings = () => 'hello world'

//greetings

// parameterized  Arrow Function 

//const greetwithname = (name) => console.log(`hello ${name}`)

// greetwithname("ram"
// greetwithname("hari")

// greetwithname("dinesh")

// const calcAgeWithName= (name, birthyear ) => console.log(`hello ${name}, your ${2023-birthyear} year old`)

// calcAgeWithName('RAM', 2000)
// calcAgeWithName('hari', 2004)
// calcAgeWithName('dinesh', 2006)

// create and arrow function  that return  the sum of two number

// const sum = (num1, num2) =>{

// let add = num1 + num2
// return add

//}
// const sum = (num1, num2) => {
    // return num1+num2

//}

// const sum = (num1 ,  num2) =>

// num1 + num2

// let x = sum(1,2)
// console.log (x)


// create a function that takes a number and  return  true  if the  number is even  and return  false if the number is add .

// const isEven =(num) => {

//     if (num%2 ===0){
//         return true
//     }
    


// else {
//     return false
// }
// }


//console.log(isEVEN)


// bodmas

// const iseven = num => num%2==0

// console.log(iseven(5))
// console.log(iseven(10))


// create a function to check  when  were you 16 year old 

// 14->  you be 16 year  in 2 year 
// 19->  you were  in 3 year 

// 16->  you sweet 16









