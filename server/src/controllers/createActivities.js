const {Activity} = require("../db.js");

const createActivity = async (name, difficulty, duration, season) => {
    if(name){
        const newActivity = await Activity.create({
            name, 
            difficulty, 
            ...(duration && { duration }), // si duration no existe la propiedad no se agrega al objeto
             //?.slice(0,6), //le hago un slice para que en el time no se me guarden los segundos debería hacer en el front este slice?
            season 
        });
        return newActivity;
    }
    else throw new Error ("Cannot create a new activity. Some fields are missing.");
}

module.exports = {
    createActivity
}