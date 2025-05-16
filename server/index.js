// C(create)R(read)U(update)D(delete)
// API faz requisiçoes do tipo CRUD
// Get => Read
// Post => Create
// Put => Atualizar
// Delete => Deletar
// Cors => N permite q vc acesse a informaçao de um lugar distinto
const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

let usuarios = [];

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
});

// req(requisiçao)
// res(resposta)
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    console.log("Usuario recebido", novoUsuario);

    novoUsuario.id = usuarios.length + 1;
    usuarios.push(novoUsuario);

    res.status(201).json({ mensagem: 'Usuário criado com sucesso' })
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id == id);

    if (usuario) {
        res.json(usuario)
    }

});

app.put('/usuarios/:id', (req, res) => {
    const id = req.params;
    const idUsuario = element => element == id;
    const usuarioIndex = usuarios.findIndex(idUsuario)

    if (usuarioIndex !== -1) {
        usuarios[usuarioIndex].nome = novosDados.nome;
        usuarios[usuarioIndex].email = novosDados.email;

        res.json({
            mensagem: "Usuário atualizado com sucesso",
            usuario: usuarios[usuarioIndex]
        });
    } else {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
})
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});