// const {Country} =  require('../db.js');
// const { Op } = require("sequelize");

// const CountriesById = async (id) => {

//   const countryId = await Country.findOne({ //find one porque el id de countries es de 3 letras en mayusc
//     where: {
//       id
//     }
//   });


//   if (!countryId){
//     throw new Error ("Country id not found");
//   }
//   return countryId;
// };


// const contryByName = async (name) => {
//   console.log("swas"+name);
//   const countryName = await Country.findAll({
//     where: { name: {
//         [Op.iLike]: `${name}%`
//     }}
//   });
    
//     if (!countryName){
//       throw new Error ("Country name not found");
//     }
//     return countryName;
// }


// module.exports = {
//   contryByName,
//   CountriesById
// };
