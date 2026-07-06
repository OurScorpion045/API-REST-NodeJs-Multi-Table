import { pool } from "../config/Database.js";

export class PacientesModel {

    static async getAllPacientes() {
        const sql = "SELECT * FROM `pacientes` ORDER BY `PacienteId` DESC";
        const [rows, fields] = await pool.execute(sql);
        return rows;
    }

    static async getPacienteById(PacienteId) {
        const sql = "SELECT * FROM `pacientes` WHERE `PacienteId` = ?";
        let values = [PacienteId];
        const [rows, fields] = await pool.execute(sql, values);
        return rows;
    }

    static async insertPaciente(DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo) {
        const sql = "INSERT INTO `pacientes`(`DNI`, `Nombre`, `Direccion`, `CodigoPostal`, `Telefono`, `Genero`, `FechaNacimiento`, `Correo`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        let values = [DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo];
        const [rows, fields] = await pool.execute(sql, values);
        return rows;
    }

    static async updatePaciente(DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo, PacienteId) {
        const sql = "UPDATE `pacientes` SET `DNI` = ?, `Nombre` = ?, `Direccion` = ?, `CodigoPostal` = ?, `Telefono` = ?, `Genero` = ?, `FechaNacimiento` = ?, `Correo` = ? WHERE `PacienteId` = ?";
        let values = [DNI, Nombre, Direccion, CodigoPostal, Telefono, Genero, FechaNacimiento, Correo, PacienteId];
        const [rows, fields] = await pool.execute(sql, values);
        return rows;
    }

    static async deletePaciente(PacienteId) {
        const sql = "DELETE FROM `pacientes` WHERE `PacienteId` = ?";
        let values = [PacienteId];
        const [rows, fields] = await pool.execute(sql, values);
        return rows;
    }
}