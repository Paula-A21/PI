const { Router } = require('express');
const { getAllCountries, getCountryById, getCountryByName } = require('../handlers/countriesHandlers')
const {paginationHandler} = require('../handlers/paginationHandler');

const countriesRouter = Router();

countriesRouter.get('/', getAllCountries);
countriesRouter.get('/', paginationHandler);
countriesRouter.get('/name', getCountryByName);
countriesRouter.get('/:id', getCountryById);

module.exports = countriesRouter;