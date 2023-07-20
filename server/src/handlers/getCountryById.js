const {getContryById} = require("../controllers/getCountryByIdController");

const getContryId = async (req, res) => {
    const {idPais} = req.params;

    try {
        const countryID = await getContryById(idPais);
        res.status(200).json(countryID);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    getContryId
}