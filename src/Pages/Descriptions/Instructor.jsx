import React from 'react'
import { Link } from 'react-router-dom';
import style from './Instructor.module.scss';
import { home } from '../../assets/images/icons';

export default function Instructor() {

	const routine1={price:20,id:1,title:"Abdominales",image:"https://media.vogue.es/photos/5fbff0d1f19b6599598e2b90/4:3/w_4167,h_3125,c_limit/tabla%20de%20ejercicios6_Mesa%20de%20trabajo%201%20copia%205.jpg"}
	const routine2={price:30,id:2,title:"Intensiva",image:"https://st2.depositphotos.com/1077687/6264/v/600/depositphotos_62644855-stock-illustration-fitness-design-vector-illustration.jpg"}
	const diet1={price:10,id:3,title:"Vegana",image:"https://i.blogs.es/6ce7cc/istock-630007208/1366_2000.jpeg"}
	const diet2={price:70,id:5,title:"Libre de Gluten",image:"https://diariolibre.blob.core.windows.net.optimalcdn.com/images/documents/10157/0/image_content_8061400_20170330101130.jpg"}
	const user={
		username:"Pedro Venitez",
		profile_img:"http://imgs.globovision.com/41T1b5hiCk6bhh4IC5ag2FFeeTk=/847x0/smart/9578fca5d59845cf84546777e80164b1",
		description:"Soy entrenador especializado en...sasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasad  dsadasdas  dasdsad dsadsadsadsadsadsadsadsadasdsadsadsad",
		Routines:[routine1,routine2],
		Diets:[diet1,diet2],
		Transactions:[{},{},{}],
		is_nutritionist:true,
		is_personal_trainer:true,
	}

    return (
		<div className={style.page}>
			<div className={style.header}>
				<Link to='/'>
					<img id={style.icon} src={home} alt="home" />
				</Link>
				<hr />
				<h1>Instructor description</h1>
			</div>
			<hr/>
			<img className={style.imageProfile} src={user.profile_img} alt="profileImg"/>
			<p>Instructor</p>
            <h2>{user.username}</h2>
			<p>{`${user.is_personal_trainer?"Trainer":""}${user.is_nutritionist?user.is_nutritionist&&user.is_personal_trainer?" and Nutritionist":"Nutritionist":""}`}</p>
			
			<div className={style.totalStudents}>
				<div>
					<p>Total students</p>
				    <span>{user.Transactions.length}</span>
				</div>
				<div>
					<p>Valoraciones</p>
					<div className={style.points}>
						<h3>2 <img src="/static/media/star.69f119269b8ac1b0e0ea69dbe6655d48.svg" alt="points"/></h3>
					</div>
					
				</div>
			</div>
			<h2>About</h2>
			<p className={style.description}>{user.description}</p>
			<h2>My courses ({[...user.Routines,...user.Diets].length})</h2>
			<div className={style.courses}>
				{[...user.Routines,...user.Diets].map((product,i)=>
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
			
		</div>
	);
}