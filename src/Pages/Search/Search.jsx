import React, { useEffect, useState } from 'react';
import s from './Search.module.scss';
import test from '../../assets/images/imageBg.png';
import user from '../../assets/images/imageUser.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTrainers } from '../../Redux/apiCalls/allUsersTrainer/allUsersTrainer';
import { getAllNutritionits } from '../../Redux/apiCalls/allUsersNutritionist/allUsersNutritionist';
import { getAllRoutines } from '../../Redux/apiCalls/rutinesCall/getAllRoutines';
import { getAllDiets } from '../../Redux/apiCalls/dietsCall/getAllDiets';
import { Navbar } from '../../components';
import { Select } from '../../components';

import RoutineCard from './components/RoutineCard/RoutineCard';
import UserCard from './components/UserCard/UserCard';
import Searchinput from './components/Search/SearchInput';


export default function Search() {
    const dispatch = useDispatch()
    const { accessToken } = useSelector(state => state.user.currentUser.accessToken);
    const [currentType, setCurrentType] = useState('');
    const [currentItems, setCurrentItems] = useState([]);

    //Var para realizar realizar busquedas
    const [search, newSearch] = useState('');
    const [input, newInput] = useState('');

    //Cada vez que se eliga un producto en esepecifico se acutiza el currenType y dependiendo de eso se hace la petición
    //Se utiliza la var currentItem como arreglo en el que se almacenan los productos a mostrar
    useEffect(() => {
        //El producto por default son las dietas
        if (currentType === 'Diets' || !currentType) {
            getAllDiets(dispatch, accessToken)
                .then(data => setCurrentItems(data));
        };
        if (currentType === 'Routines') {
            getAllRoutines(dispatch, accessToken)
                .then(data => setCurrentItems(data));
        };
        if (currentType === 'Personal Trainers') {
            getAllTrainers(dispatch, accessToken)
                .then(data => setCurrentItems(data));
        };
        if (currentType === 'Nutritionists') {
            getAllNutritionits(dispatch, accessToken)
                .then(data => setCurrentItems(data));
        };
    }, [currentType]);

    //Para cuando el search no tenga nada
    useEffect(() => {
        //Cuando input no tenga nada
        if (!input.length) {
            if (currentType === 'Diets' || !currentType) {
                getAllDiets(dispatch, accessToken)
                    .then(data => setCurrentItems(data));
            };
            if (currentType === 'Routines') {
                getAllRoutines(dispatch, accessToken)
                    .then(data => setCurrentItems(data));
            };
            if (currentType === 'Personal Trainers') {
                getAllTrainers(dispatch, accessToken)
                    .then(data => setCurrentItems(data));
            };
            if (currentType === 'Nutritionists') {
                getAllNutritionits(dispatch, accessToken)
                    .then(data => setCurrentItems(data));
            };
        }
    }, [input])

    //Cada vez que se realice una busqueda

    const [inicio, setInicio] = useState(0);
    //Var en la que se almacenan los elementos de la páginacion actual, mostrando actualmente 9 por página
    let current = currentItems ? currentItems.slice(inicio, inicio + 9) : [];
    //Var utilizadas para los filtros
    const [reviewSort, setReviewSort] = useState(false);
    const [ratingSort, setRatingSort] = useState(false);
    const [priceSort, setPriceSort] = useState(false);

    function sortHandler(type) {
        //Hacemos una copia del estado ya que no sé puede cambiar directamente 
        let aux = [...currentItems];
        let auxState;
        setInicio(0);
        type === 'reviews' ? auxState = reviewSort : type === 'rating' ? auxState = ratingSort : auxState = priceSort;
        setCurrentItems(aux.sort((a, b) => a[type] < b[type] ? (auxState ? -1 : 1) : a[type] > b[type] ? (auxState ? 1 : -1) : 0));
        type === 'reviews' ? setReviewSort(!reviewSort) : type === 'rating' ? setRatingSort(!ratingSort) : setPriceSort(!priceSort);
    };

    return (
        <>
            <Navbar />
            <div className={s.page}>
                <div className={s.search}>
                    <div className={s.fields}>
                        {/*Esto se debe mejorar : Son los filtros */}
                        <button onClick={() => sortHandler('reviews')}>
                            Reviews
                        </button>
                        <button onClick={() => sortHandler('rating')}>
                            Raiting
                        </button>
                        <button onClick={() => sortHandler('price')}>
                            Price
                        </button>
                    </div>
                    <Select callback={(e) => setCurrentType(e.target.value)} options={[{ value: 'Routines' }, { value: 'Diets' }, { value: 'Nutritionists' }, { value: 'Personal Trainers' }]} />
                    {/* Esta es el input de busqueda */}
                    <Searchinput callback={setCurrentItems} setInput={newInput} type={currentType} />
                </div>
                <h2 id={s.results}>{search && `Resultados para: ${search}`}</h2>

                <div id='paginationContainer' className={s.resultContainer}>
                    {/* Aqui es donde se muestra todo */}
                    {currentType === 'Nutritionists' || currentType.includes('Trainers') ? current.map(element =>
                        <Link to={`/userDetail/${element.id}`} style={{ textDecoration: 'none', color: 'unset', margin: '10px' }}>
                            <UserCard
                                id={element.id}
                                profileImg={element.profile_img}
                                username={element.username}
                                email={element.email}
                                gender={element.gender}
                                country={element.country}
                                nutritionist={element.is_nutritionist}
                                PTrainer={element.is_personal_trainer}
                            />
                        </Link>
                    )
                        : current.map(element =>
                            currentType === 'Routines' ? <Link to={`/routineDetail/${element.id}`} style={{ textDecoration: 'none', color: 'unset', margin: '10px' }}>
                                <RoutineCard
                                    avatar={element.owner?.profile_img}
                                    author={element.owner?.username}
                                    email={element.owner?.email}
                                    title={element.title}
                                    rating={element.rating}
                                    reviews={element.reviews}
                                    price={element.price}
                                    image={element.image}
                                />
                            </Link>
                                : <Link to={`/dietDetail/${element.id}`} style={{ textDecoration: 'none', color: 'unset', margin: '10px' }}>
                                    <RoutineCard
                                        avatar={element.owner?.profile_img}
                                        author={element.owner?.username}
                                        email={element.owner?.email}
                                        title={element.title}
                                        rating={element.rating}
                                        reviews={element.reviews}
                                        price={element.price}
                                        image={element.image}
                                    />
                                </Link>
                        )}
                </div>

                <div className={s.pagination}>
                    <button onClick={() => inicio !== 0 ? setInicio(inicio - 8) : null}>Previous</button>
                    <button onClick={() => inicio + 8 < currentItems.length ? setInicio(inicio + 9) : null}>Next</button>
                </div>

            </div>
        </>
    );
}