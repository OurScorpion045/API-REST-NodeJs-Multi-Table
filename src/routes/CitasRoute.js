import { CitasController } from "../controllers/CitasController.js";
import { parseBody } from "../utils/parseBody.js";

export async function citasRouter(req, res) {
    const method = req.method;
    let url = req.url.split("/");
    url.shift();
}