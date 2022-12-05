(async () => {


    const database = require('./db');
    const produto = require('./models/produtos');
    await database.sync();

    const novoProduto = await produto.create({
        nomeProduto: "batata frita",
        descricao :"tamanho médio",
        preco: 6.50,
        estoque: 50,
        categoria: "petisco",
        img: "IMG/batata.png"
    }) 
    

    console.log(novoProduto);
}) ();

//2° video
console.log("Passamos pelo index!");