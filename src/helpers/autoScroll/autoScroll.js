let id=0
let lastCall={}
let lastCarrousel={}

//Esta función hace scroll, automático. Se puede usar para carruseles con mode='auto'
export default function autoScroll(element, direction, mode, timing){// element es un id de html, timing el tiempo de espera entre scrolls, en segundos
    if(!element&&lastCall.element){
        document.getElementById(lastCall.element).style.scrollBehavior='auto'
        autoScroll(lastCall.element, lastCall.direction)
        document.getElementById(lastCall.element).style.scrollBehavior='smooth'
        //Esto hace que el scroll se ajuste cuando cambia el viewport width
    }
    
    if(!mode&&element) lastCall={element, direction}

    if(mode) lastCarrousel={element}
    if(!element&&lastCarrousel.element) {
        document.getElementById(lastCarrousel.element).scrollTo({left: 0})
        lastCarrousel.element=null
    } // Reinicia el carrousel si se cambia el viewport width. Es más fácil que mantenerlo centrado en el elemento

    if(!element||!direction) return 0
    
    let docElement=document.getElementById(element)
    if(!docElement) return 0
    if(direction==='left') docElement.scrollTo({left: 0})
    if(direction==='right') docElement.scrollBy({left: docElement.clientWidth+1})
    // ClientWidth es el ancho del element en la pantalla. Se puede usar para autoscrollear solo cuando los hijos del elemento en cuenstión tengan el mismo width que el elemento contenedor. Sino, voy a tener que agregar condiciones para que autoScroll detecte el width del elemento hijo
    if(direction==='top') docElement.scrollTo({top: 0})
    if(direction==='bottom') docElement.scrollBy({top: docElement.clientHeight})
    
    if(mode==='loop') {
        if(docElement.lastChild.id!=='aux'){
            let add=docElement.firstChild.cloneNode('true')
            add.setAttribute('id','aux')
            docElement.append(add)
        }
        setTimeout(()=>{
            let item = docElement.childNodes
            id++
            if(id===item.length-1) {
                docElement.style.scrollBehavior='auto'
                docElement.scrollTo({left: 0})
                docElement.style.scrollBehavior='smooth'
                docElement.scrollBy({left: docElement.clientWidth})
                id=0
            }
            autoScroll(element, direction, mode, timing)
        }, timing*1000)
    }
    else return 0
}