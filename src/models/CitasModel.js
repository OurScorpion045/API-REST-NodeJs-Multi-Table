import { pool } from "../config/Database.js";

export class CitasModel {

    static async getAllUsuarios() {
        const sql = "SELECT * FROM `citas` ORDER BY `CitaId` DESC";
        const [rows, fields] = await pool.execute(sql);
        return rows;
    }

    static async getUsuarioById(CitaId) {
        const sql = "SELECT * FROM `citas` WHERE `CitaId` = ?";
        const [rows, fields] = await pool.execute(sql, [CitaId]);
        return rows;
    }

    static async insertUsuario(PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo) {
        const sql = "INSERT INTO `citas`(`PacienteId`, `Fecha`, `HoraInicio`, `HoraFin`, `Estado`, `Motivo`) VALUES (?, ?, ?, ?, ?, ?)";
        const [rows, fields] = await pool.execute(sql, [PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo]);
        return rows;
    }

    static async updateUsuario(PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo, CitaId) {
        const sql = "UPDATE `citas` SET `PacienteId` = ?, `Fecha` = ?, `HoraInicio` = ?, `HoraFin` = ?, `Estado` = ?, `Motivo` = ? WHERE `CitaId` = ?";
        const [rows, fields] = await pool.execute(sql, [PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo, CitaId]);
        return rows;
    }

    static async deleteUsuario(CitaId) {
        const sql = "DELETE FROM `citas` WHERE `CitaId` = ?";
        const [rows, fields] = await pool.execute(sql, CitaId);
        return rows;
    }
}