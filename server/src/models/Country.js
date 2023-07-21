const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{ //es el id de 3 letras particular de cada país, cca3 así me llega de la API
      type: DataTypes.STRING, 
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flags: {
      type: DataTypes.STRING, //tipo de imagen?
      allowNull:false
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const continentsString = this.getDataValue("continents");
        if (continentsString) {
          return JSON.parse(continentsString); // Convertir la cadena de texto a un arreglo
        } else {
          return [];
        }
      },
      set(value) {
        this.setDataValue("continents", JSON.stringify(value)); // Convertir el arreglo a una cadena de texto antes de guardar
      },
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: "Unknown",
      get() {
        const capitalString = this.getDataValue("capital");
        if (capitalString) {
          return JSON.parse(capitalString); // Convertir la cadena de texto a un objeto JSON
        } else {
          return {};
        }
      },
      set(value) {
        this.setDataValue("capital", JSON.stringify(value)); // Convertir el objeto JSON a una cadena de texto antes de guardar
      }
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull:true
    },
    area:{
      type: DataTypes.INTEGER,
      allowNull:true
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  })};