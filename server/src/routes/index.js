const { Router } = require("express");
const { routerCountry } = require("./routerCountry");
const router = Router();

router.use("/countries", routerCountry); //le paso cada una de las funciones, 
//y de manera predeterminada se les envia a cada uno las req y res, 
//tengo una ruta para cada handler específicamente

// router.get("/countries/:idPais", getCountryById);

// router.get("/countries/name?=", getCountryByName);

// router.post("/activities", postActivities);

// router.get("/activities", getActivities);

module.exports = router;