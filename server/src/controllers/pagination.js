

const pagination = async (pageData, countries) => {

    
    const itemsPerPage = 10;
    const totalPages = countries.length;
    const numberPages = Math.ceil(totalPages / itemsPerPage); //lo redondeo hacia arriba porque así me aseguro de que siempre haya páginas a pesar de que no haya datos suficientes para llenar toda la página
    let page = pageData ? Number(pageData) : 1; //si page data tiene algo lo devuelvo transformado en número ya 
    //que lo recibo por query, ya que si no recibo un valor de cambio específico de página, significa que estoy en la primera

    if (page > numberPages) page = numberPages; //si page es mayor al número de páginas, lo igualo para que aparezca un número de paginación mayor al que realmente existe
    else if (page < 1) page = 1; //así me aseguro que no se intente mostrar un número de página en valor negativo o 0

    const startingIndex = (page - 1) * itemsPerPage; //esto calcula de donde inicio a cortar los países para mostrar, así se va guardando
    const endingIndex = startingIndex + itemsPerPage; //le sumo alíndice de inicio los items que puedo poner por página ya que así corto mostrando solo 10 countries y a partir del último country que mostre
    const result = countries.slice(startingIndex, endingIndex);

    return result;
};


module.exports ={ 
    pagination
};