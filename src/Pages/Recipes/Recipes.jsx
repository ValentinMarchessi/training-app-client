import React, { useEffect, useState } from 'react';
import s from './Recipes.module.scss';
//COMPONENTS
import { Navbar } from '../../components';
import { getAllRecipesByUserId } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser'
import { useDispatch, useSelector } from 'react-redux';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import CreateRecipe from '../../components/CreateRecipe/CreateRecipe'

const Recipes = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const userId = useSelector(state => state.user?.currentUser.userId);
    const token = useSelector(state => state.user?.currentUser.accessToken);
    const recipes = useSelector(state => state.recipes.allRecipesByUserId);

    let recipe
    const {createdRecipes, updatedRecipes, deletedRecipes} = recipe = useSelector(state => state.recipes);

    

   // console.log(createdRecipes, updatedRecipes)

    const formReveal = (edit, value) => {
        let form = document.querySelector('#recipeForm');
        if(edit){
            setData(value);
        } else{
            setData({});
        };
        form.classList.toggle(`${s.formOpen}`);
        form.classList.toggle(`${s.formClose}`);
    }

    useEffect(() => {
        getAllRecipesByUserId(dispatch, userId, token);
    }, [createdRecipes,updatedRecipes,deletedRecipes])

    return <div>
        <Navbar />
        <div className={s.container}>
            <button className={s.addRecipeButton} onClick={formReveal}>Create Recipe</button>
            <div className={s.formClose} id='recipeForm' key='createRecipe'>
                <CreateRecipe object={data} onSuccess={formReveal}/>
            </div>
            <div className={s.recipesContainer} key='recipesContainer'>
                {recipes.map((recipe,i) => <RecipeContainer recipe={recipe} key={i} user={{ userId, token }} onClick={formReveal} />)}
            </div>
        </div>
    </div>
}

export default Recipes;