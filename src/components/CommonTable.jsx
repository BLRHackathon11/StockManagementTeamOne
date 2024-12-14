import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const CommonTable = ({ data, dataKeys, dataHeaders }) => {
    if (!data && data.length <= 0) {
        return <Typography variant="h6" color="inherit" component="div" sx={{ marginLeft: 1, marginTop: 2 }}>
            No Data Available
        </Typography>
    }
    return <TableContainer component={Paper} sx={{ marginTop: 1, }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: 'gray' }}>
                <TableRow>
                    {dataHeaders.map((key) => (
                        <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow
                        key={row.stockId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {dataKeys.map((key, index) => (
                            <TableCell> {(dataHeaders[index] == 'Action') ?
                                <Button variant='contained'>{key}</Button> : row[key]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}
export default CommonTable;