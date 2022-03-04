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
/*
TODO: Que se conecte al estado y muestre las cosas
TODO: Utiliza el type

*/


export default function Search() {
    //Hacer dispatch segun el type
    const elementosDeTest = 61
    const dispatch = useDispatch()
    const { accessToken } = useSelector(state=>state.user.currentUser.accessToken);
    const [ currentType, setCurrentType ] = useState('');
    const [currentItems, setCurrentItems] = useState([]);

    //Cada vez que se eliga un producto en esepecifico se acutiza el currenType y dependiendo de eso se hace la petición
    //Se utiliza la var currentItem como arreglo en el que se almacenan los productos a mostrar
    useEffect(()=>{
        console.log('Current Type', currentType);
        //El producto por default son las dietas
        if(currentType === 'Diets' || !currentType){
            getAllDiets(dispatch, accessToken)
                .then(data => setCurrentItems( data ));
        };
        if(currentType === 'Routines'){
            getAllRoutines(dispatch, accessToken)
                .then(data => setCurrentItems( data ));
        };
        if(currentType === 'Personal Trainers'){
            getAllTrainers(dispatch, accessToken)
                .then(data => setCurrentItems( data ));
        };
        if(currentType === 'Nutritionists' ){
            getAllNutritionits(dispatch, accessToken)
                .then(data => setCurrentItems( data ));
        };
        console.log('CurrentItem: ', currentItems);
    },[currentType]);


    let rating = 0
    let reviews = 0
    let price = 0
    let ratingdir = 'up'
    let reviewsdir = 'up'
    let pricedir = 'up'
    const routines = {
        author: (index) => String.fromCodePoint(index).toString(),
        authorTitle: 'profesor',
        rating: () => {
            if (rating === 0) ratingdir = 'up'
            if (rating === 5) ratingdir = 'down'
            if (ratingdir === 'up') return rating++
            if (ratingdir === 'down') return rating--
        },
        reviews: () => {
            if (reviews === 0) reviewsdir = 'up'
            if (reviews === 10) reviewsdir = 'down'
            if (reviewsdir === 'up') return reviews++
            if (reviewsdir === 'down') return reviews--
        },
        price: () => {
            if (price === 0) pricedir = 'up'
            if (price === 15) pricedir = 'down'
            if (pricedir === 'up') return price++
            if (pricedir === 'down') return price--
        },
        image: test,
        avatar: user
    }
    let obj = []
    for (let i = 0; i < elementosDeTest; i++) {
        obj.push({
            author: routines.author(i),
            authorTitle: routines.authorTitle,
            rating: routines.rating(),
            reviews: routines.reviews(),
            price: routines.price(),
            image: test,
            avatar: user
        })
    }
    const [inicio, setInicio] = useState(0);
    let current = currentItems.slice(inicio, inicio + 8);
    const [search, newSearch] = useState('');
    const [input, newInput] = useState('');
    const [reviewSort, setReviewSort] = useState(false);
    const [scoreSort, setScoreSort] = useState(false);
    const [priceSort, setPriceSort] = useState(false);

    function sortHandler(type){
        let auxState;
        setInicio(0);
        type === 'reviews' ? auxState = reviewSort : type === 'reviews' ? auxState= scoreSort: auxState= priceSort
        setCurrentItems(currentItems.sort((a, b)=>a[type] < b[type] ? (auxState?-1:1) : a[type] > b[type]?(auxState?1:-1):0))
        type === 'reviews' ? setReviewSort(!reviewSort):type==='reviews'?setScoreSort(!scoreSort):setPriceSort(!priceSort)
    }   

    return (
        <>
        <Navbar/>
        <div className={s.searchContainer}>
            <div className={s.searchBar}>
                <form onSubmit={event=>{
                    event.preventDefault()
                    newSearch(input)
                }}>
                    <div className={s.searchField}>
                        {/*Esto se debe mejorar : Son los filtros */}
                        <div className={s.filters}>
                            <button onClick={() => sortHandler('reviews')}>
                                Reviews
                            </button>
                            <button onClick={() => sortHandler('rating')}>
                                Score
                            </button>
                            <button onClick={() => sortHandler('price')}>
                                Price
                            </button>
                            <Select callback={ (e) => setCurrentType(e.target.value)} options={[{value:'Routines'},{value:'Diets'},{value:'Nutritionists'},{value:'Personal Trainers'}]}/>
                        </div>
                        <div className={s.searchInput}>
                            {/* Esta es el input de busqueda */}
                            <input type='text' className={s.addInput} placeholder={'Search items'} onChange={ e => { newInput( e.target.value ) }}/>
                            <input type='submit' className={s.submitInput} value='Submit'/>
                        </div>
                    </div>
                </form>
                <div className={s.resultText}> <h2>{search?`Resultados para: ${search}`:''}</h2> </div>
            </div>

            <div id='paginationContainer' className={s.resultContainer}>  
            {/* Aqui es donde se muestra todo */}
                {currentType === 'Nutritionists' || currentType.includes('Trainers') ? current.map(element =>
                    <Link to={`/userDetail/${element.id}`} style={{ textDecoration: 'none', color: 'unset', margin: '10px' }}>
                        <UserCard
                            id= {element.id}
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
                    <Link to={`/routineDetail/${element.id}`} style={{ textDecoration: 'none', color: 'unset', margin: '10px' }}>
                        <RoutineCard
                            avatar={element.owner?.profile_img}
                            author={element.owner?.username}
                            email={element.owner?.email}
                            title= {element.title}
                            rating={element.rating}
                            reviews={element.reviews}
                            price={element.price}
                            image={element.image}
                        />
                    </Link>
                )}

            </div>

            <div className={s.pagination}>
                <button onClick={() => inicio !== 0 ? setInicio(inicio-8) : null}>Previous</button>
                <button onClick={() => inicio + 8 < currentItems.length ? setInicio(inicio+8) : null}>Next</button>
            </div>
        </div>
        </>
    );
}