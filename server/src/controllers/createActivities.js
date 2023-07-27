const {Activity} = require("../db.js");

const createActivity = async ({name, difficulty, duration, season, countries}) => {
    if(name && difficulty && season){
        const activity = {
            name, 
            difficulty, 
            duration: duration ? duration : null, // si duration no existe se envia
            season 
        };

        const newActivity = await Activity.create(activity)

        newActivity.addCountries(countries);

        return newActivity;
    }
    else throw new Error ("Cannot create a new activity. Some fields are missing.");
}

module.exports = {
    createActivity
}