# :trollface: react-workout :bowling:
## Objective
Using **React.js** to build a workout web app

## How to use

###Login
![image](https://github.com/sbvictory/befit-workout/blob/master/readmeimages/login.jpg)
###Logout
![image](https://github.com/sbvictory/befit-workout/blob/master/readmeimages/logout.jpg)
###Go to Dashboard
![image](https://github.com/sbvictory/befit-workout/blob/master/readmeimages/dashboard.jpg)
###View food
![image](https://github.com/sbvictory/befit-workout/blob/master/readmeimages/food.jpg)
###View your schedule
![image](https://github.com/sbvictory/befit-workout/blob/master/readmeimages/schedule.jpg)
###View Leader board
![image](https://github.com/sbvictory/befit-workout/blob/master/readmeimages/leaderboard.jpg)



##Run this app on your local machine

1. install [*NODEJS*](https://nodejs.org/en/download/) first, select the version that matches your environment, then go to the directory of the project ($pwd=(/\w\+/)?react-workout)
2. install dependencies

  ```sh
    npm install
  ```
3. import the schema to database( project1.sql ). Please use "import from self-contained file" option. You DO NOT need to create a schema yourself.
4. populate database

  ```sh
    $EDITOR $repo/config.json
  ```

   enter your own db information(for the chema name, when you import the database, it will create a schema for you and the name should be 'cs542_project1')

  ```javascript
      {
        "username": "root",
        "password": "susie19910401",
        "host": "localhost",
        "port": "3306"
      }
  ```

5. start the server to run application

  ```sh
    npm start
  ```

  ( wait until the "Production Express server running at localhost:3000" show in your console)
6. visit app by url: http://localhost:3000 in your web browser.

## Issues
> Let me know if there is any issue, jlou@wpi.edu. Thanks!

OR, by posting issues on [here](https://github.com/sbvictory/react-workout/issues)


## **TODO** list
- [ ] REST architecture
- [ ] Unit testing
- [ ] MongoDB
- [x] ~~gulp~~
