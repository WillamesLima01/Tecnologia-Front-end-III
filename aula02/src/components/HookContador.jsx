import React, { useState } from 'react'

const HookContador = () => {
    const [contador, setContador] = useState(1);

    function incrementar() {
        setContador(contador + 1);
    }

    return (
        <div>
            <h1>HookContador</h1>            
            <button onClick={incrementar}>

                Incrementar {contador}
                
            </button>
        </div>
    );
}

export default HookContador