const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgresql://banco_permutas_user:UoCpTltjQTf34zq3tS13gmIyh5Mc97yX@dpg-d7ckh8ho3t8c73d5qftg-a.ohio-postgres.render.com/banco_permutas', {
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
  solicitanteMatricula: { type: DataTypes.STRING }, // Matrícula aqui
  substitutoNome: { type: DataTypes.STRING },
  substitutoMatricula: { type: DataTypes.STRING }, // Matrícula aqui
  dataServico: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'PENDENTE' }
});

sequelize.sync();
module.exports = { Permuta };