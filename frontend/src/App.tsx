import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PurchaseItems from './pages/PurchaseItems';
import StockAuthKey from './pages/StockAuthKey';
import StockItems from './pages/StockItems';
import AgencyDetails from './pages/AgencyDetails';
import SuccessPopup from './pages/SuccessPopup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/purchase" element={<PurchaseItems />} />
        <Route path="/stock-auth" element={<StockAuthKey />} />
        <Route path="/stock-items" element={<StockItems />} />
        <Route path="/agency" element={<AgencyDetails />} />
        <Route path="/success" element={<SuccessPopup />} />
      </Routes>
    </Router>
  );
}

export default App;
