import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecipes }  from '../../../../Redux/apiCalls/recipesCall/deleteRecipes';
import CreateRecipe from '../CreateRecipe/CreateRecipe'
import s from './RecipeContainer.module.scss';

//RECIBE EL OBJETO COMPLETO DE LA RECETA
const RecipeContainer = ( {recipe, user, onClick} )=>{
      const dispatch = useDispatch();

      return <div className={s.container} key={recipe.id}>
                  {recipe.imagen ? <img src={recipe.image} alt={'Recipe Imagen'}/> : <div className={s.fakeImage}/>}
                  <h1 className={s.title}>{recipe.title}</h1>
                  <div className={s.nutritionalInfo}>
                        <div className={s.element}>
                              <h4 className={s.elementTitle}>Proteins</h4>
                              <h4 className={s.elementData}>{recipe.proteins}%</h4>
                        </div>
                        <div className={s.element}>
                              <h4 className={s.elementTitle}>Kcal</h4>
                              <h4 className={s.elementData}>{recipe.kcal}%</h4>
                        </div>
                        
                        <div className={s.element}>
                              <h4 className={s.elementTitle}>Grease</h4>
                              <h4 className={s.elementData}>{recipe.grease}%</h4>
                        </div>
                        <div className={s.element}>
                              <h4 className={s.elementTitle}>Carbohydrates</h4>
                              <h4 className={s.elementData}>{recipe.carbohydrates}%</h4>
                        </div>
                        <div className={s.element}>
                              <h4 className={s.elementTitle}>Grs per plate</h4>
                              <h4 className={s.elementData}>{recipe.grs}</h4>
                        </div>
                  </div>
                  <button className={s.deleteButton} onClick={()=>{deleteRecipes(dispatch, user.userId, recipe.id, user.token)}}>
                        Delete
                  </button>
                  <button className={s.editButton} onClick={()=> onClick(true,recipe)}>Edit</button>
            </div>
}

export default RecipeContainer;