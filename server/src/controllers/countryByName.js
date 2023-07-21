const {Country} =  require('../db');

const getContryByName = async (name) => {
    name.toLowerCase();  //paso el nombre a minúsculas para que no haya conflicto si hay una minúscula mal
    const COUNTRY = await Country.findAll(name);
    
    if (COUNTRY){
        return COUNTRY;
    }
    else throw new Error ("Country name not found");
}

module.exports = {
    getContryByName
}