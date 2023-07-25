const { filterActivity } = require("../controllers/filterActivity");

const handlerActivifyFilter = async (req, res) => {
    const {filter} = req.query;
    console.log("recibiendo query" + filter);
    try {
        console.log("en el try");
        const activitiesFilter = await filterActivity(filter);
        res.status(200).json(activitiesFilter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    handlerActivifyFilter
}