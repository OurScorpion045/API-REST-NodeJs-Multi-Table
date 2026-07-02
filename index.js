import http from "node:http";
import { processRequest } from "./app.js";

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log("Server listening on port 3000");
})