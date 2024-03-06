const notas = [7.0, 8.7, 9.0];

console.log ("A primeria nota do aluno é: " + notas[0]);
console.log ("A segunda nota do aluno é: " + notas[1]);
console.log ("A terceira nota do aluno é: " + notas[2]);

function calcularMedia(notas){

    return (notas[0]+notas[1]+notas[2])/ notas.length;
}

const media = calcularMedia(notas);

if (media >= 7){
    console.log ("Aluno aprovado com média igual a: " + (calcularMedia(notas)))
} else {
    console.log ("Aluno reprovado com média igual a: " + (calcularMedia(notas)))
}
