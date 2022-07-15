const DkAccount = require('../../../infrastructures/repositories/dk_account')
const DkAccountRole = require('../../../infrastructures/repositories/dk_account_role')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const Op = require('../../../infrastructures/repositories/operator')

const {
  Sequelize
} = require('../../../config/db')


exports.createAccount = async function (value) {
  const transaction = await Sequelize.transaction()
  const toAccountRole = {
    id: uuidv4(),
    account_id: value.id,
    role_id: value.role_id,
    password: value.password,
    created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
  }
  let result
  try {
    await DkAccount.create(value, { transaction })
    await DkAccountRole.create(toAccountRole, { transaction })
    await transaction.commit()
  } catch (e) {
    console.log('error createRole...', e)
    // logger.error('error createRole...', e)
    await transaction.rollback()
    // throw '03003'
  }
  return result;
}

exports.getAccountByEmailorNumber = async function (value) {
  let result
  const condition = {
    where: {
      $or: [
        {
          email: value.email
        },
        {
          mobile_number: value.mobile_number
        }
      ]
    }
  }
  try {
    result = await DkAccount.findAll(condition)
  } catch (error) {
    throw error
  }
  return result;
}

exports.getAccountByEmail = async function (value) {
  let result
  const condition = {
    where: {
      email: value.email
    }
  }
  try {
    result = await DkAccount.findAll(condition)
  } catch (error) {
    throw error
  }
  return result;
}