import { PacientesModel } from "../models/PacientesModel.js";

export class PacientesController {

    static async getAllPacientes(req, res) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await PacientesModel.getAllPacientes();
            res.end(JSON.stringify(results));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async getPacienteById(req, res, PacienteId) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await PacientesModel.getPacienteById(PacienteId);
            res.end(JSON.stringify(results));
        } catch (err) {
            //res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async insertPaciente(req, res, DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await PacientesModel.insertPaciente(DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo);
            res.end(JSON.stringify("Paciente insertado correctamente"));
        } catch (err) {
            //res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async updatePaciente(req, res, DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo, PacienteId) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await PacientesModel.updatePaciente(DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo, PacienteId);
            res.end("Paciente actualizado correctamente");
        } catch (err) {
            //res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }

    static async deletePaciente(req, res, PacienteId) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            const results = await PacientesModel.deletePaciente(PacienteId);
            res.end("Paciente eliminado correctamente");
        } catch (err) {
            //res.writeHead(500);
            res.end(JSON.stringify("Error: " + err));
        }
    }
}