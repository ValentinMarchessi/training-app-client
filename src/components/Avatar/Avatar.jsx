import style from './Avatar.module.scss';

export default function Avatar({ alt, src }) {
    return <img className={style.avatar} alt={alt} src={src}/>
}