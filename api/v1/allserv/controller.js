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

exports.getevent = async function (req, res) {
  try {

    const newdata = []

    for (let index = 0; index < 30; index++) {
      newdata.push({
        title: "Update Banjir Jakarta Per 18.00 WIB: Jumlah Lokasi Naik Lagi Jadi 25 RT Baca artikel detiknews, \"Update Banjir Jakarta Per 18.00 WIB: Jumlah Lokasi Naik Lagi Jadi 25 RT\" selengkapnya https://news.detik.com/berita/d-6182785/update-banjir-jakarta-per-1800-wib-jumlah-lokasi-naik-lagi-jadi-25-rt. Download Apps Detikcom Sekarang https://apps.detik.com/detik/",
        image: "https://akcdn.detik.net.id/community/media/visual/2022/01/20/tegal-alur-jakbar-masih-terendam-banjir-3_169.jpeg?w=700&q=90",
        desct: "TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDINGTEST WORDINGTEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDINGTEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING TEST WORDING"
      })
    }
    res.status(200).json(rsMsg(newdata))
  } catch (error) {
    await utils.trycatchmainerr(res,error)
  }
}