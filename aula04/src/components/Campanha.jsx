import React from 'react'
import styles from './Campanha.module.css';

const Campanha = (props) => {
    const mensagem =
        props.mes === 'setembro' ? 'Prevenção ao suicídio' :
        props.mes === 'outubro' ? 'Conscientização sobre o câncer de mama' :
        props.mes === 'novembro' ? 'Prevenção e combate ao câncer de próstata' : 
        '';
    
    const estiloMes =
        props.mes === 'setembro' ? styles.setembro :
        props.mes === 'outubro' ? styles.outubro :
        props.mes === 'novembro' ? styles.novembro : 
        '';

  return (
    <div className={`${styles.Campanha} ${estiloMes}`}>
        <p>{mensagem}</p>
    </div>
  )
}

export default Campanha