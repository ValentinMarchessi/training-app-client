import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import './Payment.scss';
import test from '../../assets/images/imageBg.png'
import user from '../../assets/images/imageUser.jpg'
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.svg';
import star from '../../assets/images/star.svg';
import { Link } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";
import { baseUrlDev } from '../../config/requestMethod/publicRequest'
import Logo from '../../assets/images/dep.jpg'
const KEY = "pk_test_51KTHNqKxK712fkWkpddjvo4wS93yK5sVKG0cUZ5bLcIsxXc5J8UUfToFNZYXf09altAHfam57Sgxi8dfKQIil2r600FLkfDU2C"


export default function Home() {
    // const { routineID } = useParams()

    const [stripeToken, setStripeToken] = useState(null)


    const onToken = (token) => {
        setStripeToken(token)
        // console.log(token);
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await baseUrlDev.post("checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500
                })
                console.log(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    console.log(stripeToken)

    return (
        <div>
            <div>

                <p>Yoga</p>
                <h1>CLASES DE YOGA</h1>

                <div id='userInfo'>

                    <img alt='user' src={user} />
                    <div>
                        <p>roberto123</p>
                        <p>Instructor de yoga</p>
                    </div>
                    <div className='footer'>
                        <div id='merit'>
                            <p id='rating'><img src={star} alt="star" />4/5</p>
                            <p className='subtle'>(70 reseñas)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='mainInfo'>
                <img src={test} id='mainDisplay' alt='main' />
                <div id='costInfo'>

                    <div className='footer'>
                        <h1 style={{ margin: 0 }}>Price resume</h1>

                    </div>
                    <p style={{ fontWeight: 'lighter', margin: 0 }}>Subtotal $5</p>
                    <p style={{ fontWeight: 'lighter', margin: 0 }}>Service fee $0.40</p>

                    <h3 style={{ margin: 0 }}>Total $5.40</h3>

                    {/* BOTON PARA REALIZAR EL COBRO CON STRIPE */}
                    <div style={{ width: '100%' }}>
                        <StripeCheckout
                            name='TRAINING APP'
                            image={Logo}
                            billingAddress
                            shippingAddress
                            descriptions={`Your total is$500`}
                            amount={500 * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button id='profile'>
                                Continue to checkout
                            </button>
                        </StripeCheckout>
                    </div>

                </div>
            </div>
        </div>
    );
};