import style from './Exercise.module.scss';

/*
    PROPS

    name: string
    reps: number  (repeticiones)
    video: string (youtubeId)
*/

export default function Exercise({ name,sets, reps, videoId, thumbnail }) {
    return (
		<div className={style.exercise}>
            <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
			<div className={style.info}>
				<p>{name}</p>
				<p>
					{sets}x{reps}
				</p>
			</div>
		</div>
	);
}