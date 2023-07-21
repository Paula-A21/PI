const { URL } = require("../utils/URL");
const axios = require("axios");
const {Country} =  require('../db');

const getCountries = () => {
  // const response = await axios.get(`${URL}/countries`);
  // const data = response.data;
  axios
    .get(`${URL}/countries`)
    .then(({ data }) => {
      Promise.all(
        data.map((country) => { //mapeo cada data que llega en el response del axios.get 
          return Country.create({
            id: country.cca3,
            name: country.name.official,
            flags: country.flags.png,
            continents: country.continents[0],
            capital: country.capital[0],
            subregion: country?.subregion,
            area: country?.area,
            population: country.population,
          });
        })
      )
    .catch((error) => {
      throw new Error ("There was an error creating countries");
    })
  })
};    
   
module.exports = {
  getCountries
};
