import 'dotenv/config'

export default {
  SERVER_PORT: process.env.SERVER_PORT,
  ENVIROMENT: process.env.NODE_ENV,
  PREFIX: '/api/v1',
  DB: {
    NODE_ENV: process.env.NODE_ENV,
    DBNAME: process.env.DB_NAME,
    DBPORT: process.env.DB_PORT,
    DBUSER: process.env.DB_USER,
    DBPASSWORD: process.env.DB_PASSWORD,
    DIALECT: process.env.DB_DIALECT,
    DBHOST: process.env.DB_HOST
  }
}
