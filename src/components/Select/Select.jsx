import style from './Select.module.scss';

export default function Select({ options, label, callback }) {
    return (
        <div className={style.container}>
            <span>{label}</span>
            <div className={style.select}>
                <select onChange={callback}>
                    <option value="" selected disabled hidden>Selección</option>
                    {options.map(e => <option value={e}>{e}</option>)}
                </select>
            </div>
        </div>
    )
}