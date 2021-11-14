//nodemon Controller.js

const express = require('express');
const cors = require('cors');
const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({ extended: true }));
let vacinado = models.Vacinado;
let use = models.Use;
let recompensa = models.Recompensa;
let sorteio = models.Sorteio;
let sorteado = models.Sorteado;

app.post('/create', async (req, res) => {
    let create = await vacinado.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        createdAt: new Date(),
        updatedAt: new Date()
    });
});

app.post('/create-recompensa', async (req, res) => {
    let create = await recompensa.create({
        item: req.body.item,
        descricao: req.body.descricao,
        createdAt: new Date(),
        updatedAt: new Date()
    });
});

app.post('/create-sorteado', async (req, res) => {
    let create = await sorteado.create({
        numero_sorteado: req.body.cracha_sorteado,
        createdAt: new Date(),
        updatedAt: new Date()
    });
});

app.post('/create-uso', async (req, res) => {
    try {
        let create = await use.create({
            userId: req.body.userId,
            nome: req.body.nome,
            cracha: req.body.badge,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    } catch (error) {
        console.error(error);
    }
});

app.post('/read', async (req, res) => {
    try {
        const users = await vacinado.findAll();
        if (response === null) {
            res.send(JSON.stringify(`Nenhum usuário encontrado`));
        } else {
            res.send(JSON.stringify(response))
        }
    } catch (error) {
        console.error(error);
    }
});

app.post('/uso-cracha', async (req, res) => {
    let response = await use.findOne({
        where: { userId: req.body.userId },
        include: [{ all: true }]
    });
    if (response === null) {
        res.send(JSON.stringify(`Sem crachá!`));
    } else {
        res.send(JSON.stringify(response.cracha))
    }
});

app.get('/create-uso', async (req, res) => {
    let create = await use.create({
        userId: "5",
        nome: "joao",
        cracha: "12348456123",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Cracha atribuido com sucesso!');
});

app.get('/create', async (req, res) => {
    let create = await vacinado.create({
        nome: "joao",
        telefone: "12348456123",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/create-recompensa', async (req, res) => {
    let create = await recompensa.create({
        item: "Maria",
        descricao: "Mole",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Recompensa criada com sucesso!');
});

app.get('/read', async (req, res) => {
    let read = await vacinado.findAll({
        raw: true,
    });
    //console.log(read);
    res.send(read);
});

app.get('/read-sorteados', async (req, res) => {
    let read = await sorteado.findAll({
        raw: true,
    });
    //console.log(read);
    res.send(read);
});

app.get('/uso-cracha', async (req, res) => {
    let response = await use.findByPk(4);
    if (response === null) {
        res.send(JSON.stringify(`Sem crachá!`));
    } else {
        res.send(JSON.stringify(response))
    }
});

app.get('/uso-cracha-all', async (req, res) => {
    let read = await use.findAll({
        raw: true,
    });
    //console.log(read);
    res.send(read);
});

app.get('/read-recompensas', async (req, res) => {
    let read = await recompensa.findAll({
        raw: true,
    });
    //console.log(read);
    res.send(read);
});

app.get('/create-sorteado', async (req, res) => {
    let create = await sorteado.create({
        numero_sorteado: "25",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Número armazenado com sucesso!');
});

app.get('/', (req, res) => {
    res.send('Hello World! V_1.3')
  })

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});