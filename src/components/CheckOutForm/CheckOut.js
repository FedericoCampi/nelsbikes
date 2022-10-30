import { Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider';
import AddressForm from './AddressForm';
import Confirmation from './Confirmation';
import PaymentForm from './PaymentForm';

import '../../styles/CheckOutFormStyles/CheckOut.scss';

const CheckOut = () => {

    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Shipping address", "Payment details"];

    // eslint-disable-next-line no-unused-vars
    const [{paymentMessage}, dispatch] = useStateValue();

    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/> : <PaymentForm backStep={backStep} nextStep={nextStep}/>   

    return (
        <div className='checkOutContainer'>
            <div className='checkOutMain'>
                <Paper className='paper'>
                    <Typography component='h1' align='center'>
                        <h3>CheckOut</h3>
                    </Typography>
                    <Stepper activeStep={activeStep} className='stepper'>
                        {steps.map(step => (
                            <Step Key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {
                        activeStep === steps.length ? (<Confirmation message={paymentMessage}/>) : (<Form/>)
                    }
                </Paper>
            </div>
        </div>
    )
}

export default CheckOut