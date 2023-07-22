const { getCountries } = require('../controllers/countries');
const { allCountries, countryById, countryByName } = require('../controllers/countriesController');


const getAllCountries = async (req, res) => {
    try {
        const countries = await getCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCountryById = async (req, res) => {
    const { id } = req.params;

    try {
        const countryId = await countryById(id);
        res.status(200).json(countryId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCountryByName = async (req, res) => {
    const { name } = req.query;

    try {
        const countryName = await countryByName(name);
        res.status(200).json(countryName);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByName
};