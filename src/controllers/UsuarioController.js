import { UsuarioModel } from "../models/UsuarioModel.js";
import { hashPassword } from "../utils/bcrypt.js";

class UsuarioController {

    static async getAllUsuarios(req, res) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await UsuarioModel.getAllUsuarios();
            res.end(JSON.stringify(results));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async getUsuarioById(req, res, UsuarioId) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await UsuarioModel.getUsuarioById(UsuarioId);
            res.end(JSON.stringify(results));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async insertUsuario(req, res, Usuario, Password, Estado) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const hPassword = await hashPassword(Password);
            if (hPassword = null) {
                throw new Error("Error al hashear la contraseña del nuevo usuario");
            }
            const results = await UsuarioModel.insertUsuario(Usuario, hPassword, Estado);
            res.end(JSON.stringify("Usuario insertado correctamente"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async updateUsuario(req, res, Usuario, Password, Estado, UsuarioId) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await UsuarioModel.updateUsuario(Usuario, Password, Estado, UsuarioId);
            res.end(JSON.stringify("Usuario actualizado correctamente"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async deleteUsuario(req, res, UsuarioId) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await UsuarioModel.deleteUsuario(UsuarioId);
            res.end(JSON.stringify("Usuario eliminado correctamente"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }
}