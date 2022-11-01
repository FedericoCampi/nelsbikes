import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/CheckOutFormStyles/Confirmation.scss';


const Confirmation = ({message}) => {
    return (
        <div className='confirmationContainer'>
            <Typography variant='h6'>
                {message}
            </Typography>
            <Typography>
                {message === 'Succesful payment'
                ? 'Your booking reference : R8s12h3kj4'
                : ""
                }
            </Typography>
            <div className='divBotonConfirmation'>
                <Button className='botonConfirmation' component={Link} to='/'variant='contained'>
                    Back to the Home page
                </Button>
            </div>        
        </div>
    )
}

export default Confirmation