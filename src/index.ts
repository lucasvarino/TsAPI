import express from 'express';
import routes from './routes';
import './database/connection';
import './models/UserModel';


const app = express();
app.use(express.json());
app.use(routes);

app.listen(3131, () => {
    console.log("O servidor está rodando na porta 3131");
})