const panels=document.querySelectorAll('.panel')


function opengallery(e){
   
    this.classList.add('open-active')
    this.classList.add('open')
    
}
function closegallery(e){
   
    this.classList.remove('open-active')
    this.classList.remove('open')
    
}

panels.forEach(element=>element.addEventListener('mouseover',opengallery))
panels.forEach(element=>element.addEventListener('mouseout',closegallery))