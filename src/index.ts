import cors from "cors";
import "express-async-errors";
import express, { json } from "express";
import { errorMiddleware } from "./middleware/error-middleware";
import { routes } from "./routes/routes";

const app = express();
const port = 5500;

app.use(json());

app.use(cors());

app.use(routes);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server starting 🚀 http://localhost:${port}`);
});
