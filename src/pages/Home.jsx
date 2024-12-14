import Recat, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Box, Button, Card, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../store/slices/StocksSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CommonTable from '../components/CommonTable';

const Home = () => {

    const dispatch = useDispatch();
    const { stocksData } = useSelector((state) => state.stocks);

    useEffect(() => {
        dispatch(fetchStocks())
    }, [])

    const keys = ['stockId', 'stockName', 'stockQuantity', 'stockSymbol', 'price', 'Buy'];
    const headers = ['Id', 'Name', 'Quantity', 'Symbol', 'Price', 'Action']

    return <Card sx={{ flexGrow: 1, alignContent: 'center' }}>
        <Typography variant="h6" color="inherit" component="div" sx={{ marginLeft: 1, marginTop: 2 }}>
            Stocks
        </Typography>
        {(stocksData && stocksData.length > 0) && <CommonTable
            data={stocksData} dataKeys={keys} dataHeaders={headers} />}
    </Card>
}

export default Home;