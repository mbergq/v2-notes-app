import express from "express";
import routes from "./src/routes";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
