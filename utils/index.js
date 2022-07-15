const errMsg = require('../error')
const bcrypt = require('bcrypt')

exports.checkBody = async function (value) {
  if (value == null || value === "" || value == undefined) {
    return true
  } else {
    return false
  }
}

exports.trycatchmainerr = async function (res,error) {
  if (typeof error === 'string') {
    res.status(400).json(errMsg(error))
  } else { 
    res.status(500).json(errMsg('03000'))
  }
}

exports.trycatchinsidenerr = function (base,error) {
  if (typeof error === 'string') {
    return error
  } else {
    return base
  }
}

exports.passwordHash = async function (params) {
  const saltRounds = 10;
  const myPlaintextPassword = params;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  return hash
}

exports.passwordHashCompare = async function (params) {
  const myPlaintextPassword = params.passwordPlain;
  const result = bcrypt.compareSync(myPlaintextPassword, params.passwordDb);
  return result
}