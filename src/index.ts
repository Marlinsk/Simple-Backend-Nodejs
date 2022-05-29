import cors from "cors";
import express from "express";

import { routes } from "./routes";

const app = express();
const port = 5500;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server starting 🚀 localhost:${port}`);
});
