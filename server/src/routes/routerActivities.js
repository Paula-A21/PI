const { getActivities } = require("../handlers/getActivities");
const { handlerActivifyFilter } = require("../handlers/handlerFilterActivity");
const { createActivities } = require("../handlers/postActivities");

const routerActivities = require('express').Router();

routerActivities.post('/', createActivities);
routerActivities.get('/', getActivities);
routerActivities.get('/activity_filt', handlerActivifyFilter);

module.exports = {
    routerActivities
}
