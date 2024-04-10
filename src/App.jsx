import React from 'react';
import { ContextProvider } from './components/ContextToDo'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ToDo from './components/ToDo';
import Adicionar from './components/Adicionar';
import Editar from './components/Editar';
import Remover from './components/Remover';


function App() {
  
  return (
    <ContextProvider>
      <div>
        <Router>
          <Routes>
            <Route index element={<ToDo/>}/>
            <Route path="/adicionar" element={<Adicionar/>} />
            <Route path="/editar/:id" element={<Editar/>} />
            <Route path="/remover/:id" element={<Remover/>}/>
          </Routes>
        </Router>
      </div>
    </ContextProvider>
  )
}

export default App
