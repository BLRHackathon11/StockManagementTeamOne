import Recat from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';

const Home = () => {

    return <Box sx={{ flexGrow: 1 }}>
        <Header />
    </Box>
}

export default Home;