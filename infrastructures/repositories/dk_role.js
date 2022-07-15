const Sequelize = require('sequelize');
const dbConnection = require('../../config/db').Sequelize;

const DkRole = dbConnection.define('dk_role', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'dk_role'
});

module.exports = DkRole;