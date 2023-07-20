const { URL } = require("../utils/URL");
const axios = require("axios");

const getCountries = async () => {
  const response = await axios.get(`${URL}/countries`);
  const data = response.data;

  //mapeo cada data que llega en el response del axios.get 
 if(data.name){

   const formatedCountries = data.map((country) => ({ 
     id: country.cca3,
     name: country.name.official,
     flags: country.flags.png,
     continents: country.continents[0],
     capital: country.capital[0],
     subregion: country?.subregion,
     area: country?.area,
     population: country.population,
   }));
 
   return formatedCountries;
 }
 else throw new Error ("There was an error searching for the countries");

};    
   
module.exports = {
  getCountries
};
