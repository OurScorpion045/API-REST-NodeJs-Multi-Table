import { pool } from "../config/Database.js";

export class UsuariosModel {

    static async getAllUsuarios() {
        const sql = "SELECT * FROM `citas` ORDER BY `CitaId` DESC";
        const [rows, fields] = await pool.execute(sql);
        return rows;
    }

    static async getUsuarioById(id) {
        const sql = "SELECT * FROM `citas` WHERE `CitaId` = ?";
        const [rows, fields] = await pool.execute(sql, [id]);
        return rows;
    }

    static async insertUsuario(PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo) {
        const sql = "INSERT INTO `citas`(`PacienteId`, `Fecha`, `HoraInicio`, `HoraFin`, `Estado`, `Motivo`) VALUES (?, ?, ?, ?, ?, ?)";
        const [rows, fields] = await pool.execute(sql, [PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo]);
        return rows;
    }

    static async updateUsuario(id, PacienteId, Fecha, HoraInicio, HoraFin, Estado, Motivo) {
        const sql = "UPDATE `citas` SET `PacienteId` = ?, `Fecha` = ?,"
    }
}