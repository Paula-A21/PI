const { getAllCountries } = require('../handlers/getCountries');

const routerCountry = require('express').Router();

routerCountry.get('/', getAllCountries);

module.exports = {
    routerCountry
}