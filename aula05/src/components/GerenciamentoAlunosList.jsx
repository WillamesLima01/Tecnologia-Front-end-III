import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const GerenciamentoAlunosList = () => {
    const [alunos, setAlunos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/alunos')
        .then(Response => {
            setAlunos(Response.data)
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }, []);    
    
  return (
    <div>
        <h2>Lista de Alunos</h2>
        <button onClick={() => navigate('/add-aluno')} className="btn btn-primary mb-2">Adicionar Aluno</button>
        <table border= '1px'>
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Email:</th>
                    <th>Curso:</th>                    
                </tr>                
            </thead>
            <tbody>
                {
                    alunos.map(aluno => (
                        <tr key={aluno.id}>
                            <td>{aluno.name}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.course}</td>                           
                        </tr>
                    ))
                }
            </tbody>

        </table>

    </div>
  )
}

export default GerenciamentoAlunosList