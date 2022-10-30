import React from 'react';
import accounting from 'accounting';
import { Button } from '@mui/material';
import  { getBasketTotal }   from '../reducer';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

import '../styles/Total.scss';

const Total = () => {

    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();

return (
    <div className='totalContainer'>
        <h5>Total: {accounting.formatMoney(getBasketTotal(basket),"$")} </h5>
        <h4>Items: {basket?.length}</h4>
        <Link to="/CheckOut" className='botonTotal'>
            <Button >
                CheckOut
            </Button>
        </Link>
        
    </div>
)
}

export default Total