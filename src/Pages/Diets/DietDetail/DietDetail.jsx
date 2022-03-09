import React, { useEffect,useState  } from 'react'
import { Link, useParams  } from 'react-router-dom';
import style from './DietDetail.module.scss';
import { home } from '../../../assets/images/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getDietDetail } from '../../../Redux/apiCalls/dietsCall/getDietDetail';

export default function DietDetail() {

    const dispatch=useDispatch();
    const id=useParams().dietId;
    const user=useSelector(state=>state.user.currentUser);
    const diet=useSelector(state=>state.diets.dietDetail);
    const imgRecipDefault="https://t1.rg.ltmcdn.com/es/posts/4/3/8/chanfainita_20834_600.jpg";
    useEffect(()=>{
        getDietDetail(dispatch,id,user.accessToken)
    },[])


    const [dayView,setDayView]=useState([true,"monday",0]);
    const [option,setOption]=useState("breakfast");
    const dietClick=(e,day,i)=>{
        if(dayView[1]===day)
        setDayView([!dayView[0],day,i]);
        else setDayView([true,day,i]);
    }
    const handleChange=(e)=>{
        setOption(e.target.value)
    }
    const recetDetail=(obj)=>{
        let info=[]
        if(obj===null) return [<p className={style.noRecipe}>You have no a {option} in the day {dayView[1]}</p>,<img className={style.noRecipeImg} src={"https://norecipes.com/wp-content/uploads/2019/10/nr-logo.png"}/>]
        let i=0;
        for (const key in obj) {
            if(key==="image")
            info.push(<div key={i} className={style.imgRecipe}><img key={i} src={obj[key]||imgRecipDefault}/></div>)
            else if (key==="title")
            info.push(<h3 key={i}>{obj[key][0].toUpperCase()+obj[key].slice(1)}</h3>)
            else if (key==="description"|| key==="updatedAt"||key==="UserId"||key==="createdAt")
            continue;
            else
            info.push(
                <div key={i} className={style.cardDescr}>
                    <p>{key==="kcal"?"Energy":key[0].toUpperCase()+key.slice(1)}</p>
                    <p>{key==="kcal"?`${obj[key]}kcal`:obj[key]?obj[key]:0+"g"}</p>
                </div>
            
            )
            i++;
        }
        return info;
    }
    const days= ()=>{
        let days=[];
        diet.plain.forEach(({day},i)=>days.push(<span key={i} onClick={(e)=>dietClick(e,day,i)} className={`${style.day} ${dayView[0]&&dayView[1]===day&&style.daySelect}`}>{day[0].toUpperCase()+day.slice(1)}</span>))
        return days
    }
    const data= (plain)=>{
        let obj= {
            energy:0,
            carbohydrates:0,
            grease:0,
            proteins:0
        }
        for (const key in plain) {
            plain[key][0]&&plain[key].forEach(({kcal,carbohydrates,grease,proteins})=>{
                obj.energy+=kcal;
                obj.carbohydrates+=carbohydrates;
                obj.grease+=grease;
                obj.proteins+=proteins;
            })
        }
        return [
            <div key={1}>
                    <p>Energy</p>
                    <p>{obj.energy}kcal</p>
            </div>,
            <div key={2}>
                <p>Carbohydrates</p>
                <p>{obj.carbohydrates}g</p>
            </div>,
            <div key={3}>
                <p>Grease</p>
                <p>{obj.grease}g</p>
            </div>,
            <div key={4}>
                <p>Proteins</p>
                <p>{obj.proteins}g</p>
            </div>
        ]
    }
    return (
		<div className={style.page}>
            <div className={style.header}>
				<Link to='/'>
					<img id={style.icon} src={home} alt="home" />
				</Link>
				<hr />
				<h1>Diet visualization</h1>
			</div>
            <br/>
            <h2>{diet.title.toUpperCase()}</h2>
            <div className={style.statics}>
                {data(diet.plain[dayView[2]].meals)}
            </div>
            <div className={style.containerOptions}>
                <div className={style.days}>
                    {days()}
                </div>
            <div>
                <form>
                    <div className={style.contentSelect}>
                        <select onChange={handleChange}> 
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                        <i></i>
                    </div>
                </form>
                </div>
            </div>
            <div className={style.containerFoods}>
                {diet.plain[dayView[2]].meals[option]
                .map((food,i)=><div key={i} className={style.cardFood}>{recetDetail(food)}</div>)}
            </div>
            <br/>
		</div>
	);
}