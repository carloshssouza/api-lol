import express from "express";
import championsController from "../controllers/champions.controller.js";

const { getChampions, checkRequest } = championsController;

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send(
    '<h1>Acess the <a href="http://localhost:8080/api-docs">URL<a/>'
  );
});

routes.get("/champions", getChampions);
/**
 * @swagger
 * /champions:
 *  get:
 *    description: Get All Champions
 *    responses:
 *      '200':
 *        description: Succesfully
 */

routes.get("/champions/:data", checkRequest);

export default routes;
