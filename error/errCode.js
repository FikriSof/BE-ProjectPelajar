const errCode = {
    '02000': 'auth failed',
    '03000': 'internal server error',
    '03001': 'empty param name',
    '03002': 'error createMainRole',
    '03003': 'error createMainRole',
    'createuser': 'empty param bad request',
    'getRoleWhereId_01': 'error getRoleWhereId',
    'createMainAccount_01': 'role_id not found',
    'createMainAccount_02': 'error creating account',
    'getAccountByEmailorNumber_01': 'error finding account or mobile_number',
    'checkMainAccount_01': 'email or mobile_number already registered',
    'checkMainAccount_02': 'error checkMainAccount_02',
    'checkMainAccountLogin_01': 'account not found',
    'checkMainAccountLogin_02': 'error checkMainAccountLogin_02',
    'checkMainAccountLoginPassword_01': 'password not match',
    'checkMainAccountLoginPassword_02': 'error checkMainAccountLoginPassword_02'
}

module.exports = errCode;  