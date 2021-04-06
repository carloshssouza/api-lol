import express from "express";
import championsController from "../controllers/champions.controller.js";

const {
  getChampions,
  getChampionsByName,
  getChampionsById,
} = championsController;

const routes = express.Router();

routes.get("/champions", getChampions);

routes.get("/champions/id/:id", getChampionsById);

routes.get("/champions/name/:name", getChampionsByName);

export default routes;
