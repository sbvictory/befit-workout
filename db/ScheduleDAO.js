/**
 * Created by JLou on 4/3/2016.
 */

const DBConnections = require('./DBConnections');

function getUserSchedule(req, res, cb) {
    // DBConnections.getData('SELECT * FROM schedule_tbl WHERE user_id = ' + req.query.userId, cb);
    DBConnections.getData('SELECT * FROM schedule_tbl WHERE user_id = ?', [req.query.userId], cb);
}

function getExerciseByScheduleId(req, res, cb) {
    DBConnections.getData('SELECT * FROM cs542_project1.excerises_schedule es, activity_tbl a WHERE es.activity_id = a.activity_id AND es.schedule_id = ?', [req.query.scheduleId], cb);
}

function getFoodBySchedule(req, res, cb) {
    DBConnections.getData('SELECT recipies_time, food_type, food_calories, food_flavor, food_name FROM cs542_project1.recipies_schedule rs, cs542_project1.recipies_tbl r, cs542_project1.food_tbl f where rs.recipies_id = r.recipies_id AND r.food_id=f.food_id AND rs.schedule_id = ?', [req.query.scheduleId], cb);
}

exports.getUserSchedule = getUserSchedule;
exports.getExerciseByScheduleId = getExerciseByScheduleId;
exports.getFoodBySchedule = getFoodBySchedule;
