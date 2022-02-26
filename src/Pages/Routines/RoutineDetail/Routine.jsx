import style from '../Routines.module.scss';
import styleRoutine from './Routine.module.scss';
import exerciseImg from '../../../assets/images/routines.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { home } from '../../../assets/images/icons';
import ExerciseView from '../../Exercises/ExerciseView/ExerciseView'
import { getRoutinesById } from '../../../Redux/apiCalls/rutinesCall/getRoutinesById';


export default function Routine() {
	
    const [dayOption,setDayOption]=useState("Monday");
    const [exercise,setExercise]=useState({viewing:false});
    const routineId=useParams().routineId;
    const routine=useSelector(state=>state.routines.rutinesById);
    const dispatch=useDispatch();
    useEffect(()=>{
        getRoutinesById(dispatch, { routineId })
    },[dispatch])

    const changeDayOption=(e)=>{
        setDayOption(e.target.value);
    }
    const viewExercise=(e,j)=>{
        if(routine.days)
        setExercise({...routine.days[dayOption][j],viewing:true,allExercises:routine.days,dayOption,j})
    }

    return (
		<div className={`${style.page}`}>
			<div className={style.header}>
				<Link to='/'>
					<img id={style.icon} src={home} alt="home" />
				</Link>
				{!exercise.viewing?<h1>Routine: {routine?.name}</h1>: <h1>Exercise: {exercise.allExercises[exercise.dayOption][exercise.j].title}</h1>}
				<hr />
			</div>
			<div>
				<div>
					{!exercise.viewing?<div>
                        <div className={styleRoutine.container}> 
                        <form>
                            <div className={styleRoutine.contentSelect}>
                                <select onChange={changeDayOption}> 
                                    {days.map((d,i)=><option value={d} key={i}>{d}</option>)}
                                </select>
                                <i></i>
                            </div>
                        </form>
                        <div className={styleRoutine.dayExercises}>
                            {routine.days&&routine.days[dayOption]?.map((e,j)=>
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