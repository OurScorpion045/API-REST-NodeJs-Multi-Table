import { citasRouter } from "./src/routes/CitasRoute.js";
import { pacientesRouter } from "./src/routes/PacientesRoute.js";
import { usuarioRouter } from "./src/routes/UsuarioRoute.js";

export const processRequest = async (req, res) => {
    let url = req.url.split('/');
    url.shift();
    const route = url[0];
    
    switch(route) {
        case 'citas':
            await citasRouter(req, res);
            break;
        case 'pacientes':
            await pacientesRouter(req, res);
            break;
        case 'usuarios':
            await usuarioRouter(req, res);
            break;
        default:
            res.end(JSON.stringify("Error: ruta no valida"));
            break;
    }
}