const { Sequelize, DataTypes } = require('sequelize');

// Conexão exclusiva para PostgreSQL (Nuvem)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

const Permuta = sequelize.define('Permuta', {
  solicitanteNome: { type: DataTypes.STRING },
  solicitanteMatricula: { type: DataTypes.STRING },
  substitutoNome: { type: DataTypes.STRING },
  substitutoMatricula: { type: DataTypes.STRING },
  dataServico: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'PENDENTE' }
});

sequelize.sync();
module.exports = { Permuta };