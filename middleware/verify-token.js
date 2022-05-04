const { verifyAccessToken } = require('../helpers/jwt');

module.exports = (req, res, next) => {

    verifyAccessToken(req, res, next);

}