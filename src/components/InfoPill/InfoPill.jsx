import style from './InfoPill.module.scss';

export default function InfoPill({ id, header, icon, text }) {
    return (
        <div id={id} className={style.infoPill}>
            <span id={style.header}>{header}</span>
            {icon ? <img id={style.icon} src={icon} alt="icon" /> : null}
            <span id={style.text}>{text}</span>
        </div>
    )
}
