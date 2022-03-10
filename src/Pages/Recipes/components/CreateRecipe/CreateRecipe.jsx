import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//IMAGES
import pencil from '../../../../assets/images/icons/pencil.svg';
import { postCreateRecipes } from '../../../../Redux/apiCalls/recipesCall/createRecipes';
import { getAllRecipesByUserId } from '../../../../Redux/apiCalls/recipesCall/getAllRecipesByUser';
import { updateRecipes } from '../../../../Redux/apiCalls/recipesCall/updateRecipes';
import style from './createRecipe.module.scss';



const CreateRecipe = ({ object, onAdd }) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user?.currentUser.userId);
    const token = useSelector(state => state.user?.currentUser.accessToken);

    console.log(object);

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

    const handleChange = (target) => {
        console.log(target.name);
        console.log(target.value);
        setRecipe(prev => {
            return {
                ...prev,
                [target.name]: target.value 
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esta es la receta que se enviará', recipe);
        if (object) {
            updateRecipes(dispatch, userId, object.id, recipe, token);
        } else {
            postCreateRecipes(dispatch, userId, recipe, token);
            getAllRecipesByUserId(dispatch, userId, token);
        }
        // nepundir: slow
        // window.location.reload();
        onAdd();
    };

    return (
        <div className={style.container}>
            <div className={style.contentModal}>
                <form className={style.contentItemsForm} onSubmit={handleSubmit} >
                    <h3 className={style.titleModal}>Receta</h3>

                    <div className={style.inputContainer}>
                        <img src={pencil} alt='pencil' className={style.icon} />
                        <input type='text'
                            name='title'
                            placeholder='Title'
                            value={recipe.title}
                            className={style.textInput}
                            onChange={(e) => handleChange(e.target)}
                        />
                    </div>

                    <textarea
                        name='description'
                        className={style.descriptionInput}
                        placeholder='Description'
                        value={recipe.description}
                        onChange={(e) => handleChange(e.target)}
                        rows='10'
                        cols='40'
                    />

                    <div className={style.contentItems}>
                        <div className={style.contentItem}>
                            <label>Kcal</label>
                            <input type='number' 
                                className={style.inputCreateRutine}
                                name='kcal'
                                value={recipe.kcal}
                                placeholder='0'
                                className={style.numberInput}
                                onChange={(e) => handleChange(e.target)}
                            />
                        </div>

                        <div className={style.contentItem}>
                            <label>Grs per plate</label>
                            <input type='number' 
                                className={style.inputCreateRutine}
                                name='grs'
                                value={recipe.grs}
                                placeholder='0'
                                className={style.numberInput}
                                onChange={(e) => handleChange(e.target)}
                            />
                        </div>

                        <div className={style.contentItem}>
                            <label>% Carbohydrates</label>
                            <input type='number'
                                className={style.inputCreateRutine}
                                name='carbohydrates'
                                value={recipe.carbohydrates}
                                placeholder='0'
                                className={style.numberInput}
                                onChange={(e) => handleChange(e.target)}
                            />
                        </div>

                        <div className={style.contentItem}>
                            <label>% Grease</label>
                            <input type='number' 
                                className={style.inputCreateRutine}
                                name='grease'
                                value={recipe.grease}
                                placeholder='0'
                                className={style.numberInput}
                                onChange={(e) => handleChange(e.target)}
                            />
                        </div>

                        <div className={style.contentItem}>
                            <label>% Proteins</label>
                            <input type='number' 
                                className={style.inputCreateRutine}
                                name='proteins'
                                value={recipe.proteins}
                                placeholder='0'
                                className={style.numberInput}
                                onChange={(e) => handleChange(e.target)} />
                        </div>
                    </div>
                    <input type='submit' className={style.submitButton} value='Add Recipe' />
                </form>
            </div>
        </div>
    );
};

export default CreateRecipe;