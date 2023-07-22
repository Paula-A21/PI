const { Router } = require("express");
const router = Router();

// const { routerCountry } = require("./routerCountry");
// const { routerCountryId } = require("./routerCountryId");
// const { routerCountryName } = require("./routerCountryName");
const { routerPostActivity } = require("./routerActivities");

const countriesRouter = require("./countriesRouter"); //creo una constante con el string countries para usarlo en las rutas

router.use("/countries", countriesRouter); //le paso cada una de las funciones, 
//y de manera predeterminada se les envia a cada uno las req y res, 
//tengo una ruta para cada handler específicamente

// router.use("/countries", routerCountryId);

// router.use("/countries", routerCountryName);

router.use("/activities", routerPostActivity);


module.exports = router;