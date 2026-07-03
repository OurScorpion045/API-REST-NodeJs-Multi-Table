import { UsuarioController } from "../controllers/UsuarioController.js";
import { parseBody } from "../utils/parseBody.js";

export const usuarioController = async (req, res) => {
    const method = req.method;
    let url = req.url.split('/');
    url.shift();

    let id = '';
    if (url[1] == '') {
        id = null;
    } else {
        id = url[1];
    }

    let data = null;

    switch (method) {
        case 'GET':
            if (id) {
                await UsuarioController.getUsuarioById(req, res, id);
            } else {
                await UsuarioController.getAllUsuarios(req, res);
            }
            break;
        case 'POST':
            data = parseBody(req);
            await UsuarioController.insertUsuario(req, res, data['Usuario'], data['Password'], data['Estado']);
            break;
        case 'PUT':
            if (id) {
                data = parseBody(req);
                await UsuarioController.updateUsuario(req, res, data['Usuario'], data['Password'], data['Estado'], id);
            } else {
                res.writeHead(400);
                res.end(JSON.stringify("Error: Id no valido"));
            }
            break;
        case 'DELETE':
            if (id) {
                data = parseBody(req);
                await UsuarioController.deleteUsuario(req, res, id);
            } else {
                res.writeHead(400);
                res.end(JSON.stringify("Error: Id no valido"));
            }
            break;
        default:
            res.writeHead(400);
            res.end(JSON.stringify("Error: Metodo no valido"));
    }
}   