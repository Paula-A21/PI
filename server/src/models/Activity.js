const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    sequelize.define("Activity", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.INTEGER,
            validate:{
              "max": 5, 
              "min": 0
            },
            allowNull: false
        },
        duration:{
            //postgres quizás no acepta TIME, así que debería probar usar DATE y sacar solo la hora
            //type: DataTypes.DATE
            type: DataTypes.TIME,
            allowNull: true
            // type: DataTypes.INTEGER,
            // validate:{
            //     "max":24,
            //     "min":1
            // }
        },
        season:{
            type: DataTypes.ENUM("Summer", "Fall", "Winter", "Autumn"),
            allowNull:false
        }
    })
}