const { getAllActivities } = require("./getAllActivities")

const filterActivity = async (filter) => {
    try {
        const ACTIVITIES = await getAllActivities();
        
        if(filter > 5 || filter < 1) throw Error("The difficulty range can only be from 1 to 5");

        const FILTER_ACTIVITIES = ACTIVITIES.includes(activity => activity.difficulty === filter);
        //filtro las actividades segun su nivel de dificultad
        
        if(!FILTER_ACTIVITIES) throw Error ("There are not activities with that difficulty range");

        return FILTER_ACTIVITIES;

    } catch (error) {
        return error;
    }
};

module.exports = {
    filterActivity
};