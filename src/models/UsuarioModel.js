import { pool } from "../config/Database.js";

export class UsuarioModel {

    static async getAllUsuarios() {
        const sql = "SELECT * FROM `usuarios` ORDER BY `UsuarioId` DESC";
        const [rows, fields] = await pool.execute(sql);
        return rows;
    }

    static async getUsuarioById(UsuarioId) {
        const sql = "SELECT * FROM `usuarios` WHERE `UsuarioId` = ?";
        const [rows, fields] = await pool.execute(sql, [UsuarioId]);
        return rows;
    }

    static async insertUsuario(Usuario, Password, Estado) {
        const sql = "INSERT INTO `usuarios`(`Usuario`, `Password`, `Estado`) VALUES (?, ?, ?)";
        const [rows, fields] = await pool.execute(sql, [Usuario, Password, Estado]);
        return rows;
    }

    static async updateUsuario(Usuario, Password, Estado, UsuarioId) {
        const sql = "UPDATE `usuarios` SET `Usuario` = ?, `Password` = ?, `Estado` = ? WHERE `UsuarioId` = ?";
        const [rows, fields] = await pool.execute(sql, [Usuario, Password, Estado, UsuarioId]);
        return rows;
    }

    static async deleteUsuario(UsuarioId) {
        const sql = "DELETE FROM `usuarios` WHERE `UsuarioId` = ?";
        const [rows, fields] = await pool.execute(sql, [UsuarioId]);
        return rows;
    }
}