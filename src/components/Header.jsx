import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate('/orderDetails')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <NavLink to="/" end>
                        <Typography variant="h6" color="inherit" component="div" onClick={handleNavigation}>
                            Home
                        </Typography>
                    </NavLink>
                    <Typography variant="h6" color="inherit" component="div" onClick={handleNavigation}>
                        My Orders
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
