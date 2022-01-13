import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = process.env.PORT || 3333;

app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.listen(port, () => console.log(`Server is running at ${port}`));
