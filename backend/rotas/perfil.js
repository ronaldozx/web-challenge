    const { Router } = require("express")
    const {getPerfil, getPerfilId} = require("../controladores/perfil")
    const {postPerfil} = require("../controladores/perfil")
    const {patchPerfil} = require("../controladores/perfil")
    const {deletePerfil} = require("../controladores/perfil")


    const router = Router()

    router.get('/', getPerfil)

    router.get("/:id", getPerfilId)

    router.post('/', postPerfil)

    router.patch('/:id', patchPerfil)
    
    router.delete('/:id', deletePerfil)

    router.put('/:id', patchPerfil)


    module.exports = router