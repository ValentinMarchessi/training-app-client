import React from 'react'
import './RoutineDetail.scss'
import test from '../../assets/images/imageBg.png'
import user from '../../assets/images/imageUser.jpg'
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.svg';
import star from '../../assets/images/star.svg';
import { Link } from 'react-router-dom';

export default function RoutineDetail() {

    let id=123

    return (
		<div className='routineDetailContainer'>
            <Navbar user={1}/>
            <div>

                <p>Yoga</p>
                <h1>CLASES DE YOGA</h1>

                <div id='userInfo'>

                    <img alt='user' src={user} />
                    <div>
                        <p>roberto123</p>
                        <p>Instructor de yoga</p>
                    </div>
                    <div className='footer'>
                        <div id='merit'>
                            <p id='rating'><img src={star} alt="star"/>4/5</p>
                            <p className='subtle'>(70 reseñas)</p>
                        </div>
                    </div>
			    </div>
            </div>

            <div id='mainInfo'>
                <img src={test} id='mainDisplay' alt='main'/>
                <div id='costInfo'>

                    <div className='footer'>
                    <h1 style={{margin:0}}>TITULO</h1>
                        <div id='merit'>
                            <p id='rating'><img src={star} alt="star"/>4/5</p>
                            <p className='subtle'>(70 reseñas)</p>
                        </div>
                    </div>
                    <p style={{fontWeight:'lighter', margin:0}}>Descripción breve</p>
                    
                    <h3 style={{margin:0}}>Profesor</h3>
                    <div id='userInfo'>

                        <img alt='user' src={user} />
                        <div style={{rowGap:'15px', display:'flex', flexDirection:'column'}}>
                            <p>roberto123</p>
                            <div className='footer'>
                                <p>Instructor de yoga</p>
                                <div id='merit'>
                                    <p id='rating'><img src={star} alt="star"/>4/5</p>
                                    <p className='subtle'>(70 reseñas)</p>
                                </div>
                                <button id='profile'>Ver perfil</button>
                            </div>
                        </div>
                        
			        </div>
                    <div style={{width:'100%'}}><Link to={`/payment`}><button id='profile'>Comprar $5</button></Link></div>
                    
                </div>
            </div>
		</div>
	);
}