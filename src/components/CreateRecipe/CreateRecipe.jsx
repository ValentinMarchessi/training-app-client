import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useField } from '../../hooks/useField//useField'
import { useDispatch, useSelector } from 'react-redux'
import { postCreateRecipes } from '../../Redux/apiCalls/recipesCall/createRecipes';
import s from './createRecipe.module.scss';

//IMAGES
import pencil from '../../assets/images/icons/pencil.svg';
import thunder from '../../assets/images/icons/thunder.svg';
import balance from '../../assets/images/icons/balance.svg';


const CreateRecipe = () => {
    {/* Se crea dispatch */ }
    const dispatch = useDispatch()

    {/* Aqui atrapariamos el Id del usuario para mandar */ }
    // const location = useLocation()
    const navigate = useNavigate()
    const userId = useSelector(state => state.user?.currentUser.userId);
    const token = useSelector(state => state.user?.currentUser.accessToken)

    {/* UseField toma los datos y devuelte 3 valores... */ }
    const titleRecipe = useField({ type: 'text' })
    const descriptionRecipe = useField({ type: 'textarea' })
    const kcal = useField({ type: 'number' })
    const grs = useField({ type: 'number' })
    const carbohydratesRecipe = useField({ type: 'number' })
    const greaseRecipe = useField({ type: 'number' })
    const proteinsRecipe = useField({ type: 'number' })

    {/* Estado para guardar la newReceta para dispachar */ }
    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        kcal: 0,
        grs: 0,
        carbohydrates: 0,
        grease: 0,
        proteins: 0
    })

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
        window.location.reload();
        postCreateRecipes(dispatch, userId, recipe,token);
    }


    return (
        <div className={s.container}>
            <div className={s.contentModal}>
                <form className={s.contentItemsForm} onSubmit={handleSubmit} >
                    <h3 className={s.titleModal}>Receta</h3>

                    <div className={s.inputContainer}>
                        <img src={pencil} alt='pencil' className={s.icon}/>
                        <input
                            {...titleRecipe}
                            name='title'
                            placeholder='Title'
                            className={s.textInput}
                        />
                    </div>

                    <textarea
                        className={s.descriptionInput}
                        placeholder='Description'
                        rows='10'
                        cols='40'
                    />

                    <div className={s.contentItems}>
                        <div className={s.contentItem}>
                            <label>Kcal</label>
                            <input className={s.inputCreateRutine}
                                {...kcal}
                                name='kcal'
                                placeholder='0'
                                className={s.numberInput}

                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>Grs per plate</label>
                            <input className={s.inputCreateRutine}
                                {...grs}
                                name='grs'
                                placeholder='0'
                                className={s.numberInput}

                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Carbohydrates</label>
                            <input className={s.inputCreateRutine}
                                {...carbohydratesRecipe}
                                name='carbohydrates'
                                placeholder='0'
                                className={s.numberInput}

                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Grease</label>
                            <input className={s.inputCreateRutine}
                                {...greaseRecipe}
                                name='grass'
                                placeholder='0'
                                className={s.numberInput}

                            />
                        </div>

                        <div className={s.contentItem}>
                            <label>% Proteins</label>
                            <input className={s.inputCreateRutine}
                                {...proteinsRecipe}
                                name='protein'
                                placeholder='0'
                                className={s.numberInput}
                            />
                        </div>
                    </div>
                    <input type='submit'className={s.submitButton} value='Add Recipe'/>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe;