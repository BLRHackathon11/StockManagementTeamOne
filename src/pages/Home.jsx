import Recat from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Box, Card } from '@mui/material';

const Home = () => {

    return <Card sx={{ flexGrow: 1 }}>
        <Header />
    </Card>
}

export default Home;