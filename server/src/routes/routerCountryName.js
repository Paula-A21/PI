const { getContryByName } = require("../handlers/getCountryByName");
const { Router } = require("express");
const routerCountryName = Router();

//no sé que devería poner acá, ashuda
routerCountryName.get('/', getContryByName);

module.exports = {
    routerCountryName
}
