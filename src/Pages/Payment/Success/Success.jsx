import React from 'react'
import { useLocation } from 'react-router-dom'
import cheked from '../../../assets/images/checked.png'
import './success.scss'

const Success = () => {

    const location = useLocation()
    const transaction = location.state.data

    console.log(transaction)

    return (
        <div className='contentSuccess' >
            <div className="cardResultPayment">
                <h2>{transaction.outcome.seller_message}</h2>
                <div className="contentDataSuccess">
                    <h6>State: {transaction.status}</h6>
                    <h6>Tarjet: {transaction.payment_method_details.card.brand} ...{transaction.payment_method_details.card.last4}</h6>
                    <h6>Amount: {transaction.currency} {transaction.amount}</h6>
                    <img className='chekedItem' src={cheked} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Success