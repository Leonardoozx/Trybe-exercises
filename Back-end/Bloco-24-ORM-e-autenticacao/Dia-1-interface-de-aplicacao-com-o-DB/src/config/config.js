require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || "minhasenha",
    "database": process.env.DB_NAME ||"orm_teste",
    "host": process.env.DB_HOST ||"localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
