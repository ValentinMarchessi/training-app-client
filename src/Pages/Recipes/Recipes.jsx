import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//COMPONENTS
import { Navbar, Overlay } from '../../components';
import { getAllRecipesByUserId } from '../../Redux/apiCalls/recipesCall/getAllRecipesByUser';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import style from './Recipes.module.scss';

const Recipes = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const { userId, accessToken } = useSelector(state => state.user?.currentUser);
    const recipes = useSelector(state => state.recipes.allRecipesByUserId);
    const [active, setActive] = useState(false);

    const overlayStyle = {
        backgroundColor: '#201f24c3',
        width: 'max-content',
        color: '#fff'
    };

    const handleOverlay = {
        open: () => setActive(true),
        close: () => setActive(false),
        edit: (update, value) => {
            setActive(true);
            setData(update ? value : {});
        }
    };

    useEffect(() => {
        getAllRecipesByUserId(dispatch, userId, accessToken);
    }, []);

    console.log(recipes)

    return <div>
        <Navbar />
        <div className={style.container}>
            <button className={style.addRecipeButton} onClick={handleOverlay.edit}>Create Recipe</button>
            <Overlay active={active} onClose={handleOverlay.close} style={overlayStyle}> {/*className={style.formClose} id='recipeForm' key='createRecipe'>*/}
                <CreateRecipe object={data} onAdd={handleOverlay.close} />
            </Overlay>
            <div className={style.recipesContainer} key='recipesContainer'>
                {recipes ? recipes.map((recipe, key) => <RecipeContainer key={key} recipe={recipe} user={{ userId, accessToken }} onClick={handleOverlay.edit} />) : null}
            </div>
        </div>
    </div>;
};

export default Recipes;