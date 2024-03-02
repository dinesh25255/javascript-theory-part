// // array : it is a non-primitive datatype Array are special type of object  in javascript  which is used to store multiple value in a single  variable

// // example of array

// // array of fruit 

// // const fruit = ['apple','banana']

// // console.log(fruit)

// // array of year

// // const year = [2000, 2001, 2003]

// // console.log(year)

// // // array of mixed datatype (mixed array)

// // const mixedArray =["ram", true, 23, null]

// // console.log(mixedArray)


// // data of an array is called element of that array

// // array always start from 0 index 

// // Accessing element of an array  using its index

// // const fruit =['apple','orange', 'banana']

// // console.log(fruit[0])
// // console.log(fruit[2])
// // console.log(fruit[1])


// // // create an array using index

// // const year =[]

// // console.log(year)

// // year[0]=1997
// // year[1]=1998

// // year[3]=2000

// // console.log(year)


// // // reassingning value  using  index

// // year[7] = 2005 

// // console.log(year)
// // console.log(year[5])

// // property and methods of array 

// // length 

// const fruit =['apple','banana','cherry']

// console.log(fruit.length)


// // method  of array
// // index of()-> this method return index of the  element  that is passed as a argument in the  method  call . if non existing element is passed  than it will always return -1


// console.log(fruit.indexOf('banana'))
// console.log(fruit.indexOf('Avocado'))
// // include ()-> this method return the boolean value based on the arugment passed
// console.log(fruit.indexOf('banana'))
// console.log(fruit.indexOf('Avocado'))

// // method that mutates the array (change the original  array )

// // push ()-> this method add on  an element  to end point of the array 

// fruit.push('kiwi','watermelon')
// console.log(fruit)

// // pop ()-> it remove the element from and array 

// const popedfruit =fruit.pop()
// console.log(fruit)
// console.log(popedfruit)



// const person1 ={
//     firstname: 'dinesh',
//     lastname : 'bhatt',
//     age: function(birthyear){
//         return 2023 - birthyear
//     }

// }

// console.log(person1.firstname)
// console.log(person1.lastname)

// // unshift -> it add new element in beginning  of an array 

// // let names =['ram','hari ', 'sita','gita']

// // Name.unshift('ajay','bardan')

// // console.log(Name)

// // //shift -> it remove the first element of an array

// // const x= Name.unshift
// // console.log(Name)
// // console.log(x)

// // reverse -> it simply reverse the element  in an array 

// names.reverse()
// console.log(names)

// // splice -> it is to add (remove any element from an array)
//  // 1st arg- starting index
//  // 2nd arg - count from that index
//  // 3rd rg - remaining arg- element to be added 

//  let arr1= [1,3,4,6,'hello']

//  //removing element using splice 

//  arr1.splice(5,6)
//  console.log(arr1)


//  // adding element using splice 

//  arr1.splice(1,3,'replaced', 10)

//  console.log(arr1)
//  arr1.splice(5,0,'world')

//  console.log(arr1)


//  // sort -> it is used to sort an array

//  let student =['ram', 'shyam']

//  student.sort()
//  console.log(student)

//  let number =[1,2,3,4]
//  number.sort()
//  console.log(number)


//  // sort method expects a compare function , a compare function  has two  arguments (generally  written as a and b)
// // if compare function 
// //return negative  value  - it indicates a should be sorted  before  b


// // return positive value - it indicates a should be sorted  after b

// // return 0- both  and b are same



// // method that return a new array using the  shallow  copy  of  original array 

// // slice -> This method doesnot  mutates the original  array instead  it create  a shallow  copy  of the  original  array  ani return  specific  portion of that array

// //1st -> starting index
// // 2nd -. end index (but it doesnot include  the end index )

// // let element =[1,2,3,4,'hello world ']

// // let slicedArr= element.slice(2,5)
// // console.log(slicedArr)
// // console.log(element)


// // // concat - return a new array by concating two ways


// // let a =['a','b']
// // let b= [1,2]
// // const concatArr=b.concat(a)
// // confirm.log(concatArr)
// // console.log(a)
// // confirm.log(b)


// // spread operator -> it spreads  element inside of an array

