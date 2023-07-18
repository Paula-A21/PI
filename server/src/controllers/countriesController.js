const { URL } = require("../utils/URL");
const axios = require("axios");

const getCountries = async () => {
  const response = await axios.get(`${URL}/countries`);
  const data = response.data;

  //mapeo cada data que llega en el response del axios.get 
  const formatedCountries = data.map((country) => ({ 
    id: country.country_code,
    name: country.name.official,
    flags: country.flags.png,
    continents: country.continents,
    capital: country.capital,
    subregion: country?.subregion,
    area: country?.area,
    population: country.population,
  }));

  return formatedCountries;
};    
   
module.exports = {
  getCountries
};
