const { getContryByName } = require("../controllers/countryByName");

const getContryName = async (req, res) => {
    const {name} = req.params;

    try {
        const countryName = await getContryByName(name);
        res.status(200).json(countryName);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    getContryName
}