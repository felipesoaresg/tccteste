const corpoSite = document.querySelector('.mainContainer1');
document.body.onload = PegarDados;
var todosDados; //PAra guardar a lista do servidor

function PegarDados() {
  const url = 'http://10.0.1.72:1313/listar-produtos';

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
      for (var num = 0; num < dados.length; num++) {
          const card = document.querySelector('.outside');
          const criaCard = document.createElement(card);

          criaCard.innerHTML = `
          <div class="sumir">
              <div class="edit">
              <img src="img/botao-x.png" onclick="sumir()" class="X">
              <div class="col2">
                  <img src="img/kids-burger-thumb.png">
                  <button onclick="salvar()" class="btn"> Salvar </button>
              </div>
              <div class="col1">
                  <form action = "http://10.0.1.72:1313/editar-produto" class="edit2">
                      <input type="text" id="nomeProduto"  placeholder="NOME:">
                      <input type="number" id="quantProduto" placeholder="QUANTIDADE:">
                      <input type="number" id="precoProduto" placeholder="PREÇO:">
                      <input type="text" id="descricaoProduto"  placeholder="DESCRIÇÃO:">
                  </form>
              </div>
          </div>  
          </div>
          <div class="out">
              <div class="mainContainer">
                  <H5> ${dados[num].nomeProduto}</H5>
                  <div class="columns">
                      <div class="col">
                          <img src="IMG/kids-burger-thumb.png" class="img">
                          <input type="button" value="EDITAR" class="btn1" onclick="aparecer(${num})">
                      </div>
                      <div class="col1">
                          <H6> ${dados[num].estoque}</H6>
                          <H6> ${dados[num].preco}</H6>
                          <div class="etiqueta">disponível</div>
                      </div>
                  </div>
              </div> 
              </div>  
 `            
          corpoSite.appendChild(criaCard);

        //  console.log(dados[num]);
      }
  });
}

function pegarDados() {
    const url = 'http://10.0.1.72:1313/gravar-produto'

    var nomeProduto = document.getElementById('nomeProduto1').value;
    var descricao = document.getElementById('descricaoProduto1').value;
    var preco = document.getElementById('precoProduto1').value;
    var estoque = document.getElementById('quantProduto1').value;


    var meusDados = {
        nomeProduto,
        descricao,
        preco,
        estoque,
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

//editar produtos do estoque
function aparecer( dados) {

    console.log(todosDados[dados].idProduto);

    var edit = document.querySelector('.sumir');

    edit.style.display = 'block';
}

function sumir() {
    
    var edit = document.querySelector('.sumir');

    edit.style.display = 'none';
    
}

function salvar() {
    const url = 'http://10.0.1.72:1313//editar-produto'

    var nomeProduto = document.getElementById('nomeProduto').value;
    var descricao = document.getElementById('descricaoProduto').value;
    var preco = document.getElementById('precoProduto').value;
    var estoque = document.getElementById('quantProduto').value;
    var idProduto = todosDados[dados].idProduto;

    var meusDados = {
        nomeProduto,
        descricao,
        preco,
        estoque,
        categoria,
        idProduto
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
