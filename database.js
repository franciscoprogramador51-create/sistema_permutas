const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  logging: false
});

const Permuta = sequelize.define('Permuta', {
  solicitanteNome: { type: DataTypes.STRING },
  solicitanteMatricula: { type: DataTypes.STRING },
  substitutoNome: { type: DataTypes.STRING },
  substitutoMatricula: { type: DataTypes.STRING },
  dataServico: { type: DataTypes.DATEONLY },
  tipoPermuta: { type: DataTypes.STRING }, // Campo de 12h ou 24h
  status: { type: DataTypes.STRING, defaultValue: 'PENDENTE' }
});

sequelize.sync({ alter: true }); // O 'alter' força o banco a criar as colunas novas
module.exports = { Permuta };