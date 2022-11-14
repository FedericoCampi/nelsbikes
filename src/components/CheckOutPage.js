import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckOutCard from './CheckOutCard'
import Total from './Total'
import { useStateValue } from '../StateProvider';
import '../styles/CheckOutPage.scss';
import cEmpty from '../assets/cardEmpty.png'
import { Link } from 'react-router-dom';

const CheckOutPage = () => {

    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();

    function CardEmpty(){
        return(
        <React.Fragment >
            <div className="cardEmptyContainer">
                <div className='cardEmptyImg'>
                    <img src={cEmpty} alt="Card empty">
                    </img>
                </div>
                <div className="cardEmptyDiv">
                    <h2>Your cart is empty</h2>
                    <Button component={Link} to='/' variant="outlined">Shop today's deals</Button>
                </div> 
            </div>
        </React.Fragment>
        )
    }
    function FormRow(){
        return (
            <React.Fragment>
                <Grid container spacing={1}>
                    {   
                        basket.length === 0 
                        ?   <CardEmpty/>
                        :   basket.map((item) => (
                            <Grid item xs={12} sm={8} md={6} lg={4}>
                                <CheckOutCard className='FormRow' key={item.id} product={item}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </React.Fragment>
        )
    }
    return (
        <div className='checkoutpage'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className='titleCart' variant='h3'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid  item container xs={12} sm={8} md={9} spacing={1}>
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckOutPage