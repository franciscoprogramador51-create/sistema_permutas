const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './permutas.sqlite' });

const Permuta = sequelize.define('Permuta', {
  solicitanteNome: { type: DataTypes.STRING },
  solicitanteMatricula: { type: DataTypes.STRING },
  substitutoNome: { type: DataTypes.STRING },
  substitutoMatricula: { type: DataTypes.STRING },
  dataServico: { type: DataTypes.DATEONLY, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Pendente' }
});

sequelize.sync();
module.exports = { Permuta };