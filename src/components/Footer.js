import { Button, Grid, Input, List } from '@mui/material'
import React from 'react'
import ciclism from '../assets/ciclism.jpg'
import gh from '../assets/contact/github.png'
import ig from '../assets/contact/instagram.png'
import ld from '../assets/contact/linkedin.png'

import '../styles/Footer.scss';

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className='div1Footer'>
                NELS BIKES
            </div>
            <div>
                <Grid container className='gridFooter'>
                    <Grid item xs={12} sm={6} md={2} lg={2} className='gridList'>
                        <List className='list1'>
                            <h3>ABOUT US</h3>
                            <p>Our history</p>
                            <p>Work with us</p>
                            <p>Innovation</p>
                            <p>Sustainability</p>
                            <p>More</p>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} className='gridList'>
                    <List className='list1'>
                            <h3>RESOURCES</h3>
                            <p>Bike Archive</p>
                            <p>Suspension Calculator</p>
                            <p>Size Guide</p>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} className='gridList'>
                    <List className='list3'>
                            <h3>SUPPORT</h3>
                            <p>Contact Us</p>
                            <p>FAQ</p>
                            <p>Returns</p>
                            <p>Warranty</p>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <div className='imgDivFooter'>
                            <img src={ciclism} alt='' className='ciclism'>
                            </img>
                        </div>
                        <div className='line'>

                        </div>
                        <div className='newsletter'>
                            <h4>Subscribe to Newsletter</h4>
                            <div className='inputFooter'>
                                <Input placeholder='e-mail'>Email</Input>
                                <Button>Send</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='line2'>

            </div>
            <div className='copyright'>
                <div>
                    <p>©2022 Nels Bicycle Components. All Rights Reserved.</p>
                </div>
                <div className='iconsContact'>
                    <img src={gh} alt='Github'></img>
                    <img src={ig} alt='Instagram'></img>
                    <img src={ld} alt='Linkedin'></img>
                </div>
            </div>
        </div>
    )
}

export default Footer