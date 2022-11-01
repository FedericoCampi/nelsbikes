import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './Product';
import products from '../ProductData';
import tourF from '../assets/tourFrance.png'

import '../styles/Products.scss';
import { Button } from '@mui/material';

export default function Products() {
return (
    <Box className='products'>
        <div className='imgContainer' id="about">
            <div className='imgDivProducts'>
            <img src={tourF} alt='' className='motorImg'>
            </img>
                <div className='introContainer'>
                    <div className='textDiv'>
                        <h4>Gear worn by the 2022 tour de france winning team</h4>
                    </div>
                    <div className='botonDiv'>
                        <div className='boton'>
                            <Button size="large">MORE INFORMATION</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="containerGrid">
            <Grid container spacing={2}>
                {
                    products.map(product => (
                        <Grid xs={12} sm={6} md={4} lg={3}>
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    </Box>
);
}
