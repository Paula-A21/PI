// const orderCountries = async (order, countries) => {

//   if (!order) throw new Error("Order not set");

//   if (order === "Descendant") {
//     countries.sort((country1, country2) => {
//       //El metodo localeCompare compara cadenas de texto
//       return country2.name.localeCompare(country1.name, {
//         sensitivity: "base", //sensitivity base sirve para que no sea sensible a mayúsculas y minúsculas
//       });
//     });
//     return countries;
//   }
//   else if (order === "Ascendant") {

//     countries.sort((country1, country2) => { //hago los sort segun asc o desc
//       return country1.name.localeCompare(country2.name, {
//         sensitivity: "base",
//       });
//     });
//     return countries;
//   }
// };

// module.exports = {
//   orderCountries
// };
