const role = require('../../usecases/role')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment');

exports.createMainRole = async function (value) {
  let result
  try {
    let insert = {
      id: uuidv4(),
      name: value.name,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    result = await role.createRole(insert);
  } catch (error) {
    console.log('error createMainRole...', error)
    logger.error('error createMainRole...', error)
    throw '03002'
  }
  return result
}