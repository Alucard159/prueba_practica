import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Prueba1_1 from './pages/prueba1_1';
import Prueba1_2 from './pages/prueba1_2';
import Prueba1_3 from './pages/prueba1_3';
import Prueba2_1 from './pages/prueba2_1';
import Prueba2_2 from './pages/prueba2_2';
import Prueba2_3 from './pages/prueba2_3';
import Prueba3_1 from './pages/prueba3_1';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="prueba1_1" element={<Prueba1_1 />} />
          <Route path="prueba1_2" element={<Prueba1_2 />} />
          <Route path="prueba1_3" element={<Prueba1_3 />} />
          <Route path="prueba2_1" element={<Prueba2_1 />} />
          <Route path="prueba2_2" element={<Prueba2_2 />} />
          <Route path="prueba2_3" element={<Prueba2_3 />} />
          <Route path="prueba3_1" element={<Prueba3_1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