// // let arr1 =[90,20,45]
// // const output =[...arr1,...a,...b]

// // console.log(output)

// // map -> it is an  important method that is used  to change  or map  individual  element of an array

// //map methods loop over an array  and  changes the individual element as per its callback function

// // map method return a new  array . it doesnot mutated the original array

// // syntax of map method 

// // arr1.map((e,i,a)=> {})

// // const numbers=[1,2,3,4,6]

// // // return a new that with element doubled the value  of element  in number array

// // let db1nimbers = numbers.map((e,i,a)=> e*2)
// // console.log(db1numbers)

// let salary2079=[1200,17000,34000]

// let salary2080 = salary2079.map(e => e*1.15)

// console.log(salary2080)


// // create an array  of  numbers and return a new array showing boolean value according  to the number in the array is even or not 


// let numberARR =[29,44,56,72,85]

// let isevennumber = numberARR.map(e=> e% 2===0)

// console.log(isevennumber)

// create an array of string and return a new array  with number of  letter present in that string


let stringARR = ['apple', 'banana ','house']

let wordcount = stringARR.map((e)=>{

    return e.length

})

console.log(wordcount)


// filter method : it is an array method that return a new  array which is used to filter  out  the  element  from the array

// syntax:

// array filter((e,i,arr)=>{})

// filter methods callback function  needs a condition  that filters the element  of array  based  on that condition , if the condition is true  the element  will be added  to the  new array that is returned  by filter method , if the condition 

// is false then that element wont be added

// eg: create an array of number and return  a new  filtered array which has numbers greater than 8


let numberArr=[2,3,4,5,6,6,,6]

let filteredArr= numberArr.filter(e=> e>8)

let oddnumberArr= numberArr.filter(e=>e%2!==0)
console.log(oddnumberArr)

console.log(filteredArr)
console.log(numberArr)


// reduce: it is also one of the important array method in javascript  unliked map and  filter it doesnot  return  a new array . it return  a single values  that can be  of  any datatype  which is accumulated in its  accumulator



// reduced method generally has two arguments ist arg is the callback  function  and  the  second arg is initial value  of  accumulator

// it has a callback function similiar to map and  filter  method  but  it has  one extra  parameter in the beginning  which  is the accumulators


// syntax 
// array. reduce ((accumulators, currentelement , currentindex , array)=> {}  intialvalue of accumulator)


// let numbers = [1,32,3,2]

// let sum = numbers.reduce((acc,curr) => {

// },0)

// console.log(sum)

//string Method 

// converting string to array

// let word = 'hello world'

// let spreadap = [...word]

// let splitmethod = word.split ('')

// console.log(spreadap)
// console.log(splitmethod)
// console.log(Array.from(word))

// let name = 'dinesh bhatt'

// let mappedArrofstr= strtoArr.map(e =>{
//     if (e === 'a'){
//         return 1
//     }
//     else {
//         return 0
//     }
// })

// console.log(mappedArrofstr)


// let output = mappedArrofstr.reduce((acc, curr)=> acc+curr)

// console.log(output)

// method chaining 

let output =[...names].map(e=>{
    if (e=== 'a'){
        return 1
    }

    else{
        return 0
    }
}). reduce((acc, curr) => acc+curr)

console.log(output)

// create a function that takes two arguments first is the  word  and second  is  the  letter  and return  output  as `{word } has ${x} no of ${letter } present  in it `

let x = 'football'

console.log(x.toLowerCase.apply())


const findchar = (word, letter ) => {
     let count =[...word]
     reduce((acc,curr) =>{
        if(curr.toLowerCase()=== letter){
            acc++
        }
        return acc
     }, 0)

     return `${word} has ${count} ${letter} 'in it'`


}

console.log(filteredArr('apple', 'p'))


// array destructuring

// it is the features  of  js that allows  to extract values  from  an array and assign  it in  the variable 

// let numbers = [10,20,30]
// let [a,b,c] = numbers

// console.log(a)
// console.log(b)
// console.log(c)


// rest parameter

// let names =['bikash', 'sushil', 'rachanal']

// let [name1, name2, name3 ... renames]=name


// console.log(names)







