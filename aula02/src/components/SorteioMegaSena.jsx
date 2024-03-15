import React, { useState } from 'react';

const SorteioMegaSena = () => {
    const [sorteados, setSorteados] = useState([]);

    function sortearNumero() {
        const numerosSorteados = Array.from({ length: 6 }, () => sorteado(1, 60));
        setSorteados(numerosSorteados);
    }

    function sorteado(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div>
            <button onClick={sortearNumero}>Sortear Números</button>
            <p>Números sorteados: {sorteados.join(', ')}</p>
        </div>
    );
};

export default SorteioMegaSena;

