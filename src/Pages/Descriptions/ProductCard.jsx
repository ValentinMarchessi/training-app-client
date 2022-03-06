import React from 'react'
import { Link } from 'react-router-dom';
import style from './Instructor.module.scss';
import { home } from '../../assets/images/icons';

export default function ProductCard({product}) {
    return (
        <div>
            {product.map((product,i)=>
				<div className={style.product} key={i}>
					<Link to={`/routines/info/${product.id}`}>
					<img className={style.productImg} src={product.image}/>
					<div className={style.containerInfo}>
						<h3>{product.title}</h3>
						<div className={style.containerPoints}>
							<div className={style.points}>
								<img src="/static/media/star.69f119269b8ac1b0e0ea69dbe6655d48.svg" alt="points"/>
								<h3>1/5</h3>
							</div>
							<div>
								<h4>{product.price} $</h4>
							</div>
						</div>
					</div>
				    </Link>
			    </div>
				)}
        </div>
	);
}