import style from './Routines.module.scss';
import clipboard from '../../assets/images/clipboard.svg';
import RoutineBox from '../../components/RoutineBox/RoutineBox';

const mockRoutine = {
	name: 'Calistenia',
    users: [
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
        { name: 'Jorge', avatar: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/04/04/1892884.jpg' },
    ],
    circuits: [
        {id: 1, name: 'Abdominales Básicos', length: 5, duration: 10},
        {id: 2, name: 'Espalda y Biceps', length: 4, duration: 20},
        {id: 3, name: 'Pectorales y Tríceps', length: 4, duration: 20},
    ],
	diet: [],
};

export default function Routines() {
    return (
		<div className={style.page}>
            <div className={style.header}>
                <img id={style.icon} src={clipboard} alt='clipboard' />
                <h1>Mis Rutinas</h1>
                <hr/>
            </div>
            <div className={style.body}>
                <div className={style.routines}>

                    <div className={style.container}>
                        <RoutineBox {...mockRoutine}/>
                    </div>
                </div>
            </div>
		</div>
	);
}