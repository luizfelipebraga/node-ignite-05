import express from "express";
import { router } from "./routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(router);
app.use(express.json());

app.listen(port, () => console.log(`Server is running at ${port}`));
