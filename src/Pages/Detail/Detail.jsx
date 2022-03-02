import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getRoutinesDetails } from "../../Redux/apiCalls/rutinesCall/getRoutinesDetails";
import { getAllTrainers } from "../../Redux/apiCalls/allUsersTrainer/allUsersTrainer";
import { useEffect } from "react";
import styles from "./Detail.module.css"; //revisar esto

export default function Details(props) {
  const dispatch = useDispatch();
  const myRoutine = useSelector((state) => state.routinesDetails);
  let { id } = useParams();
  let idOwner = myRoutine.owner;

  useEffect(() => {
    getUserById(dispatch, idOwner, token);
  }, [dispatch]);

  useEffect(() => {
    getRoutinesDetails(dispatch, id);
  }, [dispatch]);
  return (
    <div>
      <h3>Detalle</h3>
      <img src=""></img>
      <div>
        {myRoutine.length > 0 ? (
          <div>
            <div>
              <h4>{myRoutine.title}</h4>
              <h1>CLASES DE {myRoutine.title.toUpperCase()}</h1>
            </div>
            <div>
              <img src={Owner.profile_img} atl=""></img>
              <h5>{myRoutine.Owner.username}</h5>
              <h5>Personal Trainer</h5>
              <h5>{myRoutine.Reviews.points}</h5>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Link to="/home">
        <button>Go back</button>
      </Link>
    </div>
  );
}
