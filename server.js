var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var dao = require('./db/DAO.js');
var foodDao = require('./db/FoodDAO.js');
var scheduleDao = require('./db/ScheduleDAO');
var leaderBoardDao = require('./db/LeaderBoardDAO');

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/auth', function (req, res) {

    function cb(user) {
        res.json({authUser: user});
    }

    dao.getAuthUser(req, res, cb);
});

// get all the food
app.get('/allFood', function (req, res) {

    function cb(result) {
        res.json({allItem: result});
    }

    foodDao.getAllFood(req, res, cb);
});

// get a specific food
app.get('/itemFood', function (req, res) {

    function cb(result) {
        res.json({foodItem: result});
    }

    foodDao.getFoodById(req, res, cb);
});

// comments and rating
app.get('/food/rating', function (req, res) {

    function cb(result) {
        res.json({rateRes: result});
    }

    foodDao.getFoodRate(req, res, cb);
});

app.post('/rating', function (req, res) {

    if (req.body.category === 'food') {

        function cb(affectedRows) {

            if (affectedRows) {
                res.json({affectedRows: affectedRows});
            } else {

                function cb(affectedRows) {

                    res.json({affectedRows: affectedRows});
                }

                foodDao.insertFoodRate(req, res, cb);
            }
        }


        foodDao.setFoodRate(req, res, cb);
    }
});

app.get('/food/comments', function (req, res) {

    function cb(result) {
        res.json({commentsRes: result});
    }

    foodDao.getFoodComments(req, res, cb);
});

app.post('/comments', function (req, res) {

    if (req.body.category === 'food') {

        function cb(result) {
            res.json({commentsRes: result});
        }

        foodDao.insertFoodComments(req, res, cb);
    }
});


/**
 * Schedule
 */
app.get('/schedule', function (req, res) {

    function cb(result) {

        res.json({scheduleInfo: result});
    }

    scheduleDao.getUserSchedule(req, res, cb);
});

app.get('/schedule/exercise', function (req, res) {

    function cb(result) {
        res.json({exerciseInfo: result});
    }

    scheduleDao.getExerciseByScheduleId(req, res, cb);
});

app.get('/schedule/food', function (req, res) {

    function cb(result) {
        res.json({foodInfo: result});
    }

    scheduleDao.getFoodBySchedule(req, res, cb);
});

/**
 * Leaderboard
 */
app.get('/leaderboard/topfood', function (req, res) {

    function cb(result) {
        res.json({topFood: result});
    }

    leaderBoardDao.getTopFoodLastWeekByUser(req, res, cb);
});

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
});

module.exports = app;
