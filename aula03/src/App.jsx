import React from "react"
import EstouConseguindoAprenderReact from "./Components/EstouConseguindoAprenderReact"
import Aluno from "./Components/Aluno"
import AlunoStatusMedia from "./Components/AlunoStatusMedia";

function App() {
  const dadosAlunos = [
    {nome:'joão', email: 'joaoboteco@gmail.com', curso: 'engenharia civil'},
    {nome:'josé', email: 'jose@gmail.com', curso: 'tecnologia da informação'},
    {nome:'maria', email: 'maria@gmail.com', curso: 'biologia'}
  ];

  const dadosAlunoStatusMedia = [
    {nome:'joão', email: 'joaoboteco@gmail.com', curso: 'engenharia civil', media: 5.6},
    {nome:'josé', email: 'jose@gmail.com', curso: 'tecnologia da informação', media: 6.8},
    {nome:'maria', email: 'maria@gmail.com', curso: 'biologia', media: 10}
  ];

  return (
    <>
      <EstouConseguindoAprenderReact estouConseguindo ={true}/>

      {dadosAlunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}

      {dadosAlunoStatusMedia.map((aluno, index) => (
        <AlunoStatusMedia key={index} {...aluno} />
      ))}
    </>
  );
}

export default App
