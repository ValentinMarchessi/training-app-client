import style from './Diets.module.scss';

import { Navbar } from '../../components';
import { Outlet } from 'react-router-dom';

export default function Diets() {
    return (
        <>
        <Navbar />
        <div className={style.page}>
            <Outlet/>
        </div>
        </>
    );
}