const express = require('express'); //importar express
const  app = express(); //instanciar express
// Iniciar servidor
const PORT = 8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));
// Permitir a express usar JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}))

