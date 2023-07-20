const { getContryId } = require("../handlers/getCountryById");

const routerCountryId = require('express').Router();

routerCountryId.get('/', getContryId);

module.exports = {
    routerCountryId
}
