require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? ".env.development" : ".env"
  })
const express = require('express');

const app = express()

console.log(process.env.DB_DATABASE)

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`))