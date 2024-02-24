// Global variable vs local variable


//  global variable: Those variable  which are
//  openly declared  on the global scope  or outside of any 
//function or a block is know as global variable. variable defined  in global scope can be acccesed any where within  the program

// eg : let x =1;// it is declared  in global variable 



// local variable:  Those  variables which are  declared  inside of a function  scope or a block scope  are know as  local variable.
// local variable takes precendence over the global variable  in javascript.

// if(true){
//     let y= 2;// it is local variable

//     console.log(y)// it is valid 
// }

// console.log(y)// it is not valid

// let x; 
// console.log(x)// undefined variable 
// x=3;
// console.log(x)//3

// hoisting: literal meaning -> to  pull up something

// hoisting in javascript : it is the default  behaviour of javascript  to raise  variable declared
// with the var and  function  declaration  to the top of the scope where it was  defined . 


// console.log(x)
// var x;

// var x;
// console.log(x)// undefined
// var x= 10;
// console.log(x)// 10

func1(1998)// function call is done  ahead before a function declaration  still it is working
function func1  (birthyear) {
    console.log(2023-birthyear)

}

var sport = " football"

function func1 (){
    let messi = 10;
    if(true){
        console.log(messi)//valid
        console.log(ronaldo)//underdefined
        console.log(sport)// valid
        var ronaldo = 7;
    }

    console.log(messi)// valid
    console.log(ronaldo)// valid 7
    console.log(sport)// valid , football
}

console.log(messi)// invalid
console.log(ronaldo)// invalid
console.log(sport)// valid

// temporal dead zone//

// tdz is the region where the variable define can't be accesed . 

// if(true){
    // let x =3;

//}



// why not to use var //

// * var is hoisted
// * variable declared with var can be  redeclared again.
//* var is the function scoped .
// * variable defined with var is attached to the window object.



// variable: it is  a container that is store  value of  expression

// statement : it is a piece of the code  that perform the certain action.




