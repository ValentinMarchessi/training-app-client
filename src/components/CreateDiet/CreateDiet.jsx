import React, { useEffect, useState } from 'react'
import { useField } from '../../hooks/useField/useField'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecipesByUserId } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser'

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const CreateDiet = () => {
    const { userId, accessToken } = useSelector(state => state.user.currentUser)
    const allRecipes = useSelector(state => state.recipes.allRecipesByUserId)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllRecipesByUserId(dispatch, userId, accessToken)
    }, [dispatch])


    {/* CUSTOM HOOK TOMO DATOS ESPECIFICOS DE LOS INPUTS */ }
    const title = useField({ type: 'text' })
    const price = useField({ type: 'number' })


    const [meals, setMeals] = useState(
        {
            breakfast: [], //Id de recipes
            lunch: [],
            dinner: []
        }
    )

    {/* CREO ESTADOS PARA GUARDAR UN PLAN Y DESPUES INSERTARLO EN LA DIET */ }
    const [newPlain, setNewPlain] = useState(
        {
            day: '', // tuesday, wednesday, thursday, friday, saturday, sunday
            meals: {}
        }
    )

    setNewPlain({

    })

    {/* 1 OBJETO QUE DEBEMOS CARGAR A LA NUEVA DIETA */ }
    const [diet, setDiet] = useState(
        [
            {
                title: 'TITULO DE LA DIETA',
                price: 29292,
                plain: []
            }
        ]
    )


    const handleChangeSelectMeals = (e) => {
        setMeals({
            ...meals,
            [e.target.name]: [...meals[e.target.name], e.target.value,]
        }
        )
    }
    const handleChangeSelectPlain = (e) => {
        setNewPlain({
            ...newPlain,
            [e.target.name]: e.target.value,
        }
        )
    }

    return (
        <div>
            <div className="contentTopbar"></div>
            <form>
                <div className="formTop">
                    <input
                        {...title}
                        name='title'
                    />
                </div>
                <div className="formCenter">
                    <select
                        value={newPlain.day}
                        name='day'
                        onChange={handleChangeSelectPlain}
                    >
                        <option >Days</option>
                        {days?.map(day => (
                            <option key={day} value={day} >{day}</option>
                        ))}
                    </select>
                    <select
                        value={meals.breakfast}
                        name='breakfast'
                        onChange={handleChangeSelectMeals}
                    >
                        <option >Breakfasts</option>
                        {allRecipes?.map(recipe => (
                            <option key={recipe.id} value={recipe.id} >{recipe.title}</option>
                        ))}
                    </select>
                    <select
                        value={meals.lunch}
                        name='lunch'
                        onChange={handleChangeSelectMeals}
                    >
                        <option >lunches</option>
                        {allRecipes?.map(recipe => (
                            <option key={recipe.id} value={recipe.id} >{recipe.title}</option>
                        ))}
                    </select>
                    <select
                        value={meals.dinner}
                        name='dinner'
                        onChange={handleChangeSelectMeals}
                    >
                        <option >Dinners</option>
                        {allRecipes?.map(recipe => (
                            <option key={recipe.id} value={recipe.id} >{recipe.title}</option>
                        ))}
                    </select>
                </div>
                <div className="formButton">
                    <input
                        {...price}
                        name='price'
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateDiet