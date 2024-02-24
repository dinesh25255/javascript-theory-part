// variable are very important programming concept. it allows us to store and manipulated  various
// types of value for example  string , number , array, objects etc are the example of variable 


// There are  three ways to Declare a variable in javascript
// They Are :
// var(pre Es6)
// let(es6+)
// const(es6+)

// note: since Javascript is a high level programming language.


// syntax to declare  variables . 

// variable type  variable name (indentifier) = value. for eg:

// let x=5;

// There are certain set of rules to write an identifiers in javascript

//1. indentifiers must be always start with (A-Z or a-z) or $.
// 2. it can't be start  using number or other special character .
// 3. The identifiers  are case  sensitive . it means x and X  are two different variable .
//4. we can't use  reserved keywords for eg: if, else , for, while , etc are  reserve keywords which can't 
// be used for variable name .

// standard  convention for a writing a variable 

// to declare a variable name (identifier)  camalcase is used .

// there are the other  different cases are well:

// 1. pascal case- eg: let person
// 2. $ snake_case - it is used in php 
// 3 . kebab- case 

// when we declare a variable we used camelcase 


// The identifiers  must be descriptive and revalent  to what kind of value is stored
// for eg: let x= "Ram bhatt"  let  fullName = "Ram bhatt"


// var vs let vs const

// var
// 1.var is used to declare variables which values  can be changed  overtime throughout the program.

// var y=10
// y=5

//  var x//variable declaration
//  x= 4 // value assign or value initilization
//  x= 7// value assign 

// redeclaration of variable is possible  in a var 

// var function is scoped .

// var is hosted.

// for eg : var firtName = "dinesh"  var firstName = "dinesh "

// // let
// // 2.let is used to declare variables which values  can be changed  overtime throughout the program. 

// let z= 3
// z= 1

// let is blocked scoped


// redeclaration  is not possible in a let

// let lastname = "dinesh"
// let lastname = "ram"


// // const 
// // 1. it is used to declare constant variable . it means the value stored  in the variable

// //  declared with const shouldn't and can't be changed overtime  throughout the program . variable  declaration only is not a possible in const.


// const PI = 3.14
// PI = 4//  it is not valid to re-assign value in constant variable

// // (type error: Assignment  to constant  variable )

// redeclaration  is not possible in a  const

//  const is blocked scoped .



// function scoped vs Blocked scoped
// scope is the region or  inside the curly braces .

// if the scope is of the function  it is  function scope.

function x(){

    var address ="koteshwor"
    // this is function scoped.
}

console.log(address)
//it is not valid.

if(true){

    let gender= "male"
    // this is blocked scoped.
}

console.log(gender)// it is not accessed here


//  function x(){
//     var a= 1;
//     if(true){
//         let b= 10;
//         var d = 10;
//         console.log(a)//valid
//     }

//     console.log(d)//valid
//     console.log(b)// not valid
//     let c= 3;
// }

// console.log(a)// not valid
// console.log(b)// not valid
// console.log(c)// not valid
// console.log(d)//not valid

// javascript is a backward  compatible  langauge.


