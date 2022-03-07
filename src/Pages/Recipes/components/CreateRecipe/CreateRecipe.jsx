import React, { useEffect, useState } from 'react'
import { useField } from '../../../../hooks/useField/useField'
import { useDispatch, useSelector } from 'react-redux'
import { postCreateRecipes } from '../../Redux/apiCalls/recipesCall/createRecipes';
import { updateRecipes } from '../../Redux/apiCalls/recipesCall/updateRecipes';
import { getAllRecipesByUserId } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser'
import s from './createRecipe.module.scss';

//IMAGES
import pencil from '../../../../assets/images/icons/pencil.svg';


const CreateRecipe = ( { object, onSuccess } ) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user?.currentUser.userId);
    const token = useSelector(state => state.user?.currentUser.accessToken)

    //console.log(object)

    //UseField toma los datos y devuelte 3 valores... 
    const titleRecipe = useField({ type: 'text' })
    const descriptionRecipe = useField({ type: 'textarea' })
    const kcal = useField({ type: 'number', quantity:'absolute' })
    const grs = useField({ type: 'number', quantity:'absolute' })
    const carbohydratesRecipe = useField({ type: 'number', quantity:'%' })
    const greaseRecipe = useField({ type: 'number', quantity:'%' })
    const proteinsRecipe = useField({ type: 'number', quantity:'%' })

    /* Estado para guardar la newReceta para dispachar */
    const [recipe, setRecipe] = useState(object)

    useEffect(()=>{
        
    },[recipe])
    //console.log(recipe, object)

    useEffect(() => {
        const handleChageRecipe = () => {
            setRecipe(prev => {
                return {
                    ...prev,
                    title: titleRecipe.value,
                    description: descriptionRecipe.value,
                    kcal: kcal.value || 0,
                    grs: grs.value || 0,
                    carbohydrates: carbohydratesRecipe.value || 0,
                    grease: greaseRecipe.value || 0,
                    proteins: proteinsRecipe.value || 0,
                }
            })
        }
        handleChageRecipe()
        console.log(recipe)
    }, [
        titleRecipe.value,
        descriptionRecipe.value,
        kcal.value,
        grs.value,
        carbohydratesRecipe.value,
        greaseRecipe.value,
        proteinsRecipe.value
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esta es la receta que se enviará',recipe)
        if(object){
            updateRecipes(dispatch, userId, object.id ,recipe, token );
        }else{
            postCreateRecipes(dispatch, userId, recipe,token);
        }
        getAllRecipesByUserId(dispatch, userId, token);

        onSuccess()



    }

    return (
        <div className={s.container}>
            <div className={s.contentModal}>
                <form className={s.contentItemsForm} onSubmit={handleSubmit}>
                    <h3 className={s.titleModal}>Receta</h3>

                    <div className={s.inputContainer}>
                        <img src={pencil} alt='pencil' className={s.icon}/>
                        <input type='text'
                            name='title'
                            placeholder={object?.title}
                            className={s.textInput}
                            onChange={(e)=> handleChange(e.target)}
                        />
                    </div>

                    <textarea
                        {...descriptionRecipe}
                        name='description'
                        className={s.descriptionInput}
                        placeholder={object?.description}
                        rows='10'
                        cols='40'
                    />

                    <div className={s.contentItems}>
                        <div className={s.contentItem}>
                            <label>Kcal</label>
                            <input
                                {...kcal}
                                name='kcal'
                                placeholder={object?.kcal}
                                className={s.numberInput}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>Grs per plate</label>
                            <input
                                {...grs}
                                name='grs'
                                placeholder={object?.grs}
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Carbohydrates</label>
                            <input
                                {...carbohydratesRecipe}
                                name='carbohydrates'
                                placeholder={object?.carbohydrates}
                                className={s.numberInput}
                                

                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Grease</label>
                            <input
                                {...greaseRecipe}
                                name='grass'
                                placeholder={object?.grease}
                                className={s.numberInput}
                                onChange={(e)=> handleChange(e.target)}
                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Proteins</label>
                            <input
                                {...proteinsRecipe}
                                name='protein'
                                placeholder={object?.proteins}
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