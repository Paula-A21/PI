const {Country} =  require('../db.js');

const contryByName = async (name) => {
      
    const COUNTRY = await Country.findAll({
        where: {
          [Op.iLike]: name //con esto me aseguro que no haya conflicto de mayus y minus
        }
      });
    
    if (!COUNTRY){
        throw new Error ("Country name not found");
    }
    return COUNTRY;
}

module.exports = {
    contryByName
}