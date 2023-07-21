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
    continents:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.INTEGER,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  });
};