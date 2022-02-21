import React, { useEffect } from 'react';
import './home.scss';
import { listNews, listNewUser, listNewUserActive } from '../../data';
import Navbar from '../../components/Navbar/Navbar';
import NewsCard from '../../components/NewsCard/NewsCard';
import InfoCard from '../../components/InfoCard/InfoCard';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';
import { useDispatch, useSelector } from 'react-redux'
// import { getAllTrainers } from '../../Redux/apiCalls/allUsersTrainer/allUsersTrainer';
// import { getAllNutritionits } from '../../Redux/apiCalls/allUsersNutritionist/allUsersNutritionist';
// import { getAllRoutines } from '../../Redux/apiCalls/rutinesCall/getAllRoutines';

const Home = () => {
    const user = useSelector(state => state.user.currentUser)
    // const dispatch = useDispatch()

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


    return (
        <div className="contentHomeTrainer">
            <Navbar user={user} />
            <div className="downContainer">
                <div className="leftContain">
                    <div className="contentTitle">
                        <span className="titleNews">PANEL</span>
                    </div>
                    <CardContainer cards={listNews} CardElement={NewsCard} />
                </div>
                <div className="rightContain">
                    <div className="contentTitle">
                        <div className="titleInfo">INFO</div>
                    </div>
                    <div className="infoCards">
                        <CardContainer cards={user ? listNewUserActive : listNewUser} CardElement={InfoCard} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
