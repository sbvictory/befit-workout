/**
 * Created by JLou on 3/26/2016.
 */
const DBConnections = require('./DBConnections');

function getAuthUser(req, res, cb) {
    // DBConnections.getData('SELECT * FROM cs542_project1.user_tbl where user_name = "' + req.body.username + '" AND user_pwd = "' + req.body.password + '"', cb);
    DBConnections.getData('SELECT * FROM cs542_project1.user_tbl where user_name = ? AND user_pwd = ?', [req.body.username, req.body.password], cb);
}

// authentication
exports.getAuthUser = getAuthUser;


