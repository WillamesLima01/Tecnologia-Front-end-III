import React from 'react'

const AlunoStatusMedia = ({ nome, email, curso, media }) => {
    const status = media >= 6.0 ? 'APROVADO':'REPROVADO';
    
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <p>Email: {email}</p>
            <p>Curso: {curso}</p>
            <p>Média: {media}</p>
            <p>Status: {status}</p>
        </div>
    )
}

export default AlunoStatusMedia