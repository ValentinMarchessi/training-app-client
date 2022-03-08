import React from 'react';
import style from './infoCard.module.scss';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAllTrainers } from '../../Redux/apiCalls/allUsersTrainer/allUsersTrainer';
import { getAllNutritionits } from '../../Redux/apiCalls/allUsersNutritionist/allUsersNutritionist';
import { getAllRoutines } from '../../Redux/apiCalls/rutinesCall/getAllRoutines';
import { useDispatch } from 'react-redux';

const Container = Styled.div.attrs((props) => ({ className: `${style.container} ${props.disabled && style.disabled}` }))`
    opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

//GET ALL ROUTINES COMPLETE
    // useEffect(() => {
    //     const handleAllRutines = () => {
    //         try {
    //             getAllRoutines(dispatch)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     handleAllRutines()
    // }, [dispatch])

    //GET ALL TRAINERS COMPLETE
    // useEffect(() => {
    //     const handleAllTrainers = () => {
    //         try {
    //             getAllTrainers(dispatch)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     handleAllTrainers()
    // }, [dispatch])


    //GET ALL NUTRITIONIST COMPLETE
    // useEffect(() => {
    //     const handleAllNutritionits = () => {
    //         try {
    //             getAllNutritionits(dispatch)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     handleAllNutritionits()
    // }, [dispatch])

    

const InfoCard = ({ img, title, disabled = false, route }) => {

    const dispatch = useDispatch()

    function handleSearchType(){
        try{
            if(route==='routines'){
                getAllRoutines(dispatch)
            }
            if(route==='trainers'){
                getAllTrainers(dispatch)
            }
            if(route==='nutritionists'){
                getAllNutritionits(dispatch)
            }
        } catch(err){
            console.log(err)
        }
    }

	return (
        <Container disabled={disabled}>
            <Link to={route}>
                <div className={style.cardRutes} style={{ zIndex: '1' }} onClick={handleSearchType}>
                    <img className={style.imgCardRutes} src={img} alt={title} />
                    <div className={style.contetTitleInfo}>{title}</div>
                </div>
            </Link>
		</Container>
	);
};

export default InfoCard;
