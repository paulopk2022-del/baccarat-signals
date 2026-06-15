async function buscarResultados() {

    const resposta = await fetch(
        "https://api.exemplo.com/resultados",
        {
            headers: {
                "Authorization": "Bearer SUA_CHAVE"
            }
        }
    );

    const dados = await resposta.json();

    document.getElementById("resultado").innerHTML =
        JSON.stringify(dados, null, 2);
}

buscarResultados();

setInterval(() => {
    buscarResultados();
}, 5000);

let historico = [];

function adicionarResultado(resultado){

    historico.push(resultado);

    if(historico.length > 100){
        historico.shift();
    }

    console.log(historico);
}

function gerarSinal(){

    const ultimos = historico.slice(-3);

    if(
        ultimos.length === 3 &&
        ultimos.every(x => x === "PLAYER")
    ){
        return "ENTRAR EM BANKER";
    }

    return "AGUARDAR";
}
