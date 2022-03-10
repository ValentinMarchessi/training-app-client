import React from "react";
import { Avatar } from "../../../../components";
import s from './UserCard.module.scss';

const UserCard = ( {profileImg, username} )=>{
      return <div className={s.container}>
            <Avatar src={profileImg} /> 
            <h1>{username}</h1>
      </div>
}
export default UserCard;