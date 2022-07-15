const DkRole = require('../../../infrastructures/repositories/dk_role')
const Op = require('../../../infrastructures/repositories/operator')

exports.createRole = async function (value) {
  let result
  try {
    result = await DkRole.create(value)
  } catch (e) {
    console.log('error createRole...', error)
    logger.error('error createRole...', error)
    throw '03003'
  }
  return result;
}

exports.getRoleWhereId = async function (value) {
  let result
  try {
    result = await DkRole.findAll({
      where: {
        id: value
      }
  });
  } catch (e) {
    console.log('error getRoleWhereId...', error)
    logger.error('error getRoleWhereId...', error)
    throw 'getRoleWhereId_01'
  }
  return result;
}