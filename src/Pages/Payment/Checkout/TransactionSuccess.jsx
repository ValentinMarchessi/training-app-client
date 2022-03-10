import { style } from '@mui/system';
import styles from './TransactionSuccess.module.scss';
import Success from '../../../assets/images/checked.png'
import { useNavigate } from 'react-router-dom';

export default function TransactionSuccess() {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/home')
    }, 2000)

    return (
        <div className={styles.contentSuccess} >
            <h1>Your purchase has been processed</h1>
            <img className={styles.imgSuccess} src={Success} alt='success' />
        </div>
    )
}