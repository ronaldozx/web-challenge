const { getTodosPerfil, modificaPerfil } = require("../servicos/perfil")
const { getIdPerfil } = require("../servicos/perfil")
const {inserePerfil}= require("../servicos/perfil")
const {deletePerfilPorId} = require("../servicos/perfil")

function getPerfil (req, res) {
    try{
            const perfil = getTodosPerfil()

            res.send(perfil)
        }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}
function getPerfilId (req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const perfil = getIdPerfil(id)
            res.send(perfil)

        }else{
            res.status(422)
            res.send("Id invalido")
        }
        
        }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}
function postPerfil(req,res){
    try{

        const perfilNovo = req.body

        if(req.body.nome){//se tiver o campo nome
            inserePerfil(perfilNovo)
            res.status(201)
            res.send("Inserido com sucesso")
        }else{
            res.status(422)
            res.send("Campo nome é obrigatorio")
        }
        

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchPerfil(req,res){
    try{

        const id = req.params.id
        if(id && Number(id)){
        const body = req.body

        modificaPerfil(body, id)
        res.send("Item Modificado com sucesso")
        }else{
            res.status(422)
            res.send("Id invalido")
        }

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deletePerfil(req,res){
    try{
        const id = req.params.id
        if(id && Number(id)){


        deletePerfilPorId(id)
        res.send("Perfil Deletado com sucesso")
        }else{
            res.status(422)
            res.send("Id invalido")
        }


    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getPerfil,
    postPerfil,
    patchPerfil,
    deletePerfil,
    getPerfilId
}