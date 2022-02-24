import style from '../Routines.module.scss';
import styleRoutine from './Routine.module.scss';
import exerciseImg from '../../../assets/images/routines.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../../assets/images/icons';
import ExerciseView from '../../Exercises/ExerciseView/ExerciseView'

const exercise= {title:"titulo",description:"descripcion",video:"video"}
const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mockRoutine = {
    name:"nombre de rutina",
	exercises: [[{title:"tituloPrimeroLunes",description:"descripcion",video:"video"},exercise,exercise],[{title:"tituloPrimeroMARTES",description:"descripcion",video:"video"},exercise],null,null,null,null,null],
};

export default function Routine() {
	
    const [dayOption,setDayOption]=useState(0);
    const [exercise,setExercise]=useState({viewing:false});

    const changeDayOption=(e)=>{
        setDayOption(e.target.value*1);
    }
    const viewExercise=(e,j)=>{
        setExercise({...mockRoutine.exercises[dayOption][j],viewing:true,allExercises:mockRoutine.exercises,dayOption,j})
    }

    return (
		<div className={`${style.page} ${styleRoutine.scroll}`}>
			<div className={style.header}>
				<Link to='/'>
					<img id={style.icon} src={home} alt="home" />
				</Link>
				{!exercise.viewing?<h1>Routine: {mockRoutine.name}</h1>: <h1>Exercise: {exercise.allExercises[exercise.dayOption][exercise.j].title}</h1>}
				<hr />
			</div>
			<div>
				<div>
					{!exercise.viewing?<div>
                        <div className={styleRoutine.container}> 
                        <form>
                            <div className={styleRoutine.contentSelect}>
                                <select onChange={changeDayOption}> 
                                    {days.map((d,i)=><option value={i} key={i}>{d}</option>)}
                                </select>
                                <i></i>
                            </div>
                        </form>
                        <div className={styleRoutine.dayExercises}>
                            {mockRoutine.exercises[dayOption]?.map((e,j)=>
                                <div key={j} className={styleRoutine.exercise} onClick={(e)=>viewExercise(e,j,dayOption)}>
                                    <img className={styleRoutine.exerciseImg} src={exerciseImg}/>
                                    <p className={styleRoutine.nameExercise}>
                                        {e.title}<br/>
                                    </p>
                                </div>
                            )}
                        </div>

                        </div>
					</div>
                    :<div>
                        <ExerciseView {...exercise}/>
                        <button className={styleRoutine.exit} onClick={()=>setExercise({viewing:false})}>Exit</button>
                    </div>
                    }
				</div>
			</div>
		</div>
	);
}