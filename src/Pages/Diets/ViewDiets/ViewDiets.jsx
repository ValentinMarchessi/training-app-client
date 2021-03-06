import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDietsById } from '../../../Redux/apiCalls/dietsCall/getDietsById';
import DietCard from '../DietCard/DietCard.jsx';
import style from './ViewDiets.module.scss';

// const diet = {
//     name: 'Dieta Cetogénica',
//     clients: [
//         { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
//         { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
//         { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
//         { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
//         { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
//     ],
//     weekly: {
//         energy: 4000,
//         carbs: 200,
//         fats: 300,
//         proteins: 400,
//     },
// };

export default function ViewDiets() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.currentUser);
    const diets = useSelector(store => store.diets.dietsById.result);

    useEffect(() => {
        getDietsById(dispatch, user.userId, user.accessToken);
    }, [getDietsById, dispatch, user.userId, user.accessToken]);

    // const dietCards = diets?.map(diet =>
    //     <div key={diet.id}>
    //         <h1>{diet.title}</h1>
    //         {diet.plain.map(o =>
    //             <div>
    //                 {o.day}
    //                 <h2>Breakfast</h2>
    //                 {o.meals.breakfast.map(meal => <p>{meal}</p>)}
    //                 <h2>Lunch</h2>
    //                 {o.meals.lunch.map(meal => <p>{meal}</p>)}
    //                 <h2>Dinner</h2>
    //                 {o.meals.dinner.map(meal => <p>{meal}</p>)}
    //             </div>
    //         )}
    //     </div>
    // );

    return (
		<div className={style.body}>
			<h1 id={style.myPlans}>Plans</h1>
			<div className={style.plans}>
				{diets &&
                    diets.map((diet) => (
                        <Link key={diet.diet_id} to={`${diet.title}`} state={diet}>
                            <h1>{diet.title}</h1>
                        </Link>
					))}
			</div>
			{(user.Nutritionist && (
				<div className={style.emptyContainer}>
					<Link to="/diets/create">
						<button className={style.create}>Create Diets</button>
					</Link>
					<Link to="/recipes">
						<button className={style.create}>Create Recipe</button>
					</Link>
				</div>
			)) ||
				""}
		</div>
	);
}
