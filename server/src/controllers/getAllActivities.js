const {Activity} = require("../db.js");

const getAllActivities = async () => {
    
    const activities = await Activity.findAll();
    
    if(activities.length === 0) throw Error ('There are no activities');
    
    return activities;    
};                                             


module.exports = {
    getAllActivities
}
