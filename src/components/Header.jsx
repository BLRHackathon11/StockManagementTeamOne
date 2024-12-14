import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div"
                        onClick={() => handleNavigation('/home')}>
                        Home
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div"
                        sx={{ marginLeft: 10 }}
                        onClick={() => handleNavigation('/orderDetails')}>
                        My Orders
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
