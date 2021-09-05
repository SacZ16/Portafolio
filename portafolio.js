const card = document.querySelector('.card')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const container= document.querySelector('.container')
const container2= document.querySelector('.container2')
const container3= document.querySelector('.container3')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.description')
const imagene = document.querySelector('.imagene')
const imagene2 = document.querySelector('.imagene2')
const imagene3 = document.querySelector('.imagene3')



//
container.addEventListener('mousemove',(e)=>{
    let xAxis = (e.pageX-window.innerWidth/ 2 )/25
    let yAxis = (window.innerHeight/ 2 -e.pageY)/25
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container2.addEventListener('mousemove',(e)=>{
    let xAxis = (e.pageX-window.innerWidth/ 2 )/25
    let yAxis = (window.innerHeight/ 2 -e.pageY)/25
    card2.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container3.addEventListener('mousemove',(e)=>{
    let xAxis = (e.pageX-window.innerWidth/ 2 )/25
    let yAxis = (window.innerHeight/ 2 -e.pageY)/25
    card3.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//
container.addEventListener('mouseenter',e=>{
    card.style.transition='none'
    imagene.style.transform='translateZ(150px)'
})
container2.addEventListener('mouseenter',e=>{
    card2.style.transition='none'
    imagene2.style.transform='translateZ(150px)'
})
container3.addEventListener('mouseenter',e=>{
    card3.style.transition='none'
    imagene3.style.transform='translateZ(150px)'
})


//
container.addEventListener('mouseleave',(e)=>{
    card.style.transition='all 0.5s ease'
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    imagene.style.transform='translateZ(0px)'
})
container2.addEventListener('mouseleave',(e)=>{
    card2.style.transition='all 0.5s ease'
    card2.style.transform=`rotateY(0deg) rotateX(0deg)`
    imagene2.style.transform='translateZ(0px)'
})
container3.addEventListener('mouseleave',(e)=>{
    card3.style.transition='all 0.5s ease'
    card3.style.transform=`rotateY(0deg) rotateX(0deg)`
    imagene3.style.transform='translateZ(0px)'
})