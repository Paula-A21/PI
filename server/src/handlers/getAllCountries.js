const { getCountries } = require("../controllers/countries");

const getAllCountries = async (req, res) => {
  try {
    const countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllCountries
};
// const getAllCountries = (req, res) => {
//   getCountries()
//     .then((countries) => {
//       res.status(200).json(countries);
//     })
//     .catch((error) => {
//       res.status(400).json({ error: error.message });
//     });
// };