const { createActivity } = require("../controllers/createActivities");
const express = require("express");
const server = express();
server.use(express.json()); //hay una forma de llamar a server ya que este ya tiene el express.json()?

const createActivities = async (req, res) => {
    try{
        const {name, difficulty, duration, season} = req.body;
        const newActivities = await createActivity ({
            name, 
            difficulty, 
            duration, 
            season
        })

        res.status(200).json(newActivities);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createActivities
}