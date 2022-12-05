
(async () => {


    const database = require('./db');
    const pedido = require('./models/pedidos');
    await database.sync();

    const novoPedido = await pedido.create({
        idCliente: 1,
        carrinhoId: 1,
        status: 'pendente'
    }) 

    console.log(novoPedido);
}) ();

//2° video
console.log("Passamos pelo index!");