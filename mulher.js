const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
    response.json({
        nome: 'Gabriela Barbosa',
        imagem: 'https://avatars.githubusercontent.com/u/83621647?v=4',
        minibio: 'Uma sonhadora, curiosa. estudo, porque o conhecimento mata a minha curiosidade, e viver e melhor que sonhar.',
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)