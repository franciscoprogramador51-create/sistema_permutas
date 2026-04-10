const express = require('express');
const cors = require('cors'); // Novo: Para liberar acesso do celular
const { Permuta } = require('./database');
const app = express();

app.use(cors()); // Liberando geral a rede
app.use(express.json());
app.use(express.static('.'));

// ROTA DE LISTAGEM (Ajustada para o celular ler fácil)
app.get('/lista-permutas', async (req, res) => {
    try {
        const lista = await Permuta.findAll({ order: [['id', 'DESC']] });
        res.json(lista);
    } catch (erro) {
        res.status(500).json([]);
    }
});

// ROTA PARA CRIAR
app.post('/permutas', async (req, res) => {
    try {
        await Permuta.create(req.body);
        res.status(201).json({ok: true});
    } catch (e) { res.status(400).send(e); }
});

// ROTAS DE DECISÃO
app.put('/homologar/:id', async (req, res) => {
    await Permuta.update({ status: 'HOMOLOGADO' }, { where: { id: req.params.id } });
    res.json({ok: true});
});

app.put('/negar/:id', async (req, res) => {
    await Permuta.update({ status: 'NEGADO' }, { where: { id: req.params.id } });
    res.json({ok: true});
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\nSISTEMA PRONTO NO IP: 10.0.0.109`);
    console.log(`ACESSE NO CELULAR: http://10.0.0\n`);
});