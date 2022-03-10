import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRoutinesDetails } from "../../Redux/apiCalls/rutinesCall/getRoutinesDetails";
import { getDietDetails } from "../../Redux/apiCalls/dietsCall/getDietDetails";
import { getAllProfessionals } from "../../Redux/apiCalls/allUsersCall/getAllProfessionals";
import { useEffect, useState } from "react";
import styles from "./Detail.module.scss";
import { Avatar, Navbar } from "../../components";
import { star } from "../../assets/images/icons";
//mock de la bd
import { Reviews } from "./dbDetails";

export default function Details(props) {
  const dispatch = useDispatch();
  const myRoutine = useSelector((state) => state.routines.routinesDetails);

  const myDiet = useSelector((state) => state.diets.dietDetails);

  const allProfessionals = useSelector(
    (state) => state.professionals.usersProfessionals
  );

  let { id } = useParams();
  let myProduct = {};

  const [owner, setOwner] = useState();

  useEffect(() => {
    (async () => {
      await getAllProfessionals(dispatch);
      await getRoutinesDetails(dispatch, id);
      await getDietDetails(dispatch, id);
    })();
  }, []);

  if (myDiet.id === id) {
    useEffect(() => {
      setOwner(allProfessionals.filter((e) => e.id === myDiet.owner));
      console.log("owner", owner);
    }, []);
    myProduct = myDiet;
  } else if (myRoutine.id === id) {
    useEffect(() => {
      setOwner(allProfessionals.filter((e) => e.id === myRoutine.owner));
      console.log("owner", owner);
    }, []);
    myProduct = myRoutine;
  }

  const points = Reviews.map((e) => e.points);
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const rating = average(points);

  return myProduct && owner ? (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.align}>
          <div className={styles.intro}>
            <div className={styles.header}>
              <h1>{myProduct.title.toUpperCase()}</h1>
            </div>

            <div className={styles.presentation}>
              <Avatar src={owner[0].profile_img} />

              <div className={styles.info}>
                <p id={styles.name}>{owner[0].username}</p>

                <p id={styles.title}>
                  {" "}
                  {owner[0].is_personal_trainer
                    ? owner[0].is_nutritionist
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
            src={myProduct.image}
            alt="routineImage"
          />
        </div>

        <div className={styles.checkout}>
          <h1>{myProduct.title}</h1>
          <div id={styles.merit}>
            <img src={star} alt="star" />
            <p id={styles.rating}>{rating}/5 </p>
            <p id={styles.reviews}>({points.length} reseñas)</p>
          </div>
          <br />
          <p id={styles.description}>{myProduct.description}</p>
          <br />

          <p id={styles.title2}>
            {" "}
            {owner[0].is_personal_trainer
              ? owner[0].is_nutritionist
                ? "Personal trainer / Nutricionist"
                : "Personal trainer"
              : "Nutricionist"}
          </p>
          <div className={styles.alignCheck}>
            <Avatar src={owner[0].profile_img} />
            <div className={styles.info}>
              <p id={styles.name}>{owner[0].username}</p>
              <p id={styles.title}>
                {" "}
                {owner[0].is_personal_trainer
                  ? owner[0].is_nutritionist
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
              <button>Comprar producto ${myProduct.price}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}
