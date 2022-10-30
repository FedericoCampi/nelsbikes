import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/title.png'
import { useStateValue } from '../StateProvider';
import '../styles/Navbar.scss';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

export function Navbar() {

    // eslint-disable-next-line no-unused-vars
    const [{basket, user}, dispatch] = useStateValue();

    const history = useNavigate();
    
    const handleAuth = () => {
        if(user){
            auth.signOut();
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
            });
            history("/")
        }
    }

    return (
        <Box>
        <AppBar className="navContainer">
            <Toolbar>
            <Link to="/">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    className="navLogo"
                >
                    <img src={logo} alt="logo"></img>
                </IconButton>
            </Link>
            <div className='navGrow'></div>
            <Typography variant="h6" component="div" className='guest'>
                Hello {user ? user.email : "Guest"}
            </Typography>
            <Link to="/SignIn">
                <Button variant="outlined" className="signIn" onClick={handleAuth}>
                    <strong>{user ? "Sign Out" : "Sign In"}</strong>
                </Button>
            </Link>
            <Link to="/CheckOutPage">
                <IconButton className='buttonCart'>
                    <Badge badgeContent={basket?.length}>
                        <ShoppingCart fontSize="large" color='white'/>
                    </Badge>
                </IconButton>
            </Link>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
export default Navbar;