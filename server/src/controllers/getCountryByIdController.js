const { URL } = require("../utils/URL");
const axios = require("axios");

const getContryById = async (id) => {
  const response = await axios.get(`${URL}/countries/:idPais`);
  const data = response.data;

  const COUNTRY = data.find((country)=> country.id === +id); //parseo el id que me llega por parámetro 
    //porque lo recivo desde la query y me llega como texto

  if (COUNTRY){
    return COUNTRY;
  }
};

module.exports = {
  getContryById,
};
