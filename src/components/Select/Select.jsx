import style from './Select.module.scss';

/*
    PROPS

    options: Option[] (un arreglo de objetos Option, definidos abajo)

    interface Option{
        display: string,   //display es el valor que se muestra en la UI
        value: string
    }

    callback: function
    callback es algún handler que se pasa desde el componente padre para que Select pueda devolver el value elegido.
    Ej de callback:

    function handleSelect(event){
        const {value} = event.target
        .
        .
        .
    }
*/

export default function Select({ options, label, callback }) {
    return (
        <div className={style.container}>
            <span>{label}</span>
            <div className={style.select}>
                <select onChange={callback}>
                    <option value="" selected disabled hidden>Selección</option>
                    {options.map(option => <option key={option.value} value={option.value}>{option.display}</option>)}
                </select>
            </div>
        </div>
    )
}