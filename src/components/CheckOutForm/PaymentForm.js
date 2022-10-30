import React, { useState } from 'react';
import Review from './Review';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, CircularProgress, Divider, Typography } from '@mui/material';
import { useStateValue } from '../../StateProvider';
import Axios from 'axios'
import { actionTypes, getBasketTotal } from '../../reducer';

import '../../styles/CheckOutFormStyles/PaymentForm.scss';

const stripePromise = loadStripe('pk_test_51LxXCEALKVcf1dfDuMoLEJwxcx8K2F6YN2plrzHzzgGypNMWga0G3PK3BjEshgZFoxEfODgAxRimzUGxVynjkfob00Kz79xqU1')

const CheckOutForm = ({backStep, nextStep}) => {

    // eslint-disable-next-line no-unused-vars
    const [{basket, paymentMessage}, dispatch] = useStateValue();
    const [ loading, setLoading ] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
        setLoading(true);
        if (!error) {
            const {id} = paymentMethod;
            try{
                const { data } = await Axios.post('http://localhost:3001/api/checkout', {
                    id,
                    amount: getBasketTotal(basket) * 100
                });
                dispatch({
                    type: actionTypes.SET_PAYMENT_MESSAGE,
                    paymentMessage: data.message
                });
                if(data.message === 'Succesful payment'){
                    dispatch({
                        type: actionTypes.EMPTY_BASKET,
                        basket: []
                    })
                    elements.getElement(CardElement).clear();
                    nextStep();
                }
                else{
                    console.log(data.message)
                    nextStep();
                }
            }catch(error){
                console.log(error);
                nextStep();
            }
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <div className='backPay'>
                <Button variant='outlined' onClick={backStep}>
                    Back
                </Button>
                <Button disabled={!stripe} variant='contained'type='submit'>
                    {
                        loading ? (<CircularProgress/>)
                        :
                        "Pay"
                    }
                </Button>
            </div>
        </form>
    )
}

const PaymentForm = ({backStep, nextStep}) => {
    return (
        <div>
            <Review/>
            <Divider/>
            <Typography variant='h6'>
                Payment methods
            </Typography>
            <div className='formDivCheckout'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm backStep={backStep} nextStep={nextStep}/>
                </Elements>
            </div>
        </div>
    )
}

export default PaymentForm