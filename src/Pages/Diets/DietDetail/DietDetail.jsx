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
    //const diet=useSelector(state=>state.diets.dietDetail);
    const foodImg="https://t1.rg.ltmcdn.com/es/posts/7/0/6/albondigas_caseras_51607_600.jpg"
    const receta=[{title:"pollo",image:foodImg,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"},{title:"pollo",image:foodImg,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"},{title:"pollo",image:foodImg,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"},{title:"pollo",image:foodImg,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"},{title:"pollo",image:foodImg,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"},{title:"empanadas",image:null,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buendas receta"}];
    const receta2=[{title:"Mila",image:null,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"}];
    const receta3=[{title:"Carne",image:null,kcal:12,carbohydrates:30,grease:30,proteins:1,grs:30,description:"Buena receta"}];
    const diet= {
        title:"dieta rica",
        plain:[{day:"Monday",meals:{breakfast:receta,lunch:receta2,dinner:receta3}},{day:"Thueday",meals:{breakfast:receta,lunch:receta2,dinner:receta3}},{day:"Wednesday",meals:{breakfast:receta2,lunch:receta,dinner:receta3}},]
    }
    useEffect(()=>{
        //getDietDetail(dispatch,id,user.accessToken)
    },[])


    const [dayView,setDayView]=useState([true,"Monday",0]);
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
        for (const key in obj) {
            if(key==="image")
            info.push(<div className={style.imgRecipe}><img src={obj[key]}/></div>)
            else if (key==="title")
            info.push(<h3>{obj[key][0].toUpperCase()+obj[key].slice(1)}</h3>)
            else if (key==="description")
            continue;
            else
            info.push(
                <div className={style.cardDescr}>
                    <p>{key==="kcal"?"Energy":key[0].toUpperCase()+key.slice(1)}</p>
                    <p>{key==="kcal"?`${obj[key]}kcal`:obj[key]+"g"}</p>
                </div>
            
            )
        }
        return info;
    }
    const days= ()=>{
        let days=[];
        diet.plain.forEach(({day},i)=>days.push(<span onClick={(e)=>dietClick(e,day,i)} className={`${style.day} ${dayView[0]&&dayView[1]===day&&style.daySelect}`}>{day}</span>))
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
            plain[key].forEach(({kcal,carbohydrates,grease,proteins})=>{
                obj.energy+=kcal;
                obj.carbohydrates+=carbohydrates;
                obj.grease+=grease;
                obj.proteins+=proteins;
            })
        }
        return [
            <div>
                    <p>Energy</p>
                    <p>{obj.energy}</p>
            </div>,
            <div>
                <p>Carbohydrates</p>
                <p>{obj.carbohydrates}</p>
            </div>,
            <div>
                <p>Grease</p>
                <p>{obj.grease}</p>
            </div>,
            <div>
                <p>Proteins</p>
                <p>{obj.proteins}</p>
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
            <div className={style.containerFoods}>
                {diet.plain[dayView[2]].meals[option]
                .map((food)=><div className={style.cardFood}>{recetDetail(food)}</div>)}
            </div>
		</div>
	);
}