const { getContryByName } = require("../handlers/getCountryByName")
const { Router } = require("express");
const routerCountryName = Router();


routerCountryName.get("/name", getContryByName);

module.exports = {
    routerCountryName
}
