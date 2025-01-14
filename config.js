const env = require('dotenv')
env.config()


module.exports = {
    PORT : process.env.PORT,
    DB_ADDRESS : process.env.DB_ADDRESS,
    
}