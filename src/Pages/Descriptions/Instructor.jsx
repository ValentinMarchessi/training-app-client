import React, { useEffect,useState  } from 'react'
import { Link, useParams  } from 'react-router-dom';
import style from './Instructor.module.scss';
import { home } from '../../assets/images/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRoutines } from '../../Redux/apiCalls/rutinesCall/getUserRoutines';
import { getDietsById } from '../../Redux/apiCalls/dietsCall/getDietsById';
import { getTransactions } from '../../Redux/apiCalls/transaction/getTransactions';

export default function Instructor() {

	const user=useSelector(state=>state.user.currentUser);
	const instructorId=useParams().instructorId;
	const routines=useSelector(state=>state.routines.routinesByUser);
	const transactions=useSelector(state=>state.transactions.transactions);
	const diets=useSelector(state=>state.diets.dietsById);
	const [products,setProducts]=useState([]);
	const dispatch=useDispatch();
	useEffect(()=>{
		getUserRoutines(dispatch,instructorId,user.accessToken);
		getDietsById(dispatch,instructorId,user.accessToken);
		getTransactions(dispatch,instructorId,user.userId);
		setProducts([...routines,...diets]);
	},[])
	const handleChange= (e)=>{
		let value=e.target.value
		value==="Routines"?
		setProducts(routines)
		:value==="Diets"?setProducts(diets)
		:setProducts([...routines,...diets]);
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
				    <span>{transactions?.length}</span>
				</div>
				<div>
					<p>Valoraciones</p>
					<div className={style.points}>
						<h3>
						    {products?.reduce((acc,product)=>acc+=product.Reviews?.length,0)}
						</h3>
					</div>
					
				</div>
			</div>
			<h2>About</h2>
			<p className={style.description}>{user?.description||"No have a description..."}</p>
			<h2>My products ({products?.length})</h2>
			<form>
                <div className={style.contentSelect}>
                    <select onChange={handleChange}> 
						<option value="default">All Products</option>
						<option value="Routines">Routines</option>
						<option value="Diets">Diets</option>
                    </select>
                    <i></i>
                </div>
            </form>
			<div className={style.courses}>
				{products?.map((product,i)=>
					<div className={style.product} key={i}>
						<Link to={`/routines/info/${product.id}`}>
							<img className={style.productImg} src={product.image}/>
							<div className={style.containerInfo}>
								<h3>{product.title}</h3>
								<div className={style.containerPoints}>
									<div className={style.points}>
										<img src="/static/media/star.69f119269b8ac1b0e0ea69dbe6655d48.svg" alt="points"/>
										<h3>
										{
											product.Reviews?.reduce((acc,{points})=>acc+=points,0)/product.Reviews?.length||0
										}/10
										</h3>
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