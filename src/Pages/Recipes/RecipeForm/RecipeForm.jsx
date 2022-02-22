import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateRecipes } from '../../../Redux/apiCalls/recipesCall/createRecipes';

const RecipeForm = ()=>{
      const currentUser = useSelector(state => state.currentUser);
      const dispatch = useDispatch()

      const handlerInput = (e)=>{
            const title = document.querySelector('#title').value;
            const kcal = parseInt(document.querySelector('#kcal').value);
            const carbohydrates = parseInt(document.querySelector('#carbohydrates').value);
            const grease = parseInt(document.querySelector('#grease').value);
            const proteins = parseInt(document.querySelector('#proteins').value);
            const grs = parseInt(document.querySelector('#grs').value);
            const description = document.querySelector('#description').value;
            if(!title || !description){
                  alert('El titulo y la decripcion no pueden estar vacíos');
                  e.preventDefault();
            } else {
                  let recipe = {
                        title,
                        kcal,
                        carbohydrates,
                        grease,
                        proteins,
                        grs,
                        description
                  }
                  e.preventDefault();
                  CreateRecipes(dispatch, recipe, currentUser.userId, currentUser.accessToken);
                  alert('Recipe Created');
            }
      }


      return <div>
            <form action="">
                  <label>Title</label>
                  <input type='text' id='title'/>
                  <label>Kcal</label>
                  <input type='number' id='kcal'/>
                  <label>Carbohydrates</label>
                  <input type='number' id='carbohydrates'/>
                  <label>Grease</label>
                  <input type='number' id='grease'/>
                  <label>Proteins</label>
                  <input type='number' id='proteins'/>
                  <label>Grs per plate</label>
                  <input type='number' id='grs'/>
                  <label>Description</label>
                  <textarea rows='10' cols='70' id='description'/>
                  <input type='submit' value='Create recipe' onClick={(e)=> handlerInput(e)}/>
            </form>
      </div>
}
export default RecipeForm;