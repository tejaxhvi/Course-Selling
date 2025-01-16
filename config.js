const env = require('dotenv')
env.config()


module.exports = {
    PORT : process.env.PORT,
    DB_ADDRESS : process.env.DB_ADDRESS,
    JWT_SECRET : process.env.JWT_SECRET,
    JWT_SECRET_ADMIN : process.env.JWT_SECRET_ADMIN
}