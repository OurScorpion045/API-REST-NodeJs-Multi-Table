import { UsuarioModel } from "../models/UsuarioModel.js";
import bcrypt from "bcrypt";

export class UsuarioController {

    static async getAllUsuarios(req, res) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            let results = await UsuarioModel.getAllUsuarios();
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
            let results = await UsuarioModel.getUsuarioById(UsuarioId);
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
            const passwordHash = await bcrypt.hash(Password, 10);
            let results = await UsuarioModel.insertUsuario(Usuario, passwordHash, Estado);
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
            let results = await UsuarioModel.updateUsuario(Usuario, Password, Estado, UsuarioId);
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
            let results = await UsuarioModel.deleteUsuario(UsuarioId);
            res.end(JSON.stringify("Usuario eliminado correctamente"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }
}