import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import HomeProfessional from "./HomeProfessional/HomeProfessional";
import HomeClient from "./HomeClient/HomeClient";

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        {user && (user.PTrainer || user.Nutritionist) ? (
          <HomeProfessional />
        ) : (
          <HomeClient />
        )}
      </div>
    </>
  );
};

export default Home;
