import style from './ExerciseCard.module.scss';

/*
    PROPS

    name: string
    reps: number  (repeticiones)
    video: string (youtubeId)
*/

export default function ExerciseCard({ title, description, video }) {

    return (
		<div className={style.exercise}>
			<video width="100%" height="100%" src={video} allowFullScreen controls></video>
			<div className={style.info}>
				<p>{title}</p>
			</div>
		</div>
	);
}