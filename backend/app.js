    const express = require("express")
    const rotaPerfil = require("./rotas/perfil")
    const cors = require("cors")
    const app = express()
    app.use(express.json())
    app.use(cors({origin: "*"}))
    const port = 8000

    app.use('/api', rotaPerfil)

    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })