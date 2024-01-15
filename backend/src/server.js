import http from "http";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();


const server = http.createServer(app);
const { PORT, NODE_ENV } = process.env;

const port = NODE_ENV === "development" ? PORT : 6000;
server.listen(port, () =>
  console.log(`Server is listening on port ${port} in ${NODE_ENV} environment`)
);
