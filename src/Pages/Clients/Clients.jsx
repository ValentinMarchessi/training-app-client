import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from '../../components';
import { getAllClients } from '../../Redux/apiCalls/clientsCall/getAllClients.js';
import ClientContainer from './ClientContainer/ClientContainer';


export default function Clients() {

  const [entries, setEntries] = useState();

  const { userId } = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const clients = useSelector(state => state.clients.entries);

  useEffect(() => {
    getAllClients(dispatch, userId);
    setEntries(clients);
  }, [clients]);

  return (
    <div>
      <Navbar />
      <ClientContainer content={entries} />
    </div>
  );
}

// const test = [
//   {
//     product: {
//       id: '1',
//       name: 'test_product'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'first client'
//     }
//   },
//   {
//     product: {
//       id: '2',
//       name: 'test_product2'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'second client'
//     }
//   },
//   {
//     product: {
//       id: '3',
//       name: 'test_product3'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'third client'
//     }
//   },
//   {
//     product: {
//       id: '4',
//       name: 'test_product4'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'fourth client'
//     }
//   },
//   {
//     product: {
//       id: '5',
//       name: 'test_product5'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'fifth client'
//     }
//   },
//   {
//     product: {
//       id: '6',
//       name: 'test_product6'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'sixth client'
//     }
//   },
//   {
//     product: {
//       id: '7',
//       name: 'test_product7'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'seventh client'
//     }
//   },
//   {
//     product: {
//       id: '8',
//       name: 'test_product8'
//     },
//     client: {
//       profile_img: 'https://i.imgur.com/UOk3zAg.png',
//       name: 'eigth client'
//     }
//   }
// ];
