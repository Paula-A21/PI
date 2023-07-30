const { Router } = require('express');
const { getAllCountries, getCountryById, getCountryByName } = require('../handlers/countriesHandlers')
// const {paginationOrderAndFilter} = require('../handlers/paginationOrder&Filter');

const countriesRouter = Router();

countriesRouter.get('/', getAllCountries);
countriesRouter.get('/name', getCountryByName);
countriesRouter.get('/:id', getCountryById);
// countriesRouter.get('/page', paginationOrderAndFilter);
// countriesRouter.get('/continent', paginationOrderAndFilter);
// countriesRouter.get('/order', paginationOrderAndFilter);
// countriesRouter.get('/activity', paginationOrderAndFilter);

module.exports = countriesRouter;