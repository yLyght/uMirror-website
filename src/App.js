import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cu from './componentes/paginas/Cu';
import Sobre from './componentes/paginas/Sobre';
import Home from './componentes/paginas/Home';
import Erro from './componentes/paginas/Erro';
import NavBar from './componentes/navbar/navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/Cu' element={<Cu/>}/>
        <Route path='*' element={<Erro/>}/>
      </Routes>
    </Router>
  )
}

export default App;