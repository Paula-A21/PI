const Selects = () => {
    return(
        <div>
            <select onChange={handleFilter}>
                <option value={"Continent"}>Continent</option>
                <option value={"Activity"}>Activity type</option>
            </select>

            <select onChange={handleOrder}>
                <option value={"Ascendant"}>Ascendant</option>
                <option value={"Descendant"}>Descendant</option> 
                <option value={"Highest"}>Highest Population</option>
                <option value={"Lowest"}>Lowest Population</option> 
            </select>
        </div>
    )
}

export default Selects;
