import React, { useEffect, useState } from "react";
// import { useField } from "../../hooks/useField/useField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../../helpers/alert/alert';
import { createDiets } from "../../../Redux/apiCalls/dietsCall/createDiets";
import { getDietsById } from "../../../Redux/apiCalls/dietsCall/getDietsById";
import { getAllRecipesByUserId } from "../../../Redux/apiCalls/recipesCall/getAllRecipesByUser";
//STYLES
import "./createDiet.scss";


const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];

const CreateDiet = () => {
    const redir = useNavigate();
    const { userId, accessToken } = useSelector(
        (state) => state.user.currentUser
    );
    const allRecipes = useSelector((state) => state.recipes.allRecipesByUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        getDietsById(dispatch, userId, accessToken);
        getAllRecipesByUserId(dispatch, userId, accessToken);
    }, [dispatch]);

    // /* CUSTOM HOOK TOMO DATOS ESPECIFICOS DE LOS INPUTS */
    // const title = useField({ type: 'text' })
    // const price = useField({ type: 'number' })

    const [meals, setMeals] = useState({
        breakfast: [], //Id de recipes
        lunch: [],
        dinner: [],
    });

    /* CREO ESTADOS PARA GUARDAR UN PLAN Y DESPUES INSERTARLO EN LA DIET */
    const [newPlain, setNewPlain] = useState({
        day: "", // tuesday, wednesday, thursday, friday, saturday, sunday
        meals: {},
    });

    /* 1 OBJETO QUE DEBEMOS CARGAR A LA NUEVA DIETA */
    const [diet, setDiet] = useState({
        title: "",
        price: "",
        plain: [],
    });
    //   FUNCION ONCHANGE DE MEALS
    const handleChangeSelectMeals = (e) => {
        for (let i = 0; i < meals[e.target.name].length; i++) {
            if (meals[e.target.name][i] === e.target.value) {
                return Toast.fire({
                    icon: "info",
                    title: "RECIPE YA ESTA"
                });
            }
        }
        setMeals({
            ...meals,
            [e.target.name]: [...meals[e.target.name], e.target.value],
        });
    };
    //   FUNCION ONCHANGE DE PLAIN
    const handleChangeSelectPlain = (e) => {
        setNewPlain({
            [e.target.name]: e.target.value,
            meals: { ...meals },
        });
    };
    //   FUNCION ONCHANGE DE DIET
    const onHandleNewDiet = (e) => {
        setDiet({
            ...diet,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        setNewPlain({
            ...newPlain,
            meals: { ...meals },
        });
    }, [meals]);

    function onCreateDayDiet(e) {
        e.preventDefault();
        for (let i = 0; i < diet.plain.length; i++) {
            if (diet.plain[i].day === newPlain.day) {
                return Toast.fire({
                    icon: "info",
                    title: `${newPlain.day} slot already exists!`
                });
            }
        }
        if (meals.breakfast.length === 0) {
            return Toast.fire({
                icon: "info",
                title: "You must include a breakfast!"
            });
        }
        if (meals.lunch.length === 0) {
            return Toast.fire({
                icon: "info",
                title: "You must include a lunch!"
            });
        }
        if (meals.dinner.length === 0) {
            return Toast.fire({
                icon: "info",
                title: "You must include a dinner!"
            });
        }
        if (newPlain.day !== "" && newPlain.day !== "Days") {
            setDiet({
                ...diet,
                plain: [...diet.plain, newPlain],
            });
            setMeals({
                breakfast: [],
                lunch: [],
                dinner: [],
            });
            setNewPlain({
                day: "",
                meals: {},
            });
        } else {
            return Toast.fire({
                icon: "info",
                title: "You must select a day!"
            });
        }
    }

    async function onSendDiet(e) {
        e.preventDefault();
        if (diet.title !== "" && diet.price !== "" && diet.plain.length !== 0) {
            setDiet({
                title: "",
                price: "",
                plain: [],
            });
            await createDiets(dispatch, userId, diet, accessToken);
            await getDietsById(dispatch, userId, accessToken);
            redir('/diets');
        } else {
            return Toast.fire({
                icon: "info",
                title: "Form is missing data!"
            });
        }
    }


    return (
        <div className="container">
            <div className="navBar">
                <div className="navBarInputs">
                    <label>Title :</label>
                    <input
                        onChange={onHandleNewDiet}
                        type="text"
                        value={diet.title}
                        name="title"
                    />
                    <label>Price :</label>
                    <input
                        onChange={onHandleNewDiet}
                        type="number"
                        value={diet.price}
                        name="price"
                    />
                </div>
            </div>
            <form>
                <select
                    value={newPlain.day}
                    name="day"
                    onChange={handleChangeSelectPlain}
                >
                    <option>Days</option>
                    {days?.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select
                    value={meals.breakfast}
                    name="breakfast"
                    onChange={handleChangeSelectMeals}
                >
                    <option>Breakfasts</option>
                    {allRecipes?.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>
                            {recipe.title}
                        </option>
                    ))}
                </select>
                <select
                    value={meals.lunch}
                    name="lunch"
                    onChange={handleChangeSelectMeals}
                >
                    <option>lunches</option>
                    {allRecipes?.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>
                            {recipe.title}
                        </option>
                    ))}
                </select>
                <select
                    value={meals.dinner}
                    name="dinner"
                    onChange={handleChangeSelectMeals}
                >
                    <option>Dinners</option>
                    {allRecipes?.map((recipe) => (
                        <option key={recipe.id} value={recipe.id}>
                            {recipe.title}
                        </option>
                    ))}
                </select>
            </form>
            <button onClick={onCreateDayDiet}>Add day's diet</button>
            <div className="containerCreateDiet">
                <div className="containerTitleAndPrice">
                    <h2> Title : {diet.title}</h2>
                    <h2>Price : ${diet.price}</h2>
                </div>
                {diet.plain.map((diet) => {
                    return (
                        <div className="containerDays">
                            <h3>{diet.day}</h3>
                            {allRecipes.map((recipe) => {
                                return diet.meals.breakfast.map((b) => {
                                    if (recipe.id === b) {
                                        //TARJETA DE RECIPE
                                        return recipe.title;
                                    } else {
                                        return "";
                                    }
                                });
                            })}
                        </div>
                    );
                })}
            </div>
            <button onClick={onSendDiet}>Create Diet</button>
        </div>
    );
};

export default CreateDiet;
