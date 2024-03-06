const notas = [10, 6.8, 9.2];
const media = (notas) => (notas[0]+notas[1]+notas[2])/ notas.length

console.log ("A segunda nota do aluno é: " + (notas[1]));
console.log ("A terceira nota do aluno é: " + (notas[2]));
console.log ("A média do aluno é: " + media(notas));