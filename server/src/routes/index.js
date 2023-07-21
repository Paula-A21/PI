const { Router } = require("express");
const router = Router();

const { routerCountry } = require("./routerCountry");
const { routerCountryId } = require("./routerCountryId");
const { routerCountryName } = require("./routerCountryName");
const { routerPostActivity } = require("./routerActivities");



router.use("/countries", routerCountry); //le paso cada una de las funciones, 
//y de manera predeterminada se les envia a cada uno las req y res, 
//tengo una ruta para cada handler específicamente

router.use("/countries/:idPais", routerCountryId);

router.use("/countries/name?=", routerCountryName);

router.use("/activities", routerPostActivity);

// router.use("/activities", getActivities);

module.exports = router;