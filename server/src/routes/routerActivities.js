const { createActivities } = require("../handlers/postActivities");
const routerPostActivity = require('express').Router();

routerPostActivity.post('/', createActivities);

module.exports = {
    routerPostActivity
}
