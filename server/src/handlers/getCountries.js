const { getCountries } = require("../controllers/countriesControllers");

const getAllCountries = async (req, res) => {
 try {
    const countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({error: "Country not found"});
  }
}

module.exports = {
    getAllCountries
};