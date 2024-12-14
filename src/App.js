import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetails from './pages/OrderDetails';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="orderDetails" element={<OrderDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
