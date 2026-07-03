import { PacientesController } from "../controllers/PacientesController.js";
import { parseBody } from "../utils/parseBody.js";

export const pacientesRouter = async (req, res) => {
    const method = req.method;
    let url = req.url.split('/');
    url.shift();

    let id = '';
    if (url[1] == '') {
        id = null;
    } else {
        id = url[1];
    }

    switch (method) {
        case 'GET':
            if (id) {
                await PacientesController.getPacienteById(req, res, id);
            } else {
                await PacientesController.getAllPacientes(req, res);
            }
            break;
        case 'POST':
            let data = await parseBody(req);
            await PacientesController.insertPaciente(req, res, data['DNI'], data['Nombre'], data['Direccion'], data['CodigoPostal'], data['Telefono'], data['Genero'], data['FechaNacimiento'], data['Correo']);
            break;
        case 'PUT':
            if (id) {
                let data = await parseBody(req);
                await PacientesController.updatePaciente(req, res, data['DNI'], data['Nombre'], data['Direccion'], data['CodigoPostal'], data['Telefono'], data['Genero'], data['FechaNacimiento'], data['Correo'], id);
            } else {
                res.writeHead(400);
                res.end(JSON.stringify("Error, Id no valido"));
            }
            break;
        case 'DELETE':
            if (id) {
                let data = await parseBody(req);
                await PacientesController.deletePaciente(req, res, id);
            } else {
                res.writeHead(400);
                res.end(JSON.stringify("Error, Id no valido"));
            }
            break;
        default:
            res.writeHead(400);
            res.end(JSON.stringify("Error, metodo no valido"));
    }
}