const {Country} =  require('../db');

const getContryById = async (idPais) => {
  const COUNTRY = await Country.findByPk(idPais);

  if (COUNTRY){
    return COUNTRY;
  }
  else throw new Error ("Country id not found");
};

module.exports = {
  getContryById,
};
