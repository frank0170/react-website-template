import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componente/Header';
import Home from './pagini/Home';
import Anunturi from './pagini/Anunturi';
import Examene from './pagini/Examene';
import Catalog from './pagini/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/anunturi' element={<Anunturi/>}/>
           <Route path='/examene' element={<Examene/>}/>
           <Route path='/catalog' element={<Catalog/>}/>
        </Routes>
      </Header>
  </BrowserRouter>

  );
}

export default App;
