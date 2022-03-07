import React, { useEffect, useState } from 'react'
import { useField } from '../../../../hooks/useField/useField'
import { useDispatch, useSelector } from 'react-redux'
import { postCreateRecipes } from '../../../../Redux/apiCalls/recipesCall/createRecipes';
import { updateRecipes } from '../../../../Redux/apiCalls/recipesCall/updateRecipes';
import s from './createRecipe.module.scss';

//IMAGES
import pencil from '../../../../assets/images/icons/pencil.svg';


const CreateRecipe = ( { object } ) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user?.currentUser.userId);
    const token = useSelector(state => state.user?.currentUser.accessToken)


    //Estado para guardar la newReceta para dispachar
    const [recipe, setRecipe] = useState({
        title: object ? object.title : '',
        description: object ? object.description : '',
        kcal: object ? object.kcal : 0,
        grs: object ? object.grs : 0,
        carbohydrates: object ? object.carbohydrates : 0,
        grease: object ? object.grease : 0,
        proteins: object ? object.proteins : 0
    });


    const handleChange = (target) =>{
        setRecipe(prev => {
            return {
                ...prev,
                [target.name] : target.value 
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esta es la receta que se enviará',recipe)
        if(object){
            updateRecipes(dispatch, userId, object.id ,recipe, token );
        }else{
            postCreateRecipes(dispatch, userId, recipe,token);
        }
        window.location.reload();
    }

    return (
        <div className={s.container}>
            <div className={s.contentModal}>
                <form className={s.contentItemsForm} onSubmit={handleSubmit} >
                    <h3 className={s.titleModal}>Receta</h3>

                    <div className={s.inputContainer}>
                        <img src={pencil} alt='pencil' className={s.icon}/>
                        <input type='text'
                            name='title'
                            placeholder='Title'
                            value={recipe.title}
                            className={s.textInput}
                            onChange={(e)=> handleChange(e.target)}
                        />
                    </div>

                    <textarea
                        name='description'
                        className={s.descriptionInput}
                        placeholder='Description'
                        value={recipe.description}
                        onChange={(e)=> handleChange(e.target)}
                        rows='10'
                        cols='40'
                    />

                    <div className={s.contentItems}>
                        <div className={s.contentItem}>
                            <label>Kcal</label>
                            <input type='number' 
                                name='kcal'
                                value={recipe.kcal}
                                placeholder='0'
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>Grs per plate</label>
                            <input type='number' 
                                name='grs'
                                value={recipe.grs}
                                placeholder='0'
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Carbohydrates</label>
                            <input type='number'
                                name='carbohydrates'
                                value={recipe.carbohydrates}
                                placeholder='0'
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Grease</label>
                            <input type='number' 
                                name='grease'
                                value={recipe.grease}
                                placeholder='0'
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Proteins</label>
                            <input type='number' 
                                name='proteins'
                                value={recipe.proteins}
                                placeholder='0'
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}/>
                        </div>
                    </div>
                    <input type='submit'className={s.submitButton} value='Add Recipe'/>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe;