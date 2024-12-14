import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetails from './pages/OrderDetails';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Header from './components/Header';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="orderDetails" element={<OrderDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
