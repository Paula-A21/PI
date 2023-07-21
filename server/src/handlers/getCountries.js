const { getCountries } = require("../controllers/countries");

const getAllCountries = (req, res) => {
  getCountries()
    .then((countries) => {
      res.status(200).json(countries);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};


module.exports = {
    getAllCountries
};