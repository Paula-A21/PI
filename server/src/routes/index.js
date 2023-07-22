const { Router } = require("express");
const router = Router();

const { routerCountry } = require("./routerCountry");
const { routerCountryId } = require("./routerCountryId");
const { routerCountryName } = require("./routerCountryName");
const { routerPostActivity } = require("./routerActivities");

const countriesRoutes = "/countries"; //creo una constante con el string countries para usarlo en las rutas

router.use(countriesRoutes, routerCountry); //le paso cada una de las funciones, 
//y de manera predeterminada se les envia a cada uno las req y res, 
//tengo una ruta para cada handler específicamente

router.use(countriesRoutes, routerCountryId);

router.use(countriesRoutes, routerCountryName);

router.use("/activities", routerPostActivity);


module.exports = router;