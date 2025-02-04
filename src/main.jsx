import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
// import App from './App.jsx'
import Dashboard from './feature/dashboard.jsx';
import AddReseller from './feature/AddReseller.jsx';
import Booking from './feature/Booking.jsx';
import Withdrawal from './feature/Withdrawal.jsx';
import VerifyInformation from './feature/VerifyInformation.jsx';
import BankInformation from './feature/BankInformation.jsx';
import VerificationDone from './feature/VerificationDone.jsx';
import AffiliatorProfile from './feature/AffiliatorProfile.jsx';
import VendorProfile from './feature/VendorProfile.jsx';
import Login from './feature/Login.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

      <Route path="/verification" element={<VerifyInformation />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/withdrawal" element={<Withdrawal />} />
      <Route path="/affiliator-profile" element={<AffiliatorProfile />} />

      <Route path="/add-reseller" element={<AddReseller />} />
      <Route path="/profile/:companyName" element={<VendorProfile />} />
      </Routes>
    </Router>
  </StrictMode>
)
