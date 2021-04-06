import champions from "../db/champions.read.js";

const getChampions = (req, res) => {
  return res.send(champions);
};

const getChampionsById = (req, res) => {
  const found = champions.some((value) => value.id === parseInt(req.params.id));
  if (found) {
    return res.json(
      champions.filter((value) => value.id === parseInt(req.params.id))
    );
  } else {
    return res
      .status(400)
      .send(`<h1>This ID ${req.params.id} doesn't exist</h1>`);
  }
};

const getChampionsByName = (req, res) => {
  const found = champions.some((value) => value.name === req.params.name);
  if (found) {
    return res.json(
      champions.filter((value) => value.name === req.params.name)
    );
  } else {
    return res
      .status(400)
      .send(`<h1>This Champion ${req.params.name} doesn't exist</h1>`);
  }
};

export default { getChampions, getChampionsByName, getChampionsById };
