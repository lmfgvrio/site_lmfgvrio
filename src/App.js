import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import ProcessoSeletivo from './pages/ProcessoSeletivo';
import Equipe from './pages/Equipe';
import Alumni from './pages/Alumni';
import Projetos from './pages/Projetos';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ProcessoSeletivo" element={<ProcessoSeletivo />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Alumni" element={<Alumni />} />
        <Route path="/Projetos" element={<Projetos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
