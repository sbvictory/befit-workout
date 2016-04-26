/**
 * Created by JLou on 4/17/2016.
 */

const DBConnections = require('./DBConnections');

function getAllFood(req, res, cb) {
    DBConnections.getData('SELECT * FROM cs542_project1.food_tbl', [], cb);
}

function getFoodById(req, res, cb) {
    DBConnections.getData('SELECT * FROM cs542_project1.food_tbl where food_id = ?', [req.query.id], cb);
}

function getFoodRate(req, res, cb) {

    DBConnections.getData('SELECT * FROM cs542_project1.rate_food where food_id = ? AND user_id = ?', [req.query.itemId, req.query.userId], cb);

}

function setFoodRate(req, res, cb) {


    var rate = Number(req.body.rate);
    var userId = Number(req.body.userId);
    var foodId = Number(req.body.itemId) + 1;

    DBConnections.updateData('UPDATE rate_food SET rate = ? WHERE user_id = ? AND food_id = ?', [rate, userId, foodId], cb);

}

function insertFoodRate(req, res, cb) {

    var rate = Number(req.body.rate);
    var userId = Number(req.body.userId);
    var foodId = Number(req.body.itemId) + 1;

    DBConnections.insertData('INSERT INTO cs542_project1.rate_food (rate, user_id, food_id) values ("' + rate + '",' + userId + ',' + foodId + ')', cb);

}

function getFoodComments(req, res, cb) {

    DBConnections.getData('SELECT * FROM cs542_project1.food_comments fc, cs542_project1.user_tbl u where food_id = ? AND fc.user_id= u.user_id;', [req.query.itemId], cb);

}

function insertFoodComments(req, res, cb) {

    var comments = String(req.body.comments);
    var userId = Number(req.body.userId);
    var foodId = Number(req.body.itemId);

    // DBConnections.insertData('INSERT INTO cs542_project1.food_comments (comments, user_id, food_id) values ("' + comments + '",' + userId + ',' + foodId + ')', cb);
    DBConnections.insertData('INSERT INTO cs542_project1.food_comments (comments, user_id, food_id) values ( ?, ?, ?)', [comments, userId, foodId], cb);

}

//
exports.getAllFood = getAllFood;
exports.getFoodById = getFoodById;

// rate
exports.getFoodRate = getFoodRate;
exports.setFoodRate = setFoodRate;
exports.insertFoodRate = insertFoodRate;

//comments
exports.getFoodComments = getFoodComments;
exports.insertFoodComments = insertFoodComments;