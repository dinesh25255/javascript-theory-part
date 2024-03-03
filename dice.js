const dice=document.getElementById('dice')
const dicebtn =document.getElementById('dice-btn')

const roll =()=>{
    let rand1to6=(math.random()*6) +1
    console.log(rand1to6)
    dice.innerHTML=`<imgsrc="image/${rand1to6}.png"/>`
}

dicebtn.addEventListener('click', 'roll')




