import { CitasModel } from "../models/CitasModel.js";

export class CitasController {

    static async getAllCitas(req, res) {
        try {
            const results = await CitasModel.getAllUsuarios();
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(results));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async getCitaById(req, res, CitaId) {
        try {
            const results = await CitasModel.getUsuarioById(CitaId);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(results));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async insertCita(req, res, PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo) {
        try {
            const results = await CitasModel.insertUsuario(PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify("Cita insertada correctamente"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async updateCita(req, res, PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo, CitaId) {
        try {
            const results = await CitasModel.updateUsuario(PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo, CitaId);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify("Cita actualizada correctamente"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async deleteCita(req, res, CitaId) {
        try {
            const results = await CitasModel.deleteUsuario(CitaId);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify("Cita eliminada con exito"));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }
}