import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Error from './Pages/Error';
import Skilltest from './Pages/Skilltest';
import Internship from './Pages/Internship';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Skilltest />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="skilltest" element={<Skilltest />} />
          <Route path="internship" element={<Internship />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
