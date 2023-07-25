const { getAllActivities } = require("./getAllActivities")

const filterActivity = async (filter) => {
    try {
        const ACTIVITIES = await getAllActivities();
        console.log(ACTIVITIES);
        if(filter > 5 || filter < 1) throw Error("The difficulty range can only be from 1 to 5");

        console.log("antes del for");
        // const FILTER_ACTIVITIES = ACTIVITIES.includes(activity => activity.difficulty === activity_filt);
        // //filtro las actividades segun su nivel de dificultad
        const FILTER_ACTIVITIES = [];

        // for (let i = 0; i < ACTIVITIES.length; i++) {
        //     console.log("en el for");
        //     if(Math.trunc(filter) === Math.trunc(ACTIVITIES.Activity[i].difficulty)){ //trunqueo la dificultad de las actividades y el que me llega por parametro para que me devuelva todos con un mismo rango
        //         FILTER_ACTIVITIES.push(ACTIVITIES[i]);
        //         console.log(FILTER_ACTIVITIES);
        //     }
        // }

        console.log("despues del for");
        if(FILTER_ACTIVITIES.length === 0) throw Error ("There are not activities with that difficulty range");

        return FILTER_ACTIVITIES;

    } catch (error) {
        return error;
    }
};

module.exports = {
    filterActivity
};