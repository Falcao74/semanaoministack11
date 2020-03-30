const express = require("express"); //importando express
const routes = require('./routes'); //importando as rotas
const app = express(); //instanciando a aplicação 

app.use(express.json());
app.use(routes);

app.listen(3333); //porta da aplicação