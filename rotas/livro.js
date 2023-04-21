const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchModifica, deleteLivro } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchModifica)

router.delete('/:id', deleteLivro)

module.exports = router