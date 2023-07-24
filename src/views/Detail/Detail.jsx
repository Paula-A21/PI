const Detail = ({countries}) => {
    return(
        <div>
            <h1>Detail</h1>
            { /*La función cards se encarga de mapear los países que recibe por parámetro desde APP*/
                
                countries?.map((country)=>{
                return ( /*Por cada card que construya y mapee Cards, llamo a Card que es el que muestra la card*/
                
                  <Card 
                    id={country.id}
                    name={country.name} 
                    flags={country.flags}
                    continents={country.continents}
                    capital={country.capital}
                    subregion={country?.subregion}
                    area={country?.area}
                    population={country.population}
                  />
                )
              })
            }
        </div>
    )
}

export default Detail;