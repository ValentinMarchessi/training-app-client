import React, { useEffect, useState } from 'react'
import RoutineCard from '../../components/RoutineCard/RoutineCard';
import './Search.scss'
import test from '../../assets/images/imageBg.png'
import user from '../../assets/images/imageUser.jpg'
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link, useParams  } from 'react-router-dom';

export default function Search() {

    const {type}= useParams()
    const elementosDeTest = 60

    let rating = 0
    let reviews = 0
    let price = 0
    let ratingdir = 'up'
    let reviewsdir = 'up'
    let pricedir = 'up'

    

    const routines = {
        author:(index)=>String.fromCodePoint(index).toString(), 
        authorTitle:'profesor', 
        rating:()=>{
            if(rating===0) ratingdir='up'
            if(rating===5) ratingdir='down'
            if(ratingdir==='up') return rating++
            if(ratingdir==='down') return rating--
        },
        reviews:()=>{
            if(reviews===0) reviewsdir='up'
            if(reviews===10) reviewsdir='down'
            if(reviewsdir==='up') return reviews++
            if(reviewsdir==='down') return reviews--
        },
        price:()=>{
            if(price===0) pricedir='up'
            if(price===15) pricedir='down'
            if(pricedir==='up') return price++
            if(pricedir==='down') return price--
        },
        image:test,
        avatar:user
    }
    let obj = []
    for(let i=0; i<elementosDeTest; i++){
        obj.push({
            author:routines.author(i),
            authorTitle:routines.authorTitle,
            rating:routines.rating(),
            reviews:routines.reviews(),
            price:routines.price(),
            image:test,
            avatar:user
        })
    }
    
    let [currentobj, setObj] = useState(obj)
    
    useEffect(()=>{

    }, [currentobj])

    let [inicio, setInicio] = useState(0)
    
    let current=currentobj.slice(inicio, inicio+8)

    let [alphaSort, setAlphaSort] = useState(false)


    return (
		<div className='searchContainer'>
            <Navbar user={1}/>
            <SearchBar type={type}/>

            <button onClick={()=>{
                if(alphaSort){
                    setObj(currentobj.sort((a, b) => {
                        if(a.author.toLowerCase()<b.author.toLowerCase()) return -1
                        if(a.author.toLowerCase()>b.author.toLowerCase()) return 1
                        return 0
                    }))
                    setAlphaSort(false)
                }
                else{
                    setObj(currentobj.sort((a, b) => {
                            if(a.author.toLowerCase()<b.author.toLowerCase()) return 1
                            if(a.author.toLowerCase()>b.author.toLowerCase()) return -1
                            return 0
                        })
                    )
                    setAlphaSort(true)
                }
                console.log(currentobj)
            }}>
                A - Z
            </button>
            <button onClick={()=>{
                if(alphaSort){
                    setObj(currentobj.sort((a, b) => {
                        if(a.rating<b.rating) return -1
                        if(a.rating>b.rating) return 1
                        return 0
                    }))
                    setAlphaSort(false)
                }
                else{
                    setObj(currentobj.sort((a, b) => {
                            if(a.rating<b.rating) return 1
                            if(a.rating>b.rating) return -1
                            return 0
                        })
                    )
                    setAlphaSort(true)
                }
                console.log(currentobj)
            }}>
                Score
            </button>
            <button onClick={()=>{
                if(alphaSort){
                    setObj(currentobj.sort((a, b) => {
                        if(a.price<b.price) return -1
                        if(a.price>b.price) return 1
                        return 0
                    }))
                    setAlphaSort(false)
                }
                else{
                    setObj(currentobj.sort((a, b) => {
                            if(a.price<b.price) return 1
                            if(a.price>b.price) return -1
                            return 0
                        })
                    )
                    setAlphaSort(true)
                }
                console.log(currentobj)
            }}>
                Price
            </button>
            <div id='paginationContainer'>
                {current.map(element=>
                <Link to='/routineDetail' style={{textDecoration:'none', color:'unset', margin:'10px'}}>
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
            <button onClick={()=>{
                if(inicio===0) return 0
                else {
                    setInicio(inicio-8)
                    current=currentobj.slice(inicio, inicio+8)
                }
            }}>previous</button>
			<button onClick={()=>{
                if(inicio+8<elementosDeTest) {
                setInicio(inicio+8)
                current=currentobj.slice(inicio, inicio+8)}
            }}>next</button>
		</div>
	);
}