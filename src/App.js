import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetails from './pages/OrderDetails';
import Home from './pages/Home ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="orderDetail" element={<OrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
