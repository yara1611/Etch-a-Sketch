const container = document.getElementById('container')
function makeRows(n,y){
    container.innerText=''
    for(i=0;i<n*y;i++){
        container.innerHTML+=`<div id='${i}'></div>`
    }
}
makeRows(16,16)
const divs = document.querySelectorAll('div')
divs.forEach(div => {
    div.addEventListener('click',(e)=>{
   const d = document.getElementById(e.target.id)
   d.style.background='red'
})
div.addEventListener('dblclick',(e)=>{
    const d = document.getElementById(e.target.id)
    d.style.background='white'
 })
});



