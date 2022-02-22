import React from 'react';
//COMPONENTS
import ButtonHomeMenu from '../../../components/ButtonHomeMenu/ButtonHomeMenu';
import NewsCard from '../NewsCard/NewsCard';
//IMAGES
import fitness from '../../../assets/images/imageBg.png';
import excercise from '../../../assets/images/imageBg.png';
import diets from '../../../assets/images/diets.jpg';
import recipes from '../../../assets/images/recipes.jpg';
import shopping from '../../../assets/images/shopping.jpg';
import client from '../../../assets/images/client.png';
//STYLES
import s from './HomeProfesional.module.scss'



const HomeProfesional = ()=>{
      return <div className={s.container}>
            <div className={s.left}>
                  <div className={s.newsContainer}>
                        <NewsCard/>
                  </div>
            </div>

            <div className={s.right}>
                  <div className={s.buttonContainer}>
                        <ButtonHomeMenu title='Clients' background={client} /> 
                        <ButtonHomeMenu title='Routines' background={fitness}/> 
                        <ButtonHomeMenu title='Exercices' background={excercise}/> 
                        <ButtonHomeMenu title='Shop' background={shopping}/> 
                        
                        <ButtonHomeMenu title='Clients' background={client} /> 
                        <ButtonHomeMenu title='Diets' background={diets}/> 
                        <ButtonHomeMenu title='Recipes' background={recipes}/> 
                        <ButtonHomeMenu title='Shop' background={shopping}/> 
                        
                  </div>
            </div>
      </div>
}
export default HomeProfesional;