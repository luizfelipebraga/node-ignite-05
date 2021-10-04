import express from "express";

const port = 3337;

const app = express();
app.use(express.json());

app.listen(port, () => console.log("listening on port " + port));