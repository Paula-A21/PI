// const {CountriesById} = require("../controllers/CountriesById");

// const getCountriesById = async (req, res) => {
//     try {
//         const { id } = req.params;
    
//         const countries = await CountriesById(id);
//         res.status(200).json(countries);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// module.exports = {
//     getCountriesById
// }