import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import championsRoutes from "./routes/champions.routes.js";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));
app.use(championsRoutes);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "LoL Champion API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
swaggerDocs.then((res) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(res));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
