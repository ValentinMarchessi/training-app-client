import React from 'react';
import { MediumCard } from '../../../components/index.js';
import style from './ClientContainer.module.scss';


export default function ClientContainer({ content }) {
  // entry = [
  //   {
  //     id: 123,
  //     username: '',
  //     image: ''
  //   },
  // ]

  if (!content?.length) {
    return (<div className={style.nocontent}> You don't have any clients yet </div>);
  }

  return (
    <div className={style.container}>
      {content && content.map((entry, key) => (
        <MediumCard
          key={key} // entry.product.id
          img={entry.image}
          title={entry.username}
        // body={entry.client.name}
        />))
      }
    </div>
  );
};