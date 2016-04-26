/**
 * Created by JLou on 4/9/2016.
 */

const DBConnections = require('./DBConnections');

function getTopFoodLastWeekByUser(req, res, cb) {

    DBConnections.getData("select recipies_tbl.food_id, food_name, count(recipies_tbl.food_id) from recipies_tbl left join food_tbl on recipies_tbl.food_id = food_tbl.food_id where recipies_id in " +
        "(select recipies_id from recipies_schedule where schedule_id in (SELECT schedule_id FROM schedule_tbl " +
        "WHERE schedule_date >= curdate() - INTERVAL DAYOFWEEK(curdate())+30 DAY " +
        "AND schedule_date < curdate() - INTERVAL DAYOFWEEK(curdate())-1 DAY)) group by food_id order by count(food_tbl.food_id) desc limit 3;", [], cb);
}

exports.getTopFoodLastWeekByUser = getTopFoodLastWeekByUser;
