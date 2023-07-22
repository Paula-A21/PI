const {Country} =  require('../db.js');

const CountriesById = async (id) => {

  const countryId = await Country.findOne({ //find one porque el id de countries es de 3 letras en mayusc
    where: {
      id
    }
  });


  if (!countryId){
    throw new Error ("Country id not found");
  }
  return countryId;
};

module.exports = {
  CountriesById
};
