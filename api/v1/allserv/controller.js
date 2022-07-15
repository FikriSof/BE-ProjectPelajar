const errMsg = require('../../../error')
const rsMsg = require('../../../response')
const fs = require("fs")
var path = require('path')
const moment = require('moment')
const role = require('../../../business/domains/role')
const user = require('../../../business/domains/user')
const utils = require('../../../utils')
const { v4: uuidv4 } = require('uuid')

exports.testing = async function (req, res) {
  try {
    res.status(200).json(rsMsg("oke"))
  } catch (error) {
    await utils.trycatchmainerr(res,error)
  }
}

exports.createrole = async function (req, res) {
  try {
    const reqData = {
      name: req.body.name
    }
    if (utils.checkBody(reqData.name)) {
      throw '03001'
    }

    await role.createMainRole(reqData)
    res.status(200).json(rsMsg({}))
  } catch (error) {
    await utils.trycatchmainerr(res,error)
  }
}

exports.createuser = async function (req, res) {
  try {
    const reqData = {
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      tgl_lahir: req.body.tgl_lahir,
      asal_sekolah: req.body.asal_sekolah,
      nkp: req.body.nkp
    }

    console.log(utils.checkBody(reqData.name));
    
    if (utils.checkBody(reqData.username) == true) {
      throw 'createuser'
    }

    if (utils.checkBody(reqData.email) == true) {
      throw 'createuser'
    }

    if (utils.checkBody(reqData.password) == true) {
      throw 'createuser'
    }

    if (utils.checkBody(reqData.tgl_lahir) == true) {
      throw 'createuser'
    }

    if (utils.checkBody(reqData.asal_sekolah) == true) {
      throw 'createuser'
    }

    if (utils.checkBody(reqData.nkp) == true) {
      throw 'createuser'
    }

    res.status(200).json(rsMsg({}))
  } catch (error) {
    await utils.trycatchmainerr(res,error)
  }
}

exports.loginuser = async function (req, res) {
  try {
    const reqData = {
      email: req.body.email,
      password: req.body.password
    }

    console.log(utils.checkBody(reqData.name));
    
    if (utils.checkBody(reqData.email) == true) {
      throw 'loginuser_01'
    }

    if (utils.checkBody(reqData.password) == true) {
      throw 'loginuser_02'
    }

    // const dbresult = await user.checkMainAccountLoginEmail(reqData)
    // console.log("dbresult",dbresult[0].dk_account);
    // const passwordcheck = {
    //   email: reqData.email,
    //   passwordDb: dbresult.password,
    //   passworPlain: reqData.password
    // }
    // console.log("passwordcheck",passwordcheck);
    // await user.checkMainAccountLoginEmail(passwordcheck)
    res.status(200).json(rsMsg({token: uuidv4()}))
  } catch (error) {
    await utils.trycatchmainerr(res,error)
  }
}