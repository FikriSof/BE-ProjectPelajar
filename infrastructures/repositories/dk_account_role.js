const Sequelize = require('sequelize');
const dbConnection = require('../../config/db').Sequelize;

const DkAccountRole = dbConnection.define('dk_account_role', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  account_id: Sequelize.STRING,
  role_id: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'dk_account_role'
});

module.exports = DkAccountRole;