import React from "react";
import {Link} from 'react-router-dom';

function Card({name, flags, continents}) {
  return (
    <div>
        <h2>{name}</h2> 
        <h2>{flags}</h2>
        <h2>{continents}</h2>
        <Link to={`/detail`}>
            <button>➕</button>
        </Link>
    </div>
  );
}

export default Card; 





