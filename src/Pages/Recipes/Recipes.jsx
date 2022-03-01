import React, { useEffect, useState } from 'react';
import s from './Recipes.module.scss';
//COMPONENTS
import { Navbar } from '../../components';
import { getAllRecipesByUserId } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser'
import { useDispatch, useSelector } from 'react-redux';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import CreateRecipe from './components/CreateRecipe/CreateRecipe'

const Recipes = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const userId = useSelector(state => state.user?.currentUser.userId);
    const token = useSelector(state => state.user?.currentUser.accessToken);
    const recipes = useSelector(state => state.recipes.allRecipesByUserId);

    const formReveal = (edit, value) => {
        let form = document.querySelector('#recipeForm');
        if(edit){
            console.log(value);
            setData(value);
        } else{
            setData({});
        };
        form.classList.toggle(`${s.formOpen}`);
        form.classList.toggle(`${s.formClose}`);
    }

    useEffect(() => {
        getAllRecipesByUserId(dispatch, userId, token);
    }, [])

    return <div>
        <Navbar />
        <div className={s.container}>
            <button className={s.addRecipeButton} onClick={formReveal}>Create Recipe</button>
            <div className={s.formClose} id='recipeForm' key='createRecipe'>
                <CreateRecipe object={data}/>
            </div>
            <div className={s.recipesContainer} key='recipesContainer'>
                {recipes && recipes.map(recipe => <RecipeContainer recipe={recipe} user={{ userId, token }} onClick={formReveal} />)}
            </div>
        </div>
    </div>
}

export default Recipes;