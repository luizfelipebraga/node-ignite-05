//**Route Params  */
//**Route Params => Identificar um recurso editar/deletar/buscar*/
//**Query Params =>  Páginaçã | Filtro de Busca*/
//**Body Params => Os objetos inserção/alteração (JSON)*/

//express
const express = require('express');

port = 3333;

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.send((['Curso 1']))
})

app.get('/courses:id', (request, response) => {
    const { id } = request.params;
    console.log(id)
    return response.send((['Curso 1']))
})

app.listen(port, () => console.log('listening on port ' + port));