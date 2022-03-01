import Avatar from '../Avatar/Avatar.jsx';
import style from './MediumCard.module.scss';


export default function MediumCard({ img, title, body }) {

  return (
    <div className={style.container}>

      <Avatar src={img} />

      <p className={style.title}>{title}</p>
      <p className={style.body}>{body}</p>
    </div>
  );
}