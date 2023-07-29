const { getCountries } = require("../controllers/countries")
const { pagination } = require("../controllers/pagination")


const paginationHandler = async (req, res) => {
    try {
        const { page } = req.query;

        const countries = await getCountries();
        const response = await pagination(page, countries)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).send({error: error.message});
    }
}

module.exports ={ 
    paginationHandler
};