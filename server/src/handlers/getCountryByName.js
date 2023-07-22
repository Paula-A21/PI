const { contryByName } = require("../controllers/countryByName");

const getContryByName = async (req, res) => {
    
    try {
        const {name} = req.query;
        console.log(name);
        const countryName = await contryByName(name);
        res.status(200).json(countryName);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    getContryByName
}