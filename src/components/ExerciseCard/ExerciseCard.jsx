import style from './ExerciseCard.module.scss';

/*
    PROPS

    name: string
    reps: number  (repeticiones)
    video: string (youtubeId)
*/

function extractYTvideoId(url = '') {
	if (url) {
		const regex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
		return url.match(regex) && url.match(regex)[1] || '';
	}
}

export default function ExerciseCard({ title, description, video }) {

    return (
		<div className={style.exercise}>
			<iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${extractYTvideoId(video)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
			<div className={style.info}>
				<p>{title}</p>
			</div>
		</div>
	);
}