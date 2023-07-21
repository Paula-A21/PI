const { getAllCountries } = require('../handlers/getAllCountries');
const routerCountry = require('express').Router();

routerCountry.get('/', getAllCountries);

module.exports = {
    routerCountry
}