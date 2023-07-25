const { filterActivity } = require("../controllers/filterActivity");

const handlerActivifyFilter = async (req, res) => {

    const {filter} = req.params;

    try {
        const activitiesFilter = await filterActivity(filter);
        res.status(200).json(activitiesFilter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    handlerActivifyFilter
}