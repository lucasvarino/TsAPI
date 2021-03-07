import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('bob', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => console.log('Conecção ao banco de dados realizada com sucesso'))
.catch(err => console.log('Houve um erro ao se conectar ao banco de dados: ', err));

export default sequelize;