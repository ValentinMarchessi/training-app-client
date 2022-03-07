import styleRoutine from './Routine.module.scss';
import exerciseImg from '../../../assets/images/routines.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { home } from '../../../assets/images/icons';
import ExerciseView from '../../Exercises/ExerciseView/ExerciseView'
import { getRoutinesById } from '../../../Redux/apiCalls/rutinesCall/getRoutinesById';


export default function Routine() {
	const days=[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        ];
    const [dayOption,setDayOption]=useState("Monday");
    const [exercise,setExercise]=useState({viewing:false});
    const routineId=useParams().routineId;
    const routine=useSelector(state=>state.routines.routinesById);
    const user=useSelector(state=>state.user.currentUser);
    const dispatch=useDispatch();
    useEffect(()=>{
        getRoutinesById(dispatch,routineId,user.accessToken)
    },[dispatch])

    const changeDayOption=(e)=>{
        setDayOption(e.target.value);
    }
    const viewExercise=(e,j)=>{
        if(routine.days)
        setExercise({viewing:true,allExercises:routine.days,dayOption,j})
    }

    return (
		<div className={`${styleRoutine.page}`}>
			<div className={styleRoutine.header}>
				<Link to='/'>
					<img id={styleRoutine.icon} src={home} alt="home" />
				</Link>
				{!exercise.viewing?<h1>Routine: {routine?.title}</h1>: <h1>Exercise view</h1>}
				<hr />
			</div>
			<div>
				<div>
					{!exercise.viewing?<div>
                        <div className={styleRoutine.container}> 
                        <form>
                            <div className={styleRoutine.contentSelect}>
                                <select onChange={changeDayOption}> 
                                    {days.map((d,i)=>
                                    d===dayOption?<option selected value={d} key={i}>{d}</option>:<option value={d} key={i}>{d}</option>
                                    )}
                                </select>
                                <i></i>
                            </div>
                        </form>
                        <div className={styleRoutine.dayExercises}>
                            {routine.days&&routine.days[dayOption]?.map((e,j)=>
                                <div key={j} className={styleRoutine.exercise} onClick={(e)=>viewExercise(e,j,dayOption)}>
                                    <img className={styleRoutine.exerciseImg} src={e.image||exerciseImg} alt='ExerciseImg'/>
                                    <p className={styleRoutine.nameExercise}>
                                        {e.title||"Exercise "+ (j+1)}<br/>
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