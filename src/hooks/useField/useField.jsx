import { useState } from 'react'

export const useField = ({ type, quantity }) => {//quantity %: limita el valor a 100

    const [value, setValue] = useState('')

    const onChange = event => {
        let input=event.target.value
        if(type==='number'){
            input=input.slice((input[1]==='-'||input[0])==='0'?1:0).replaceAll('-','')
            input=quantity!=='%'?input:input<0?0:input>99?100:input
            setValue(input)
        }
    
        else setValue(input)

    }

    const onClick=e=>{
        e.target.style.pointerEvents='none'
        if(type==='number') {
            e.target.placeholder=e.target.value
            e.target.value=''
            return
        }
        e.target.value=e.target.placeholder
    }
    const onBlur=e=>{
        e.target.style.pointerEvents='auto'
        e.target.placeholder=e.target.value
        e.target.value=''
    }

    return {
        type,
        value,
        onChange,
        onClick,
        onBlur
    }
}