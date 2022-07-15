const express = require('express')
const router = express.Router()
const controller = require('./controller')
const {
  authcheck
} = require('../../../middlewares')

/**
 * @swagger
 * /api/v1/allserv/testing:
 *    get:
 *      description:
 *      responses:
 *        '200':
 *          description: success
 *        '400':
 *          description: unsuccessful
 *        '500':
 *          description: internal server error
 */
router.get('/testing', controller.testing)

/**
 * @swagger
 * /api/v1/allserv/createrole:
 *    post:
 *      description: 
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: body
 *          description: All parameters are required.
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *      responses:
 *        '200':
 *          description: success
 *        '400':
 *          description: unsuccessful
 *        '500':
 *          description: internal server error
 */
router.post('/createrole', controller.createrole)

/**
 * @swagger
 * /api/v1/allserv/createuser:
 *    post:
 *      description: 
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: body
 *          description: All parameters are required.
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              tgl_lahir:
 *                type: string
 *              asal_sekolah:
 *                type: string
 *              nkp:
 *                type: string
 *      responses:
 *        '200':
 *          description: success
 *        '400':
 *          description: unsuccessful
 *        '500':
 *          description: internal server error
 */
router.post('/createuser', controller.createuser)

/**
 * @swagger
 * /api/v1/allserv/loginuser:
 *    post:
 *      description: 
 *      produces:
 *          - application/json
 *      parameters:
 *        - in: body
 *          name: body
 *          description: All parameters are required.
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *      responses:
 *        '200':
 *          description: success
 *        '400':
 *          description: unsuccessful
 *        '500':
 *          description: internal server error
 */
router.post('/loginuser', controller.loginuser)

module.exports = router