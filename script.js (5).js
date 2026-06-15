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