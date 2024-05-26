import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GerenciamentoAlunosForm from './components/GerenciamentoAlunosForm';
import GerenciamentoAlunosList from './components/GerenciamentoAlunosList';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GerenciamentoAlunosList />} />
        <Route path="/add-aluno" element={<GerenciamentoAlunosForm />} />
      </Routes>
    </BrowserRouter>    
    </>
    
  );
};

export default App;
