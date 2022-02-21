import style from './Pill.module.scss';

export default function Pill({ icon, text }) {
    

    return (
        <div className={style.container}>
            <img src={icon} alt="icon" />
            <span>{text}</span>
        </div>
    )
}