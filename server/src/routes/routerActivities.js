const { getActivities } = require("../handlers/getActivities");
const { createActivities } = require("../handlers/postActivities");

const routerActivities = require('express').Router();

routerActivities.post('/form', createActivities);
routerActivities.get('/', getActivities);

module.exports = {
    routerActivities
}
