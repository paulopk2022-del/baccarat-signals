let historico = [];

function adicionarResultado(resultado){

    historico.push(resultado);

    if(historico.length > 100){
        historico.shift();
    }

    console.log(historico);
}