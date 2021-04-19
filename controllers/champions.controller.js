import champions from "../db/champions.read.js";

const getChampions = (req, res) => {
  return res.send(champions);
};

const checkRequest = (req, res) => {
  const data = req.params.data;

  if (isNaN(data)) {
    const found = champions.some((value) => value.name === data);

    if (found) {
      return res.json(champions.filter((value) => value.name === data));
    } else {
      return res
        .status(400)
        .send(`<h1>This Champion ${data} doesn't exist</h1>`);
    }
  } else {
    const found = champions.some((value) => value.id === parseInt(data));

    if (found) {
      return res.json(champions.filter((value) => value.id === parseInt(data)));
    } else {
      return res.status(400).send(`<h1>This ID ${data} doesn't exist</h1>`);
    }
  }
};

export default {
  getChampions,
  checkRequest,
};
