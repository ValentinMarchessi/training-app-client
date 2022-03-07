import { useState } from 'react';
import style from './ExerciseView.module.scss';


function extractYTvideoId(url = '') {
	if (url) {
		const regex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
		return (url.match(regex) && url.match(regex)[1]) || ('');
	}
}

export default function ExerciseView({ number,allExercises,dayOption,j }) {
    const [i,setI]=useState(j)
    const next=()=>{
        if(i+1<allExercises[dayOption].length)
        setI(i+1);
    }
    const prev=()=>{
        if(i>0)
        setI(i-1);
    }
    return (
		<div className={style.cont}>
			<iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${extractYTvideoId(allExercises[dayOption][i].video)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
			<div className={style.info}>
				<h3>{allExercises[dayOption][i].title}</h3>
                <hr/>
                <p>{allExercises[dayOption][i].description}</p>
                <p className={style.number}>x {allExercises[dayOption][i].number||1}</p>
                <div className={style.contNext}>
                    {i>0&&<button onClick={prev}className={style.next}>{"Previous"}</button>}
                    {i+1<allExercises[dayOption].length&&<button onClick={next}className={style.next}>{"Next"}</button>}
                </div>
			</div>
		</div>
	);
}