const db = require("../../../db");
class ToDo {
  constructor({ id, title, description, status, createdAt, updatedAt }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static async getAll() {
    try {
      const query =
        "SELECT * FROM data_toDo WHERE statusCode != 0 ORDER BY createdAt ASC";

      return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
          if (err) {
            return reject(err);
          }

          const toDos = results.map(
            (todo) =>
              new ToDo({
                id: todo.id,
                title: todo.title,
                description: todo.descripcion,
                status: todo.statusCode,
                createdAt: todo.createdAt,
                updatedAt: todo.updatedAt,
              })
          );
          resolve(toDos);
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async save() {
    try {
      const query = `INSERT INTO data_toDo (title, descripcion, statusCode) VALUES (?, ?, ?)`;
      const values = [this.title, this.description, this.status];

      return new Promise((resolve, reject) => {;
        db.query(query, values, (err, results) => {
          if (err) {
            return reject(err);
          }
          this.id = results.insertId;
          resolve(this);
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async updateStatus(newStatus) {
    try {
      const query = `UPDATE data_toDo SET statusCode = ? WHERE id = ?`;
      const values = [newStatus, this.id];

      return new Promise((resolve, reject) => {
        db.query(query, values, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results.affectedRows > 0);
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async delete() {
    try {
      const query = `UPDATE data_toDo SET statusCode = 0 WHERE id = ?`;
      const values = [this.id];

      return new Promise((resolve, reject) => {
        db.query(query, values, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results.affectedRows > 0);
        });
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ToDo;
