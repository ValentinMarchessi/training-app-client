import React, { useEffect, useState } from 'react'
import './Search.scss'
import test from '../../assets/images/imageBg.png'
import user from '../../assets/images/imageUser.jpg'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTrainers } from '../../Redux/apiCalls/allUsersTrainer/allUsersTrainer';
import { getAllNutritionits } from '../../Redux/apiCalls/allUsersNutritionist/allUsersNutritionist';
import { getAllRoutines } from '../../Redux/apiCalls/rutinesCall/getAllRoutines';

import { Navbar, Searchbar } from '../../components';
import RoutineCard from './RoutineCard/RoutineCard';

export default function Search() {
    //Hacer dispatch segun el type
    const { type } = useParams()
    const elementosDeTest = 61

    const dispatch = useDispatch()

    const [currentType, setCurrentType] = useState(type)
    console.log(type)

    const RoutinesDB = useSelector(state=>state.routines.allRutines)
    const TrainersDB = useSelector(state=>state.allUsersTrainer.usersTrainers)
    const NutritionistsDB = useSelector(state=>state.allUsersNutritionits.usersNutritionits)

    //Por si el usuario recarga la página.
    window.addEventListener('load',()=>{
        try{
            if(!RoutinesDB?.length&&type==='routines') getAllRoutines(dispatch)
            if(!TrainersDB?.length&&type==='trainers') getAllTrainers(dispatch)
            if(!NutritionistsDB?.length&&type==='nutritionists') getAllNutritionits(dispatch)
        } catch(err){
            console.log(err)
        }
        
    })

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

    const [currentobj, setObj] = useState(obj)

    const [inicio, setInicio] = useState(0)

    let current = currentobj.slice(inicio, inicio + 8)

    const [search, newSearch] = useState('')
    const [input, newInput] = useState('')

    const [reviewSort, setReviewSort] = useState(false)
    const [scoreSort, setScoreSort] = useState(false)
    const [priceSort, setPriceSort] = useState(false)
		
    function sortHandler(type){
        let auxState
        setInicio(0)

        type==='reviews'?auxState=reviewSort:type==='reviews'?auxState=scoreSort:auxState=priceSort
        setObj(currentobj.sort((a, b)=>a[type] < b[type] ? (auxState?-1:1) : a[type] > b[type]?(auxState?1:-1):0))
        type==='reviews'?setReviewSort(!reviewSort):type==='reviews'?setScoreSort(!scoreSort):setPriceSort(!priceSort)
    }   
    

    return (
        <div className='searchContainer'>
            <Navbar user={1} />
            {/* <SearchBar type={type} /> */}
            <div className='searchBar'>
                <form onSubmit={event=>{
                    event.preventDefault()
                    newSearch(input)
                }}>
                    <div className='searchField'>
                        <div className='searchInput'>
                            <input type='text' id='addInput' placeholder={`Search for ${type}`} onChange={event=>{
                                newInput(event.target.value)
                            }}/>
                            <input type='submit' id='submitInput' value='submit'/>
                        </div>
                    
                        
                        <div className='filters'>
                        <button onClick={() => sortHandler('reviews')}>
                            Reviews
                        </button>
                        <button onClick={() => sortHandler('rating')}>
                            Score
                        </button>
                        <button onClick={() => sortHandler('price')}>
                            Price
                        </button>
                        </div>
                    </div>
                </form>
                    <div style={{width:'80%'}}><h2 style={{height:'2rem', margin:'5px', marginLeft:'10px'}}>{search?`Resultados para ${search}`:''}</h2></div>
                
                
		    </div>

            
            <div id='paginationContainer'>
                {current.map(element =>
                    <Link to='/routineDetail' style={{ textDecoration: 'none', color: 'unset', margin: '10px' }}>
                        <RoutineCard
                            //name='Roberto' 
                            author={element.author}
                            authorTitle={element.authorTitle}
                            rating={element.rating}
                            reviews={element.reviews}
                            price={element.price}
                            image={element.image}
                            avatar={element.avatar}
                        />
                    </Link>
                )}
            </div>
            <button onClick={() => inicio!==0 ? setInicio(inicio-8) : null}>previous</button>
            <button onClick={() => inicio+8 < elementosDeTest ? setInicio(inicio+8) : null}>next</button>
        </div>
    );
}