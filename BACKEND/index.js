//1° video
(async () => {


    const database = require('./db');
    const clientes = require('./cliente');
    await database.sync();

    const novoCliente = await clientes.create({
        nomeCliente: 'JV',
        mesa: 03
    }) 

    console.log(novoCliente);
}) ();

console.log("Passamos pelo index!")

