import React from 'react';
import { MediumCard } from '../../../components/index.js'
// import { useSelector } from 'react-redux';
import style from './ClientContainer.module.scss';


export default function ClientContainer({content}) {

  return (
    <div className={style.container}>
      {content && content.map(entry => (
        <MediumCard 
          img={entry.user.profile_img}
          title={entry.product.name}
          body={entry.user.name}
        />))
      }
    </div>
  );
}