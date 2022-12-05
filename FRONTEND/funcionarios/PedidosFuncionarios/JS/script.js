//listando pedidos com fetch
const corpoSite = document.querySelector('.site-content');
const col = document.querySelector('.col');
const col1 = document.querySelector('.col1');
document.body.onload = PegarDados;

function PegarDados() {
    const url = 'http://10.0.1.72:1313/listar-pedidos';
  
    fetch(url, {
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json"
        },
        method: 'GET'
    }).then((resultado) => {
        return resultado.json();
    })
    .then((dados) => {
        var status = 'disponível';
        todosDados = dados;
        corpoSite.innerHTML = ''

        //adicionando cards
        for (var num = 0; num < dados.length; num++) {
            const card = document.querySelector('.out');
            const criaCard = document.createElement(card);

            const mesa = document.querySelector('.h4');
            const mostraMesa = document.createElement(mesa);

            criaCard.innerHTML = `
            <div class="mainContainer">
            <div class="columns">
                <div class="col">
                    <br>
                    <h4>PEDIDO</h4>
                    <br><br>
                    <div class="row">
                        <h7>Pedido feito?</h7> 
                        <input type="checkbox">
                    </div>
                </div>
                <div class="col1">
                    <h3>TOTAL: 25.99</h3>
                </div>
            </div>
        </div> 
            `            
        //mostrabndo a mesa do cliente
        mostraMesa.innerHTML = `
        <h4>MESA ${dados[num].mesaCliente}</h4>
        `
            corpoSite.appendChild(criaCard);
  
          //  console.log(dados[num]);
        }


        //adicionando textos com produtos
        for (var num = 0; num < dados.produtos.length; num++) {

            const linha = document.querySelector('.h6');
            const criaLinha = document.createElement(mesa);

            coluna = document.querySelector('.col1');

            criaLinha.innerHTML= `
            <h6>${dados[num].idProdutoPed}</h6>
            `

            colunna.appendChild(criaLinha);

        }
    });
  }