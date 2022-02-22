import s from './ButtonHomeMenu.module.scss';

//Se debe enviar el titulo que tendrá el boton y el background que tendrá el mismo
const ButtonHomeMenu = ({ title, background, onClick, lock })=>{
      return <div className={s.container} onClick={ onClick }>
                  <div className={ lock ? s.lock : s.titleContainer}>
                        <h2> {title} </h2>
                  </div>
                  <img src={background ? background : ''} className={s.background}/>
            </div>
}

export default ButtonHomeMenu;