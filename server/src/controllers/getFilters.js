// const { Country, Activity } = require("../db");
// const { Op } = require("sequelize");

// //los filtro por continente y actividad juntos porque se pueden juntar
// //no hago lo mismo con los order porque ordeno por population o name

// const getFilters = async (continent, activity) => {

//   if(!continent && !activity) throw Error("Filter don't set");

//   const continentFilter = async (continent) => {
//     const countries = await Country.findAll({
//       where: {
//         continent: {
//           [Op.iLike]: `${continent}`
//         },
//       },
//     });

//     return countries;
//   };

//   //si tengo un continente y no una actividad, solo filtro el continente
//   if (continent && !activity) {
//     const response = await continentFilter(continent);
//     return response;
//   }

//   //si tengo actividad y no continente, devuelve todos los países con esa actividad 
//   if (!continent && activity) {
//     const activities = await Activity.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `${activity}`,
//         },
//       },

//       include: Country,
//     });

//     if (!activities.length) return activities;

//     return activities[0].Countries;
//   }

//   //si tengo ambos filtro los continentes 
//   if (continent && activity) {
//     const countries = await continentFilter(continent);

//     // obtengo los ids de los países ya filtrados por continente
//     const countryIds = countries.map((country) => country.id);

//     //devuelvo las actividades que tienen los países ya filtrados
//     const activities = await Activity.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `${activity}`,
//         },
//       },
//       include: {
//         model: Country,
//         where: {
//           id: countryIds, // Limitar la búsqueda de actividades solo en los países filtrados por continente
//         },
//       },
//     });

//     if (!activities.length) return activities;
//     else if (!countries && !activities) throw Error("Not Found");

//     //lista de países asociados a la primera actividad encontrada
//     return activities[0].Countries;
//   }
// };

// module.exports = {
//   getFilters
// };
