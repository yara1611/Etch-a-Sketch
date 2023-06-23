const container = document.getElementById('container')
function makeRows(n,y){
    container.innerText=''
    for(i=0;i<n*y;i++){
        container.innerHTML+=`<div id='${i}'></div>`
    }
}

const divs = document.querySelectorAll('div')
divs.forEach(div => {
    div.addEventListener('click',(e)=>{
   const d = document.getElementById(e.target.id)
   d.style.background='black'
})
div.addEventListener('dblclick',(e)=>{
    const d = document.getElementById(e.target.id)
    d.style.background='white'
 })
});

container.addEventListener('click',(e)=>{
    const d = document.getElementById('container')
    d.style.background='white'})


const number= prompt('Specifiy the size of grid in squares:')    
container.style.gridTemplateColumns=  `repeat(${number},100px)`
container.style.gridTemplateRows=  `minmax(120px,auto) repeat(${number},100px);`    
makeRows(number,number)

