import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

import '../styles/Product.scss';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product({product : {id, name, productType, price, rating, image, description}}) {

    // eslint-disable-next-line no-unused-vars
    const [{basket}, dispatch] = useStateValue();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };
    
    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id,
                name,
                productType,
                image,
                price,
                rating,
                description,
            }
        })
    }

    return (
        <Card className="cardContainer">
        <CardMedia
            component="img"
            image={image}
            alt="Nike shoes"
            className='image'
        />
        <div className='title'>
            <Typography variant='h5'>
                {name}
            </Typography>
        </div>
        <div className='subYprice'>
            <Typography variant='h6'>
                {productType}
            </Typography>
            <Typography
                variant="h6"
                color="textSecondary"
                >
                    {accounting.formatMoney(price)}
                </Typography>
        </div>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={addToBasket}>
                <AddShoppingCart></AddShoppingCart>
            </IconButton>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>&#11088;</p>
            ))}
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className='productInfo'>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
                {description}
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    );
}