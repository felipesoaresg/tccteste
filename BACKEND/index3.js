
(async () => {


    const database = require('./db');
    const carrinho = require('./models/carrinho');
    const produto = require('./models/produtos');
    await database.sync();

    /*const novoProduto = await produto.create({
        nomeProduto: "Fanta guaraná",
        descricao :"500ml",
        preco: 3.50,
        estoque: 50,
        categoria: "bebidas",
        img: "IMG/Refrigerante_Fanta_Uva_350Ml.jpg"
    })*/ 

    const novoCarrinho = await carrinho.create({
        produtosId: 39,
        valorTotal: 3.50,
        qtd: 1,
    }) 

    console.log(novoCarrinho);
    console.log(novoProduto);
}) ();

//2° video
console.log("Passamos pelo index!");