import { useState } from 'react';
import style from './ExerciseView.module.scss';


function extractYTvideoId(url = '') {
    if (url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
        return (url.match(regex) && url.match(regex)[1]) || ('');
    }
}

export default function ExerciseView({ number, allExercises, dayOption, j }) {
    const [i, setI] = useState(j)
    const next = () => {
        if (i + 1 < allExercises[dayOption].length)
            setI(i + 1);
    }
    const prev = () => {
        if (i > 0)
            setI(i - 1);
    }

    console.log(allExercises[dayOption][i])

    return (
        <div className={style.cont}>
            <video width="100%" controls='true' autoPlay>
                <source src={allExercises[dayOption][i].video} type="video/mp4" />
            </video>
            <div className={style.info}>
                <h3>{allExercises[dayOption][i].title}</h3>
                <hr />
                <p>{allExercises[dayOption][i].description}</p>
                <p className={style.number}>x {allExercises[dayOption][i].number || 1}</p>
                <div className={style.contNext}>
                    {i > 0 && <button onClick={prev} className={style.next}>{"Previous"}</button>}
                    {i + 1 < allExercises[dayOption].length && <button onClick={next} className={style.next}>{"Next"}</button>}
                </div>
            </div>
        </div>
    );
}