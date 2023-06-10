import React from 'react';
import Google from './Google';
import QAcademico from './QAcademico';
import Mark from './Mark';
import Font from './Font';
import { BrowserRouter, Route, Link, Router, Routes } from 'react-router-dom';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
         <div>
        <nav>
          <ul>
            <h1>Atividades SAPER - Saulo</h1>
            <li>
              <Link to="/mark">Atividade Bolsista</Link>
              </li>
              <li>
              <Link to="/qacademico">Q-Academico</Link>
              </li>
              <li>
              <Link to="/google">Google</Link>
              </li>
              <li>
              <Link to="/font">Replicação Slide Fonte</Link>
              </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/google" element={<Google />}/>
          <Route path="/qacademico" element={<QAcademico />}/>
          <Route path="/mark" element={<Mark />}/>
          <Route path="/font" element={<Font />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
