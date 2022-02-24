import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useField } from '../../hooks/useField//useField'
import { useDispatch } from 'react-redux'
import { postCreateRecipes } from '../../Redux/apiCalls/recipesCall/createRecipes';
import './createRecipe.scss';


const CreateRecipe = () => {
    {/* Se crea dispatch */ }
    const dispatch = useDispatch()

    {/* Aqui atrapariamos el Id del usuario para mandar */ }
    // const location = useLocation()
    const navigate = useNavigate()
    const userId = "b43a718c-406b-4b79-88b0-a0830b020f7f"

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
        e.preventDefault()
        postCreateRecipes(dispatch, userId, recipe)
        navigate(`/diets/${userId}`)
    }


    return (
        <div className='overlay'>
            <div className="contentModal">
                <div className="closeBtn">X</div>
                <form className='contentItemsForm' onSubmit={handleSubmit} >
                    <h3 className='titleModal'>Comida</h3>
                    <input
                        {...titleRecipe}
                        name='title'
                        placeholder='Title...'
                    />
                    <input
                        {...kcal}
                        name='kcal'
                        placeholder='Energie...'
                    />
                    <input
                        {...grs}
                        name='ration'
                        placeholder='Ration...'
                    />
                    <input
                        {...descriptionRecipe}
                        name='description'
                        placeholder='Description...'
                    />
                    <div className="contentItems">
                        <div className="contentItem">
                            <input className='inputCreateRutine'
                                {...carbohydratesRecipe}
                                name='carbohydrates'
                                placeholder='0'
                            />
                        </div>
                        <div className="contentItem">
                            <input className='inputCreateRutine'
                                {...greaseRecipe}
                                name='grass'
                                placeholder='0'
                            />
                        </div>
                        <div className="contentItem">
                            <input className='inputCreateRutine'
                                {...proteinsRecipe}
                                name='protein'
                                placeholder='0'
                            />
                        </div>
                    </div>
                    <button style={{ background: '#5fff82' }} >Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRecipe