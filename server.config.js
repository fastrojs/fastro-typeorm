require('dotenv').config()

module.exports = {
  app: {
    host: process.env.APP_HOST || '0.0.0.0',
    port: Number(process.env.APP_PORT) || 3000
  },
  database: {
    name: 'default',
    type: 'mysql',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'test',
    synchronize: process.env.MYSQL_SYNCHRONIZE || true,
    logging: process.env.MYSQL_LOGGING || false
  }
}