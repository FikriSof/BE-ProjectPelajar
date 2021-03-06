'use strict';
const Sequelize = require('sequelize');
const settings = require('../settings').mysql;
const logger = require('./loggerpino');
const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const sequelize = new Sequelize(settings.dbname, settings.username, settings.password, {
  operatorsAliases,
  host: settings.hostname,
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 3000
  },
  pool: {
    max: 3000,
    min: 0,
    acquire: 30000,
    idle: 30000,
    idleTimeoutMillis: 3000,
    evict: 30000
  },
  logging: sql => logger.info(sql),
  timezone: '+07:00'
});

sequelize.authenticate()
  .then(() => {
    logger.debug('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error({err: err}, 'Unable to connect to the database');
  });

module.exports = {
  Sequelize: sequelize
}