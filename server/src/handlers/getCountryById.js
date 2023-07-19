const {getContryById} = require("../controllers/getCountryByIdController");

const getContryId = async (req, res) => {
    const {id} = req.params;

    try {
        const countryID = await getContryById(id);
        res.status(200).json(countryID);

    } catch (error) {
        res.status(404).json({error: "ID country not found"});
    }
}