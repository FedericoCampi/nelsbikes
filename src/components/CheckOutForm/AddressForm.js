import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AddressInput from './AddressInput';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

import '../../styles/CheckOutFormStyles/AddressForm.scss';

const AddressForm = ({nextStep}) => {

    const methods = useForm();

    // eslint-disable-next-line no-unused-vars
    const [{shippingData}, dispatch] = useStateValue();

    return (
        <div className='containerForm'>
            <Typography>
                <h5>Shipping Address</h5>
            </Typography>
            <div className="formDiv">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(data => {
                        dispatch({
                            type: actionTypes.SET_SHIPPINGDATA,
                            shippingData: data,
                        })
                        nextStep();
                    })}>
                        <Grid container spacing={2}>
                            <AddressInput required name="firstName" label="First Name"/>
                            <AddressInput required name="lastName" label="Last Name"/>
                            <AddressInput required name="address1" label="Address"/>
                            <AddressInput required name="email" label="Email"/>
                            <AddressInput required name="city" label="City"/>
                            <AddressInput required name="postCode" label="Post code"/>
                        </Grid>
                        <div className='botonCheckOut'>
                            <Button component={Link} to='/CheckOutPage' variant='contained'>Back to the CheckOut page</Button>
                            <Button type='submit' variant='contained'>Next</Button>
                        </div>
                    </form>
                </FormProvider>
                
            </div>
        </div>
    )
}

export default AddressForm