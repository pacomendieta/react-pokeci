// development.env
NODE_ENV=development
HOST="127.0.0.1"
PORT=5000


// production.env
NODE_ENV=production
HOST=localhost
PORT=8000


// config.js
const dotenv = require('dotenv');
const path = require('path');

// configurar a dotenv el fichero production.env o development.env:
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});

// las variables de entorno definidas en el archivo *.env ahora están en process.env
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000
}