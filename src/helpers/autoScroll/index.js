


//Esta función hace scroll, automático. Se puede usar para carruseles si se la llama com un setTimeout()
export default function autoScroll(element, direction){// element es un id de html
    if(!element||!direction) return 0
    let docElement=document.getElementById(element)
    if(!docElement) return alert(`autoScroll error: No element with id "${element}" found`)

    if(direction==='left') return docElement.scrollTo({left: 0})
    if(direction==='right') return docElement.scrollTo({left: docElement.clientWidth})
    // ClientWidth es el ancho del element en la pantalla. Se puede usar para autoscrollear solo cuando los hijos del elemento en cuenstión tengan el mismo width que el elemento contenedor. Sino, voy a tener que agregar condiciones para que autoScroll detecte el width del elemento hijo
    if(direction==='top') return docElement.scrollTo({top: 0})
    if(direction==='bottom') return docElement.scrollTo({top: docElement.clientHeight})
    else return alert(`autoScroll error: Invalid direction "${direction}"`)
}