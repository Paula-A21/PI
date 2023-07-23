const { getCountries } = require('../controllers/countries');
const {  countryById, countryByName } = require('../controllers/countriesController');


const getAllCountries = async (req, res) => {

    // const activities = req.body; //acá no le paso la actividad en sí, 
    //sino que le paso el array que relaciona las actividades con los países

    try {
        const countries = await getCountries(); //se lo paso a countries para que se relacionen
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