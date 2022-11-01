import { List, ListItem, ListItemText, Typography } from '@mui/material'
import accounting from 'accounting';
import React from 'react'
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';

import '../../styles/CheckOutFormStyles/Review.scss';

const Review = () => {

    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='reviewContainer'>
            <Typography variant='h6'>
                Order summary
            </Typography>
            <List className='listReview'>
                {
                    basket?.map(product => (
                        <ListItem key={product.name}>
                            <ListItemText primary={product.name} secondary={`Qty: ${1}`}/>
                            <Typography variant='body2'>
                                {accounting.formatMoney(product.price,"$")}
                            </Typography>
                        </ListItem>
                    ))
                }
                <ListItem>
                    <ListItemText primary='Total'/>
                    <Typography>
                        <h4>{accounting.formatMoney(getBasketTotal(basket),"$")}</h4>
                    </Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default Review