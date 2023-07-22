const {Country} =  require('../db.js');

const CountriesById = async (id) => {

  const COUNTRY = await Country.findOne({ //find one porque el id de countries es de 3 letras en mayusc
    where: {
      id
    }
  });


  if (!COUNTRY){
    throw new Error ("Country id not found");
  }
  return COUNTRY;
};

module.exports = {
  CountriesById
};
