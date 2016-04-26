const mysql = require('mysql');
const config = require('../config.json');

const pool = mysql.createPool({
    host: config.host,
    user: config.username,
    password: config.password,
    database: 'cs542_project1',
    port: config.port
});


module.exports = {

    // search
    getData: function (preparedSql, arr, cb) {

        pool.getConnection(function (err, conn) {

            if (err) console.log("POOL " + err);

            conn.query(preparedSql, arr, function (err, rows) {

                if (err) console.log(err);

                cb(rows);

                conn.release();
            });
        });
    },

    updateData: function (preparedSql, arr, cb) {

        pool.getConnection(function (err, conn) {
            if (err) console.log("POOL " + err);
            conn.query(preparedSql, arr, function (err, result) {
                if (err) throw err;
                cb(result.changedRows);
                conn.release();
            });
        });

    },

    insertData: function (preparedSql, arr, cb) {

        pool.getConnection(function (err, conn) {
            if (err) console.log("POOL" + err);
            conn.query(preparedSql, arr, function (err, result) {
                if (err) throw err;
                cb(result);
                conn.release();
            });
        });
    }
};
