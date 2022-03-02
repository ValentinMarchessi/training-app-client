import React, { useEffect, useState } from "react";
// import { useField } from "../../hooks/useField/useField";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipesByUserId } from "../../../Redux/apiCalls/recipesCall/getAllRecipesByUser";
import { createDiets } from "../../../Redux/apiCalls/dietsCall/createDiets";

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
  const { userId, accessToken } = useSelector(
    (state) => state.user.currentUser
  );
  const allRecipes = useSelector((state) => state.recipes.allRecipesByUserId);
  const dispatch = useDispatch();

  useEffect(() => {
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
        return alert("RECIPE YA ESTA");
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
        return alert("EL DIA YA ESTA");
      }
    }
    if (meals.breakfast.length === 0) {
      return alert("DEBE SELECCIONAR UNA BF");
    }
    if (meals.lunch.length === 0) {
      return alert("DEBE SELECCIONAR UNA L");
    }
    if (meals.dinner.length === 0) {
      return alert("DEBE SELECCIONAR UNA D");
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
      return alert("DEBE SELECIONAR UN DIA");
    }
  }

  function onSendDiet(e) {
    e.preventDefault();
    if (diet.title !== "" && diet.price !== "") {
      setDiet({
        title: "",
        price: "",
        plain: [],
      });
      console.log(diet);
      createDiets(dispatch, userId, diet);
    } else {
      return alert("DEBE AGREGAR UN TITULO Y UN PRECIO");
    }
  }

  return (
    <div>
      <div className="contentTopbar"></div>
      <form>
        <div className="formTop">
          <input onChange={onHandleNewDiet} value={diet.title} name="title" />
        </div>
        <div className="formButton">
          <input onChange={onHandleNewDiet} value={diet.price} name="price" />
        </div>
        <div className="formCenter">
          <button onClick={onCreateDayDiet}>CREATE DAY'S DIET</button>
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
        </div>
        <button onClick={onSendDiet}>ENVIAR DIET A DDBB</button>
      </form>
    </div>
  );
};

export default CreateDiet;
