
//로그인이 되어 있는지 확인하는 미들웨어
exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json('401 error');
    }
};