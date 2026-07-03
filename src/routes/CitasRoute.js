import { CitasController } from "../controllers/CitasController.js";
import { parseBody } from "../utils/parseBody.js";

export async function citasRouter(req, res) {
    const method = req.method;
    let url = req.url.split("/");
    url.shift();
    let id = "";
    if (url[1] == '') {
        id = null;
    } else {
        id = url[1];
    }
    console.log(url);

    switch (method) {
        case 'GET':
            if (id) {
                await CitasController.getCitaById(req, res, id);
            } else {
                await CitasController.getAllCitas(req, res)
            }
            break;
        case 'POST':
            let data = await parseBody(req);
            await CitasController.insertCita(req, res, data['PacienteId'], data['Fecha'], data['HoraInicio'], data['HoraFin'], data['Estado'], data['Motivo']);
            break;
        case 'PUT':
            if (id) {
                let data = await parseBody(req);
                await CitasController.updateCita(req, res, data['PacienteId'], data['Fecha'], data['HoraInicio'], data['HoraFin'], data['Estado'], data['Motivo'], id);
            } else {
                res.writeHead(400);
                res.end(JSON.stringify("Error, id no valido"));
            }
            break;
        case 'DELETE':
            if (id) {
                await CitasController.deleteCita(req, res, id);
            } else {
                res.writeHead(400);
                res.end(JSON.stringify("Error, id no valido"));
            }
            break;
        default:
            res.writeHead(400);
            res.end(JSON.stringify("Error, metodo no valido"));
            break;
    }
}