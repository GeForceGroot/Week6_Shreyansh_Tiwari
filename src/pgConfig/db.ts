import { Sequelize } from 'sequelize'
import credentials  from '../common/credentails';
const db = new Sequelize(credentials.postgres.DATABASE, 'postgres', credentials.postgres.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5484
});

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

db.sync()

export default db