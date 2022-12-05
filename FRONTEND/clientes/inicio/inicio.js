function enviarDados() {
    const url = 'http://10.0.0.107:1313/gravar-cliente'

    var nomeCliente = document.getElementById('nome').value;
    var mesa = document.getElementById('mesa').value;

    var meusDados = {
        nomeCliente,
        mesa,
    }
    fetch(url, {
        method: 'Post',
        body: JSON.stringify(meusDados),
        headers: {
            "Content-type": "application/json"

        },
    }).then((resultado) => {
        return resultado.json();
    })
}