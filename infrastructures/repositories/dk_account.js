const Sequelize = require('sequelize');
const dbConnection = require('../../config/db').Sequelize;

const DkAccount = dbConnection.define('dk_account', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  mobile_number: Sequelize.STRING,
  password: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'dk_account'
});

module.exports = DkAccount;