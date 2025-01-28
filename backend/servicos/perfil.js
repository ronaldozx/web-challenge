const fs = require("fs")

function getTodosPerfil(){
    return JSON.parse(fs.readFileSync("perfil.json"))
}

function getIdPerfil(id){
    const perfil = JSON.parse(fs.readFileSync("perfil.json"))
    const perfilFiltrado = perfil.filter(perfil => perfil.id == id)[0] // Usando == para comparação
    return perfilFiltrado
}

function inserePerfil(perfilNovo){
    const perfil = JSON.parse(fs.readFileSync("perfil.json"))
    const novaListaDePerfil = [...perfil, perfilNovo]
    fs.writeFileSync("perfil.json", JSON.stringify(novaListaDePerfil))
}

function modificaPerfil(modificacoes, id){
    let perfilAtuais = JSON.parse(fs.readFileSync("perfil.json"))
    const indiceModificado = perfilAtuais.findIndex(perfil => perfil.id == id) // Usando == para comparação
    const conteudoMudado = {...perfilAtuais[indiceModificado], ...modificacoes}
    perfilAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("perfil.json", JSON.stringify(perfilAtuais))
}

function deletePerfilPorId(id){
    const perfil = JSON.parse(fs.readFileSync("perfil.json"))
    const perfilFiltrado = perfil.filter(perfil => perfil.id != id) // Usando != para comparação
    fs.writeFileSync("perfil.json", JSON.stringify(perfilFiltrado))
}

module.exports = {
    getTodosPerfil,
    getIdPerfil,
    inserePerfil,
    modificaPerfil,
    deletePerfilPorId
}
