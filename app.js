const express = require('express')
const cors = require('cors')

const app = express()

let corsOptions = {origin: "localhost:8081"}

// les middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// petit routes pour essayer
app.get('/', (req, res) => {
    res.json({message: "Bonjour tout le monde! "})
})

// ecouter les requetes
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log( ` Le server est lancé sur le port : ${PORT} `);
})



