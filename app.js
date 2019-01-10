require('dotenv').config();

const express = require('express');
const app = express();

const mysql = require('mysql2');
/**
 * CONFIG SETUP
 */
 const port = process.env.SERVER_PORT || 3000;

/**
* END CONFIG SETUP
*/

/**
 * SERVER SETUP
 */
 //To test endpoint
 app.get('/', (req, res) => res.send('Hello, World!'));

 //Start listening
 app.listen(port, () => console.log(`Server listening on port ${port}!`));

 //MySQL Setup
const pool = mysql.createPoolPromise({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS
  }).getConnection()
  .then( () => {
      console.log('DB Connected!');
  })
  .catch( err => {
      console.log('DB Connection FAILED!');
      console.error(err);
  });

  module.exports = {
      dbPool: pool
  }

