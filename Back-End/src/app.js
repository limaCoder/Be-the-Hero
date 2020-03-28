const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
/* 
* Rota / Recurso
*/

/* 
* Métodos HTTP:
*
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
 */

/* 
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) - GET
* Route Params: Parâmetros utilizados para identificar recursos - GET
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos - POST
*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;