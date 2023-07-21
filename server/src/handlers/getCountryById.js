const {getContryById} = require("../controllers/countryById");

const getContryId = async (req, res) => {
    const {id} = req.params;

    try {
        const countryID = await getContryById(id);
        res.status(200).json(countryID);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    getContryId
}