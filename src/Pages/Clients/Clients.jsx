import React from 'react';
import { Navbar } from '../../components';
import ClientContainer from './ClientContainer/ClientContainer';

const test = [
  {
    product: {
      name: 'test_product'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'first client'
    }
  },
  {
    product: {
      name: 'test_product2'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'second client'
    }
  },
  {
    product: {
      name: 'test_product3'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'third client'
    }
  },
  {
    product: {
      name: 'test_product4'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'fourth client'
    }
  },
  {
    product: {
      name: 'test_product5'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'fifth client'
    }
  },
  {
    product: {
      name: 'test_product6'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'sixth client'
    }
  },
  {
    product: {
      name: 'test_product7'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'seventh client'
    }
  },
  {
    product: {
      name: 'test_product8'
    },
    user: {
      profile_img: 'https://i.imgur.com/UOk3zAg.png',
      name: 'eigth client'
    }
  }
];

export default function Clients() {
  return (
    <div>
      <Navbar />
      <ClientContainer content={test} />
    </div>
  );
}