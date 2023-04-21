const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require("../sevicos/livro")

function getLivros(req, res) {  //Mostra todos os livros
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {  //Mostra apenas o livro que é passado o id
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send('Id inválido.')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {  //Insere um novo livro no banco
    try {
        const livroNovo = req.body
        if(req.body.nome && req.body.id){
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso.')
        } else {
            res.status(422)
            res.send('Livro sem as informações nescessárias, o preenchimento dos campos id e nome são obrigatorios.')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchModifica(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        if (id && Number(id)){
            modificaLivro(body, id)
            res.send('Livro modificado com sucesso.')
        } else {
            res.status(422)
            res.send('Id inválido.')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
            deletaLivroPorId(id)
            res.send("Livro excluído com sucesso.")
        } else {
            res.status(422)
            res.send('Id inválido.')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchModifica,
    deleteLivro
}