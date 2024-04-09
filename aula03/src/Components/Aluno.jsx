import React from 'react'

const Aluno = ({ nome, email, curso }) => {
    
  return (
    <div>
        <h2>Nome: {nome}</h2>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>       
    </div>
  )
}

export default Aluno