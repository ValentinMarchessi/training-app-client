import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import style from './Instructor.module.scss';
import { home } from '../../assets/images/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRoutines } from '../../Redux/apiCalls/rutinesCall/getUserRoutines';
import { getDietsById } from '../../Redux/apiCalls/dietsCall/getDietsById';
import { getTransactions } from '../../Redux/apiCalls/transaction/getTransactions';
import { getUserById } from '../../Redux/apiCalls/allUsersTrainer/userById';

export default function Instructor() {
    const defaultImgProduct = "https://www.enestadocrudo.com/wp-content/uploads/ejercicios-casa.jpg"
    const defaultImgUser = "http://imgs.globovision.com/41T1b5hiCk6bhh4IC5ag2FFeeTk=/847x0/smart/9578fca5d59845cf84546777e80164b1"
    const user = useSelector(state => state.user.currentUser);
    const instructor = useSelector(state => state.newUser.userById)

    const instructorId = useParams().instructorId;
    const routines = useSelector(state => state.routines.routinesByUser);
    const transactions = useSelector(state => state.transactions.transactions);

    const diets = useSelector(state => state.diets.dietsById.result);

    const [products, setProducts] = useState([]);
    const [numberPag, setNumberPag] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        getUserRoutines(dispatch, instructorId, user.accessToken);
        getUserById(dispatch, instructorId)
        getDietsById(dispatch, instructorId, user.accessToken);
        getTransactions(dispatch, instructorId, user.userId);
        setProducts([...routines, ...diets]);
    }, [])
    const next = () => {
        setNumberPag(numberPag + 6);
    }
    const previous = () => {
        setNumberPag(numberPag - 6);
    }
    const handleChange = (e) => {
        let value = e.target.value
        value === "Routines" ?
            setProducts(routines)
            : value === "Diets" ? setProducts(diets)
                : setProducts([...routines, ...diets]);
    }
    const comments = () => {
        let productsWithComments = products?.filter(product => product.Reviews?.some(review => review.comments));
        let comments = [];
        let productsFounds = {};
        let randomProduct = (product) => {
            let random = Math.round(Math.random() * (product.length - 1))
            if (productsFounds[random])
                return randomProduct(product);
            productsFounds[random] = true
            return random;
        }
        let randomComment = (product) => {
            let random = Math.round(Math.random() * (product.length - 1))
            return random;
        }
        let limitOfComments = productsWithComments.length < 5 ? productsWithComments.length : 5;
        for (let i = 0; i < limitOfComments; i++) {
            let productReviews = productsWithComments[randomProduct(productsWithComments)].Reviews;
            let review = productReviews[randomComment(productReviews)]
            comments.push(<div className={style.comment} key={i}><p>{review.comments}</p> <div><img src="/static/media/star.69f119269b8ac1b0e0ea69dbe6655d48.svg" alt="points" />{review.points}/10</div></div>);
        }
        return comments.length ? comments : [<div key={0} className={style.commentNone}><p>Be the first to comment on a product of {user.username}...</p></div>]
    }

    console.log(products)

    return (
        <div className={style.page}>
            <div className={style.header}>
                <Link to='/'>
                    <img id={style.icon} src={home} alt="home" />
                </Link>
                <hr />
                <h1>Instructor description</h1>
            </div>
            <hr />
            <img className={style.imageProfile} src={instructor.profile_img || defaultImgUser} alt="profileImg" />
            <p>Instructor</p>
            <h2>{instructor.username}</h2>
            <p>{`${instructor.is_personal_trainer ? "Trainer" : ""}${instructor.is_nutritionist ? instructor.is_nutritionist && instructor.is_personal_trainer ? " and Nutritionist" : "Nutritionist" : ""}`}</p>

            <div className={style.totalStudents}>
                <div>
                    <p>Total students</p>
                    <span>{transactions?.length || 0}</span>
                </div>
                <div>
                    <p>Valoraciones</p>
                    <div className={style.points}>
                        <h3>
                            {products?.reduce((acc, product) => acc += product.Reviews?.length, 0)}
                        </h3>
                    </div>

                </div>
            </div>
            <h2>About</h2>
            <p className={style.description}>{instructor?.description || "No have a description..."}</p>
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
            <div className={style.productComments}>
                <div className={style.courses}>
                    {products.slice(numberPag, numberPag + 6)?.map((product, i) =>
                        <div className={style.product} key={i}>
                            <Link to={`/details/${product.id}`}>
                                <img className={style.productImg} src={product.image || defaultImgProduct} />
                                <div className={style.containerInfo}>
                                    <h3>{product.title}</h3>
                                    <div className={style.containerPoints}>
                                        <div className={style.points}>
                                            <img src="/static/media/star.69f119269b8ac1b0e0ea69dbe6655d48.svg" alt="points" />
                                            <h3>
                                                {
                                                    product.Reviews?.reduce((acc, { points }) => acc += points, 0) / product.Reviews?.length || 0
                                                }/5
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
                    <div className={style.pagination}>
                        {numberPag > 0 && <button onClick={previous}>Previous</button>}
                        {products.length > 6 && numberPag * 6 < products.length && <button onClick={next}>Next</button>}
                    </div>
                </div>
                <div className={style.comments}>
                    <h3>Comments</h3>
                    {
                        comments()
                    }
                </div>
            </div>
        </div>
    );
}