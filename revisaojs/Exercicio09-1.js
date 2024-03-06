const valores = [10, 12, 15, 18, 22];

const valoresDobrados = valores.map(dobrarValores);

function dobrarValores(vlr){
    return vlr * 2;
}

console.log(valoresDobrados);