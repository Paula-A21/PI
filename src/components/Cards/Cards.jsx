import Card from '../Card/Card';
import React from "react";
// import style from './Cards.module.css';

function Cards({countries}) { //recibe props desde APP

  return (
    <div>
      { /*La función cards se encarga de mapear los países que recibe por parámetro desde APP*/
          
          countries?.map((country)=>{
          return ( /*Por cada card que construya y mapee Cards, llamo a Card que es el que muestra la card*/
          
            <Card 
              name={country.name} 
              flags={country.flags}
              continents={country.continents}
            />
          )
        })
      }
    </div>
  );
}

export default Cards;