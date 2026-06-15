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