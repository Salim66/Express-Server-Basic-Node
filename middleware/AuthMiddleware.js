const { nextTick } = require("process");


const authCheck = (req, res, next) => {
    console.log('Auth Check kora hoyaca');
    next()
}


module.exports = {
    authCheck
}