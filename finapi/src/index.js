import express from 'express';
import { v4 as uuid } from 'uuid';

const port = 3334;

const costomers = [];

const app = express();

app.use(express.json());



app.post('/account', (request, response) => {
    const { name, cpf } = request.body;

    const costomerAlready = costomers.some((costomer) => costomer.cpf === cpf)

    if (costomerAlready) {
        return response.status(400).json({ error: "costomer Already Exists" })
    }

    const id = uuid();

    costomers.push({
        name,
        cpf,
        id,
        statement: []
    })

    return response.status(200).json(costomers);
})

app.get('/account', verifyIfExistsCpfAccount, (request, response) => {
    const { costomer } = request;

    return response.json(costomer);
})

app.get('/account/name', verifyIfExistsCpfAccount, (request, response) => {
    const { name } = request.query;

    const nameAccount = costomers.filter((vendedor) => vendedor.name === name);

    return response.json(nameAccount);
})

app.put('/account', verifyIfExistsCpfAccount, (request, response) => {
    const { name } = request.body;
    const { costomer } = request;

    costomer.name = name;
    return response.status(201).json(costomer);
})

app.delete('/account', verifyIfExistsCpfAccount, (request, response) => {
    const { costomer } = request;

    //splice
    costomers.splice(costomer, 1);
    return response.status(204);
})


//middleare
function verifyIfExistsCpfAccount(request, response, next) {
    const { cpf } = request.headers;

    const costomer = costomers.find((costomer) => costomer.cpf === cpf);

    if (!costomer) {
        return response.status(404).json({ error: "costomer not found" })
    }

    request.costomer = costomer;

    return next();
}

function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if(operation.type === "credit") {
            return acc + operation.amount;
        } else {
            return acc - operation.amount;
        }
    }, 0)
    return balance;
}

app.get('/statement', verifyIfExistsCpfAccount, (request, response) => {
    const { costomer } = request;
    return response.json(costomer.statement);
})

app.get('/statement/date', verifyIfExistsCpfAccount, (request, response) => {
    const { costomer } = request;

    const { date } = request.query;

    const dateFormatted = new Date(date + " 00:00");
    const statement = costomer.statement.filter((statement) => statement.created_at.toDateString() === dateFormatted.toDateString())

    return response.json(statement);
})

app.post('/deposit', verifyIfExistsCpfAccount, (request, response) => {
    const { amount, description } = request.body;

    const { costomer } = request;

    const statementOperations = {
        amount,
        description,
        created_at: new Date(),
        type: 'credit'
    }

    costomer.statement.push(statementOperations);

    return response.status(201).json(costomer.statement);
})

app.post('/withdraw', verifyIfExistsCpfAccount, (request, response) => {
    const { amount, description } = request.body;

    const { costomer } = request;

    const statementOperations = {
        amount,
        description,
        created_at: new Date(),
        type: 'credit'
    }

    costomer.statement.push(statementOperations);

    return response.status(201).send();
})


app.listen(port, () => console.log('listening on port ' + port))