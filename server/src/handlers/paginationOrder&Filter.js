const { getCountries } = require("../controllers/countries");
const { pagination } = require("../controllers/pagination");
const { getFilters } = require("../controllers/getFilters");
const { orderCountries } = require("../controllers/orderCountries");
const { orderPopulation } = require("../controllers/orderPopulation");

const paginationOrderAndFilter = async (req, res) => {
  try {
    const { page, continent, order, activity } = req.query;

    //si tengo página, pero no ninguna de las otras,
    //solo me encargo del paginado. En todos los casos tengo que
    //chequear la página, porque así puedo filtrar en cualquier página
    if (!continent && !order && !activity) {
      const countries = await getCountries();
      const response = await pagination(page, countries);
      return res.status(200).json(response);
    }

    //filtro el continente
    if (continent && !order && !activity) {
      const filter = await getFilters(continent, null);
      const response = await pagination(page, filter);
      return res.status(200).json(response);
    }

    //según el orden que me llegue voy a order Population o Countries
    if (!continent && order && !activity) {
      if (order === "Lowest" || order === "Highest") {
        const orderPop = await orderPopulation(order);
        const response = await pagination(page, orderPop);
        return res.status(200).json(response);
      } else if (order === "Descendant" || order === "Ascendant") {
        const orderCount = await orderCountries(order);
        const response = await pagination(page, orderCount);
        return res.status(200).json(response);
      }
      else throw Error("Order not Found");
    }

    //filtro por actividad
    if (!continent && !order && activity) {
      const filter = await getFilters(null, activity);
      if (!filter.length) throw Error("Not Found");
      const response = await pagination(page, filter);
      return res.status(200).json(response);
    }

    //si me pasan un continente se lo paso a getFilters
    //y según que orden es se lo paso a cada order
    if (continent && order && !activity) {
      const filter = await getFilters(continent);

      if (order === "Lowest" || order === "Highest") {
        const orderPop = await orderPopulation(order, filter);
        const response = await pagination(page, orderPop);
        return res.status(200).json(response);
      } else if (order === "Descendant" || order === "Ascendant") {
        const orderCount = await orderCountries(order, filter);
        const response = await pagination(page, orderCount);
        return res.status(200).json(response);
      }
      else throw Error("Order not Found");
    }

    //si tengo continente y actividad
    if (continent && !order && activity) {
      const filter = await getFilters(continent, activity);
      const response = await pagination(page, filter);
      return res.status(200).json(response);
    }

    //continente, orden y actividad
    if (continent && order && activity) {

      const filter = await getFilters(continent, activity);

      if (order === "Lowest" || order === "Highest") {
        const orderPop = await orderPopulation(order, filter);
        const response = await pagination(page, orderPop);
        return res.status(200).json(response);
      } else if (order === "Descendant" || order === "Ascendant") {
        const orderCount = await orderCountries(order, filter);
        const response = await pagination(page, orderCount);
        return res.status(200).json(response);
      }
      else throw Error("Order not Found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  paginationOrderAndFilter
};
