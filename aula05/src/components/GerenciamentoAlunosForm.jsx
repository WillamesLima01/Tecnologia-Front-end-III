import React, { useState } from 'react';
import axios from '../../api'; 
import { useNavigate } from 'react-router-dom';

const GerenciamentoAlunosForm = () => {
    const [aluno, setAluno] = useState({ name: '', email: '', course: '' });
    const navigate = useNavigate();
    
    function handleChange(event) {
        const { name, value } = event.target;
        setAluno(prevState => ({ ...prevState, [name]: value }));
    }
    
    function handleSubmit(event) {
        event.preventDefault(); 
        axios.post('/alunos', aluno) 
            .then(() => {
                alert("Aluno cadastrado com sucesso!"); 
                navigate("/");
            })
            .catch(error => console.error("Ocorreu um erro: ", error)); 
    }

    return (
        <div>
            <h2>Adicionar Aluno</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type='text' name='name' value={aluno.name} onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type='email' name='email' value={aluno.email} onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Curso:
                    <input type='text' name='course' value={aluno.course} onChange={handleChange} />
                </label>
                <br/>
                <input type='submit' value='Salvar' />
            </form>
        </div>
    );
}

export default GerenciamentoAlunosForm;
