import React from 'react'
import RoutineCard from '../../components/RoutineCard/RoutineCard';
import './Search.scss'
import test from '../../assets/images/imageBg.png'
import user from '../../assets/images/imageUser.jpg'
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Search() {


    const elementosDeTest = 8


    return (
		<div className='searchContainer'>
            <Navbar user={1}/>
            <SearchBar/>
			{[...Array(elementosDeTest)].map(element=>
            <Link to='/routineDetail' style={{textDecoration:'none', color:'unset', margin:'10px'}}>
                <RoutineCard
                    //name='Roberto' 
                    author='Roberto123' 
                    authorTitle='Instructor de yoga' 
                    rating='4'
                    reviews='70'
                    price='10'
                    image={test}
                    avatar={user} 
                />
            </Link>
            )}
		</div>
	);
}