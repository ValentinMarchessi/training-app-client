import style from './ViewDiets.module.scss';
import DietCard from '../DietCard/DietCard.jsx';
import { useEffect } from 'react';
import { getDietsById } from '../../../Redux/apiCalls/dietsCall/getDietsById';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const diet = {
    name: 'Dieta Cetogénica',
    clients: [
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
    ],
    weekly: {
        energy: 4000,
        carbs: 200,
        fats: 300,
        proteins: 400,
    },
};

export default function ViewDiets() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.currentUser);
    const diets = useSelector(store => store.diets.dietsById);

    useEffect(() => {
        getDietsById(dispatch, user.userId, user.accessToken);
        console.log(diets);
    }, [getDietsById, dispatch, user.userId, user.accessToken]);

    const dietCards = diets.map(diet =>
        <div key={diet.id}>
            <h1>{diet.title}</h1>
            {diet.plain.map(o =>
                <div>
                    {o.day}
                    <h2>Breakfast</h2>
                    {o.meals.breakfast.map(meal => <p>{meal}</p>)}
                    <h2>Lunch</h2>
                    {o.meals.lunch.map(meal => <p>{meal}</p>)}
                    <h2>Dinner</h2>
                    {o.meals.dinner.map(meal => <p>{meal}</p>)}
                </div>
            )}
        </div>
    )

    return (
        <div className={style.body}>
            <h1 id={style.myPlans}>Planes</h1>
            {dietCards}
            <div className={style.plans}>
                <DietCard name={diet.name} clients={diet.clients} weekly={diet.weekly} />
            </div>
            <Link to='/diets/create' >
                <button>Create Diets</button>
            </Link>
            <Link to='/recipes' >
                <button>Create Recipe</button>
            </Link>
        </div>
    );
}
