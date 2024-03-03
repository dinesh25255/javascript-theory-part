//domjs

//dom stands for document object mode , it is a programming interface  for  html and xml . dom represent 
// the webpages so that the script can changed the  style , structure , content as nodes

// the dom represent the structure of a webpages  in a hierarchical (tree- likes) structure / model where each content  in the html document is represent as a nodes


// Accessing the nodes in javascript

// to acess the nodes of dom , we have several  method

// method that acess or select one node only.

const div1 =document.getElementsByid('d-1')

console.log(div1)


// guery selector


const heading1 = document.gueryselector('h1')

console.log(heading1)


// selecting by class using g=queryselector

const para2 = document.querySelector('para')

console.log(para2)


// methods that accsee or select multiple nodes and return  node list

// node list is the collection of html nodes which seems like an array



// get  element by class name

const paragraphs =document.getElementsByClassName('para')

console.log(paragraphs)



const mainheading =document.querySelector('#intro')

const list= document.querySelector('.fruit')




// manipulating the dom style manipulation 


mainheading.computedStyleMap.color='read'

mainheading.computedStyleMap.backgroundcolor ="aqua"

mainheading.computedStyleMap.textdecoration= 'underline'

list1.style.backgroundcolor='purpule'




// text manipulation 

console.log(mainheading.innertext)
console.log(mainheading. textContent)




// creating element using dom


const anotherheading =document.createElement('h2')
anotherheading.textContent="i was created  via dom manipulation "


//appending child

document.body.appendChild(anotherheading)




// task- creating li element and append it with us


const anotherlist=document.createElement('li')
anotherlist.textcontent= 'dragonfruit'
anotherheading.classList.add('fruit')

document.getElementById('ulist'). appendChild(anotherlist)


// removing element node  using dom

documentlist.remove()
document.getElementsByid('ulist').remove()

//leaft node us child node 

// vs code.dev

// handling eventlistener to the Node

mainheading.addEventListener('click',()=>{
    const text = mainheading.textContentaleret(text)
})



//nodelist- it is an array like datatype that stores node html elements in a seguential order




// it also has index storting from zero . it is different from array because it doesnot support array method.



const lists =document.querySelectorAll('.fruit')

// for each method - it is a metod  the iterates over the iteratb.

lists.forEach(e =>{
    e.addEventListener('click',()=>{
        let uppercasedate=data.touppercase()
        e.textContent=uppercasedate

    })
  
})

//event - an event is an action that takes place in a webpages



// to handle event  dom has a method called addevent listener  which can be  attached to  any  dom  nodes/element to listen the event and provide some functionality based  on the event


// to handle event  we  can use inline event handlers as well these are basically written with html tags as an attritubes

let originaltext= mainheading.textContent 
mainheading.addEventListener('mouseover',()=>{
    let date =mainheading.textContent
    let uppercasedate=date.toLowerCase()
    mainheading.textContent=uppercasedate
})



mainheading.addEventListener('mouseout',()=>{
    mainheading.textContent= originaltext

})

constlists =document.querySelectorAll('.fruit')
console.log(lists)
lists.forEach(e =>{
    e.addEventListener('click',()=>{
        let uppercasedate=data.touppercase()
        e.textContent=uppercasedate

    })
  
})



