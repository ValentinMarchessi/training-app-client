import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRoutinesDetails } from "../../Redux/apiCalls/rutinesCall/getRoutinesDetails";
import { getAllTrainers } from "../../Redux/apiCalls/allUsersTrainer/allUsersTrainer";
import { useEffect } from "react";
import styles from "./Detail.module.scss"; //revisar esto
import { Avatar, Navbar } from "../../components";
// import styles from "../Payment/Payment.module.scss";
import { star } from "../../assets/images/icons";
//mock de la bd
import { myRoutine, Owner, Reviews, exercises } from "./dbDetails";

export default function Details(props) {
  // const dispatch = useDispatch();
  // const myRoutine = useSelector((state) => state.routinesDetails);
  // let { id } = useParams();
  // let idOwner = myRoutine.owner;

  // useEffect(() => {
  //   getUserById(dispatch, idOwner, token);
  // }, [dispatch]);

  // useEffect(() => {
  //   getRoutinesDetails(dispatch, id);
  // }, [dispatch]);

  const points = Reviews.map((e) => e.points);
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const rating = average(points);

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.align}>
          <div className={styles.intro}>
            <div className={styles.header}>
              <h1>{myRoutine.title.toUpperCase()}</h1>
            </div>

            <div className={styles.presentation}>
              <Avatar src={Owner.profile_img} />

              <div className={styles.info}>
                <p id={styles.name}>{Owner.username}</p>

                <p id={styles.title}>
                  {" "}
                  {Owner.is_personal_trainer
                    ? Owner.is_nutritionist
                      ? "Personal trainer / Nutricionist"
                      : "Personal trainer"
                    : "Nutricionist"}
                </p>
              </div>
              <div id={styles.merit}>
                <img src={star} alt="star" />
                <p id={styles.rating}>{rating}/5 </p>
                <p id={styles.reviews}>({points.length} reseñas)</p>
              </div>
            </div>
          </div>

          <img
            id={styles.routineImage}
            src={myRoutine.image}
            alt="routineImage"
          />
        </div>

        <div className={styles.checkout}>
          <h1>{myRoutine.title}</h1>
          <div id={styles.merit}>
            <img src={star} alt="star" />
            <p id={styles.rating}>{rating}/5 </p>
            <p id={styles.reviews}>({points.length} reseñas)</p>
          </div>
          <br />
          <p id={styles.description}>{myRoutine.description}</p>
          <br />

          <p id={styles.title2}>
            {" "}
            {Owner.is_personal_trainer
              ? Owner.is_nutritionist
                ? "Personal trainer / Nutricionist"
                : "Personal trainer"
              : "Nutricionist"}
          </p>
          <div className={styles.alignCheck}>
            <Avatar src={Owner.profile_img} />
            <div className={styles.info}>
              <p id={styles.name}>{Owner.username}</p>
              <p id={styles.title}>
                {" "}
                {Owner.is_personal_trainer
                  ? Owner.is_nutritionist
                    ? "Personal trainer / Nutricionist"
                    : "Personal trainer"
                  : "Nutricionist"}
              </p>
              <Link to="/profile">
                <button id={styles.profileButton}>Ver perfil</button>
              </Link>
            </div>
          </div>

          <div id={styles.checkoutButton}>
            <Link to="/payment">
              <button>Comprar rutina ${myRoutine.price}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
