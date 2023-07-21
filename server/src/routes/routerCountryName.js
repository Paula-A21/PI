const { getContryName } = require("../handlers/getCountryByName");
const routerCountryName = require('express').Router();

routerCountryName.get('/', getContryName);

module.exports = {
    routerCountryName
}
