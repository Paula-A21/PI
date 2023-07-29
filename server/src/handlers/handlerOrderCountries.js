const { getCountries } = require("../controllers/countries");
const { setOrder } = require("../controllers/orderCountries");


const handlerOrderCountries = async (req, res) => {

    const { order } = req.query;

    try {
        const countries = await getCountries();
        const orderedCountries = await setOrder(order, countries); //se lo paso a countries para que se relacionen
        res.status(200).json(orderedCountries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    handlerOrderCountries
}