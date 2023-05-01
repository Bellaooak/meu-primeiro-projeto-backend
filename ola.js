const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraOla(_request, response) {
    response.send("Ola Gabriela!")

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)