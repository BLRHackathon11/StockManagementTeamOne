import { Card } from '@mui/material';
import React from 'react';
import orderData from './../data/dummyOrderData.json';
import CommonTable from '../components/CommonTable';

const OrderDetails = () => {

    const keys = ['orderId', 'stockName', 'orderQuantity', 'stockSymbol', 'price', 'date'];
    const headers = ['OrderId', 'Name', 'Quantity', 'Symbol', 'Price', 'Ordered At']

    return <Card sx={{ flex: 1, width: '100%', height: '100%' }}>
        <CommonTable data={orderData} dataKeys={keys} dataHeaders={headers} />
    </Card>
}
export default OrderDetails; 