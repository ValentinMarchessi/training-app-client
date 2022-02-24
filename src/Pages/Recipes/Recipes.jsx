import React, { useEffect } from 'react';
import s from './Recipes.module.scss';
//COMPONENTS
import { Navbar } from '../../components';
import { getAllRecipesByUser } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser'
import { useDispatch, useSelector } from 'react-redux';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import CreateRecipe from '../../components/CreateRecipe/CreateRecipe'
import { deleteRecipes } from '../../Redux/apiCalls/recipesCall/deleteRecipes';

const Recipes = ()=>{
      const dispatch = useDispatch();
      const userId = useSelector(state => state.user?.currentUser.userId);
      const token = useSelector(state => state.user?.currentUser.accessToken);
      const recipes = useSelector(state => state.recipes.allRecipes)

      const formReveal = ()=>{
            let form = document.querySelector('#recipeForm');
            if(form.classList.value === `${s.formClose}`){
                  // form.classList.value = `${s.formOpen}`; 
                  form.classList.toggle(`${s.formOpen}`);
                  form.classList.toggle(`${s.formClose}`);

            } else {
                  // form.classList.value = `${s.formClose}`; 
                  form.classList.toggle(`${s.formClose}`);
                  form.classList.toggle(`${s.formOpen}`);

            }
            console.log(form.classList.value)
      }

      useEffect(()=>{
            getAllRecipesByUser(dispatch, userId, token);
      },[])

      return <div>
            <Navbar/>
            <div className={s.container}>
                  <button className={s.addRecipeButton} onClick={ formReveal }>Create Recipe</button>
                  <div className={s.formClose} id='recipeForm' key='createRecipe'>
                        <CreateRecipe/>
                  </div>
                  <div className={s.recipesContainer} key='recipesContainer'>
                        {recipes.map(recipe => <RecipeContainer recipe={recipe} user={ {userId, token} }/>)}
                  </div>
            </div>
      </div>
}

export default Recipes;