const { URL } = require("../utils/URL");
const axios = require("axios");

const getContryById = async (idPais) => {
  const response = await axios.get(`${URL}/countries/${idPais}`);
  const data = response.data;

  const COUNTRY = data.find((country)=> country.cca3 === idPais); 

  if (COUNTRY){
    return COUNTRY;
  }
  else throw new Error ("ID country not found");
};

module.exports = {
  getContryById,
};
