import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Error from './Pages/Error';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Message from './Pages/Message';
import Wallet from './Pages/Wallet';
import HelpSupport from './Pages/HelpSupport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="message" element={<Message />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="help-support" element={<HelpSupport />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
