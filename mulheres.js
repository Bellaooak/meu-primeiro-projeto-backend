const express = require("express")
const router =express.Router()

const app = express()
const porta = 3333

const mulheres = [ 
    {    
        nome: 'Gabriela Barbosa',
        imagem: 'https://avatars.githubusercontent.com/u/83621647?v=4',
        minibio: 'Uma sonhadora, curiosa. estudo, porque o conhecimento mata a minha curiosidade, e viver e melhor que sonhar.'
        
    },
    {
        nome: 'Gabriela Barbosa',
        imagem: 'https://avatars.githubusercontent.com/u/83621647?v=4',
        minibio: 'Uma sonhadora, curiosa. estudo, porque o conhecimento mata a minha curiosidade, e viver e melhor que sonhar.'
    },
    {
        nome: 'Gabriela Barbosa',
        imagem: 'https://avatars.githubusercontent.com/u/83621647?v=4',
        minibio: 'Uma sonhadora, curiosa. estudo, porque o conhecimento mata a minha curiosidade, e viver e melhor que sonhar.'
    }

]

function mostraMulheres(request, response) {
    response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)