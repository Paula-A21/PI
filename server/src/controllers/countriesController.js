const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


const countryById = async (id) => {
    const countryById = await Country.findOne({
        where: { id },
        include: {
            model: Activity,
            attributes: ['name', 'season', 'difficulty', 'season']
        }
    });

    if(!countryById) throw Error ('There is no country with that ID');

    return countryById;
};

const countryByName = async (name) => {
    const country = await Country.findAll({
        where: { name: {
            [Op.iLike]: `${name}%`,
        }},
        include: {
            model: Activity,
            attributes: ['name', 'season', 'difficulty', 'season']
        }
    });
    
    if(!country) throw Error('The country with that name does not exist');
    
    return country;
};

module.exports = {
    countryById,
    countryByName
};