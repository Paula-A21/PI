const { getActivity } = require("../controllers/activities");
const { createActivities } = require("../handlers/postActivities");
const routerPostActivity = require('express').Router();

routerPostActivity.post('/', createActivities);
routerPostActivity.get('/', getActivity);

module.exports = {
    routerPostActivity
}
