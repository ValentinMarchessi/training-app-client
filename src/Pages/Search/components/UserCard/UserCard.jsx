import React from "react";
import s from './UserCard.module.scss';

const UserCard = ( {id, email, profileImg, username,gender,country,nutritionist,PTrainer} )=>{
      return <div key={id} className={s.container}>
            <img src={profileImg} alt={username} className={s.profileImg}/>
            <div className={s.info}>
                  <h1 className={s.title}>Username : {username}</h1>
                  <h1 className={s.title}>Email : {email}</h1>
                  <h1 className={s.title}>Gender : {gender}</h1>
                  <h1 className={s.title}>Country : {country}</h1>
                  <h1 className={s.title}>Personal Trainer : {nutritionist ? 'Si' : 'No'}</h1>
                  <h1 className={s.title}>Nutritionist : {PTrainer ? 'Si' : 'No'}</h1>
                  
            </div>
      </div>
}
export default UserCard;