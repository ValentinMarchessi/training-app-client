import React from 'react';
import s from './Recipes.module.scss';
//COMPONENTS
import { Navbar } from '../../components';
import { getAllRecipesByUser } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser'
import { useDispatch, useSelector } from 'react-redux';

const Recipes = ()=>{
      const dispatch = useDispatch();
      const userId = useSelector(state => state.user?.currentUser.userId);
      const token = useSelector(state => state.user?.currentUser.token);
      const recipes = useSelector(state => state.recipes.allRecipes)
      console.log(recipes)
      return <div>
            <Navbar/>
            <div className={s.container}>
                  <button className={s.addRecipeButton} onClick={()=> getAllRecipesByUser(dispatch, userId, token) }>Create Recipe</button>




            </div>
      </div>
}

export default Recipes;