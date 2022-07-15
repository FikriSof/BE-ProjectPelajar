const user = require('../../usecases/user')
const role = require('../../usecases/role')
const { v4: uuidv4 } = require('uuid')
const moment = require('moment')
const utils = require('../../../utils')

exports.createMainAccount = async function (value) {
  let result
  let insert = {
    id: uuidv4(),
    name: value.name,
    email: value.email,
    mobile_number: value.mobile_number,
    role_id: value.role_id,
    password: value.password,
    created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
  }

  insert.password = await utils.passwordHash(insert.password)
  console.log("insert.password",insert.password);

  try {
    result = await role.getRoleWhereId(insert.role_id)
    console.log("resultresultresultresultresult",result.length);
    if (result.length == 0) {
      throw 'createMainAccount_01'
    } 
    await user.createAccount(insert)
  } catch (error) {
    throw utils.trycatchinsidenerr('createMainAccount_02',error)
  }
  return result
}

exports.checkMainAccount = async function (value) {
  let result
  let insert = {
    email: value.email,
    mobile_number: value.mobile_number
  }

  try {
    result = await user.getAccountByEmailorNumber(insert)
    console.log("resultresultresultresultresult",result.length);
    if (result.length != 0) {
      throw 'checkMainAccount_01'
    }
  } catch (error) {
    throw utils.trycatchinsidenerr('checkMainAccount_02',error)
  }
}

exports.checkMainAccountLoginEmail = async function (value) {
  let result
  let insert = {
    email: value.email
  }

  try {
    result = await user.getAccountByEmail(insert)
    console.log("resultresultresultresultresult",result.length);
    if (result.length == 0) {
      throw 'checkMainAccountLogin_01'
    }
    return result
  } catch (error) {
    throw utils.trycatchinsidenerr('checkMainAccountLogin_02',error)
  }
}

exports.checkMainAccountLoginPassword = async function (value) {
  let result
  let insert = {
    email: value.email,
    passwordDb: value.passwordDb,
    passwordPlain: value.passwordPlain
  }

  try {
    result = await utils.passwordHashCompare(insert)
    console.log("resultresultresultresultresult",result);
    if (result == false) {
      throw 'checkMainAccountLoginPassword_01'
    }
  } catch (error) {
    throw utils.trycatchinsidenerr('checkMainAccountLoginPassword_02',error)
  }
}