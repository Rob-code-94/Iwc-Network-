import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GatewayPage from './pages/GatewayPage';
import CourierPage from './pages/CourierPage';
import NemtPage from './pages/NemtPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GatewayPage />} />
        <Route path="/courier/*" element={<CourierPage />} />
        <Route path="/nemt/*" element={<NemtPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
