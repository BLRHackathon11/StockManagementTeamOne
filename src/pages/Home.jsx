import Recat, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Box, Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../store/slices/StocksSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = () => {

    const dispatch = useDispatch();
    const { stocksData } = useSelector((state) => state.stocks);

    useEffect(() => {
        dispatch(fetchStocks())
    }, [])

    return <Card sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stocksData.map((row) => (
                        <TableRow
                            key={row.stockId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.stockId}
                            </TableCell>
                            <TableCell align="right">{row.stockQuantity}</TableCell>
                            <TableCell align="right">{row.stockSymbol}</TableCell>
                            <TableCell align="right">{row.stockName}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>
}

export default Home;