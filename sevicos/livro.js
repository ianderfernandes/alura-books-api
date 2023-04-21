const fs = require("fs")

function getTodosLivros () {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroEscolhido = livros.filter( livro => livro.id === id) [0]
    return livroEscolhido
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const adicionarNovaListaDeLIvros = [...livros, livroNovo]
    fs.writeFileSync("livros.json",JSON.stringify(adicionarNovaListaDeLIvros))
}

function modificaLivro(modificacoes, id){
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livros.findIndex(livro => livro.id === id)
    const livroModificado = {...livros[indiceModificado], ...modificacoes} 
    livros[indiceModificado] = livroModificado
    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

function deletaLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}