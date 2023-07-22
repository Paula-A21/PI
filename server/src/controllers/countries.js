  const { URL } = require("../utils/URL");
  const axios = require("axios");
  const { Country } =  require('../db.js');

  const getCountries = async () => {
    try {
      const { data } = await axios.get(`${URL}/countries`);
      return Promise.all(
        data.map((country) => {
          // Mapeo cada data que llega en el response del axios.get

          if(!country.capital) country.capital = ['Unknown'] //si no existe la capital se guarda un valor unknown por defecto

          return Country.create({
            id: country.cca3,
            name: country.name.common,
            flags: country.flags.png,
            continents: country.continents[0], //saco el primer valor de los arrays
            capital: country.capital[0], 
            subregion: country?.subregion,
            area: country?.area,
            population: country.population,
          });
        })
      );
    } catch (error) {
      throw new Error("There was an error creating countries");
    }
  };

  module.exports = {
    getCountries
  };


  module.exports = {
    getCountries
  };

  //PROMESAS QUE NO FUNCIONARON
  // const getCountries = () => {
  //   return axios.get(`${URL}/countries`)
  //     .then(({ data }) => {
  //       return Promise.all(
  //         data.map((country) => { //mapeo cada data que llega en el response del axios.get 
  //           return Country.create({
  //             id: country.cca3,
  //             name: country.name.official,
  //             flags: country.flags.png,
  //             continents: country.continents,
  //             capital: country.capital,
  //             subregion: country?.subregion,
  //             area: country?.area,
  //             population: country.population,
  //           });
  //         })
  //       );
  //     })
  //     .catch((error) => {
  //       throw new Error("There was an error creating countries");
  //     });
  // };    