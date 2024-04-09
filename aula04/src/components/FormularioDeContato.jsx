import React, { useState } from 'react'

const FormularioDeContato = () => {
    const[name, setName] = useState('');
    const[contact, setContact] = useState('');
    const[mensage, setMensage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const dadosFormulario = {
        name: name,
        contact: contact,
        mensage: mensage
    };

    const josnToSend = JSON.stringify(dadosFormulario);

    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${josnToSend}`);

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Nome</label>
            <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />        
        </div>
        <div>
            <label htmlFor='contact'>Contato</label>
            <input type='text' name='contact' id='contact' value={contact} onChange={(e) => setContact(e.target.value)} />        
        </div>
        <div>
            <label htmlFor='mensage'>Mensagem</label>
            <input type='text' name='mensage' id='mensage' value={mensage} onChange={(e) => setMensage(e.target.value)} />        
        </div>
        <button type='submit'>Enviar</button>
    </form>
    
  )
}

export default FormularioDeContato