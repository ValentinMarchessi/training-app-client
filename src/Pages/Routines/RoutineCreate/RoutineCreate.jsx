import React, { useState } from 'react';
import { Overlay } from '../../../components';
import { RoutineForm } from '../../index.js';
import style from './RoutineCreate.module.scss';


export default function RoutineCreate() {
  const [active, setActive] = useState(false);
  const overlayStyle = {
    backgroundColor: '#201f24c3',
    width: 'max-content',
    color: '#fff'
  };

  const handleOverlay = {
    open: () => setActive(true),
    close: () => setActive(false),
  };

  console.log(active);

  return (
    <>
      <Overlay active={active} onClose={handleOverlay.close} style={overlayStyle}>
        <RoutineForm onAdd={handleOverlay.close} />
      </Overlay>
      <button id={style.add} onClick={handleOverlay.open}>
        Create Routine
      </button>
    </>
  );
}
