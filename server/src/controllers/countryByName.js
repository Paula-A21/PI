// const {Country} =  require('../db.js');
// const { Op } = require("sequelize");

// const contryByName = async (name) => {
//   console.log("swas"+name);
//   const COUNTRY = await Country.findAll({
//     where: { name: {
//         [Op.iLike]: `${name}%`,
//     }}
//   });
    
//     if (!COUNTRY){
//       throw new Error ("Country name not found");
//     }
//     return COUNTRY;
// }

// module.exports = {
//     contryByName
// }