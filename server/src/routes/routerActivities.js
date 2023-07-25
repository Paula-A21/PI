const { getActivities } = require("../handlers/getActivities");
const { handlerActivifyFilter } = require("../handlers/handlerFilterActivity");
const { createActivities } = require("../handlers/postActivities");

const routerActivities = require('express').Router();

routerActivities.post('/', createActivities);
routerActivities.get('/', getActivities);
routerActivities.get('/filter_activity', handlerActivifyFilter);

module.exports = {
    routerActivities
}
