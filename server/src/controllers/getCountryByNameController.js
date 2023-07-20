const { URL } = require("../utils/URL");
const axios = require("axios");

const getContryByName = async (name) => {
    const response = await axios.get(`${URL}/countries/${name}`);
    const data = response.data;

    const COUNTRY = data.find((country)=> country.name.toLowerCase() === name.toLowerCase()); 
    //paso ambos nombres a minúsculas par que no haya conflicto si hay una minúscula mal

    if (COUNTRY){
        return COUNTRY;
    }
    else throw new Error ("Country not found");
}

module.exports = {
    getContryByName
}