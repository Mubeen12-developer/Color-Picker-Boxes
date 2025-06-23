const boxes = document.querySelectorAll('.color-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const selectedcolor = box.getAttribute('data-color');
        document.body.style.backgroundColor = selectedcolor
    })
})
function changecolor(){

}    
function textwhite(){
   document.getElementById('text').style.color='white'
} 

function textblack(){
     document.getElementById('text').style.color='black'
}