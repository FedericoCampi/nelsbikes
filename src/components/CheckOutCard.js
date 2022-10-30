import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete'
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import '../styles/CheckOutCard.scss';

import '../styles/Product.scss';
import { IconButton } from '@mui/material';

export default function CheckOutCard({product : {id, name, productType, price, rating, image, description},}) {

    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();

    const removeItem = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id,
    })
    return (
        <Card className="CardContainer">
        <CardMedia
            component="img"
            image={image}
            alt="Nike shoes"
            className='image'
        />
        <div className='cardProduct'>
            <Typography variant="h6">
                {name}
            </Typography>
            <Typography
                variant="h6"
                color="textSecondary"
                >
                    {accounting.formatMoney(price)}
            </Typography>
            
        </div>
        <CardActions disableSpacing>
            <div className='DeleteDiv'>
                <div className='ratingDiv'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>&#11088;</p>
                    ))}
                </div>
                <IconButton onClick={removeItem}>
                    <DeleteIcon fontSize="large" ></DeleteIcon> 
                </IconButton>
            </div>
        </CardActions>
        </Card>
    );
}