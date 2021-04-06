import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import routes from "./routes/routes.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
