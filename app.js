require('dotenv').config();

const express = require('express');
const app = express();

const mysql = require('mysql');

const FisherTrip = require('./FisherTrip')
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
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_SCHEMA
  });
//   .getConnection()
//   .then( conn => {
//       console.log('DB Connected!');
//       conn.release();
//   })
//   .catch( err => {
//       console.log('DB Connection FAILED!');
//       console.error(err);
//   });

// INIT END POINTS
app.get('/fisher/all', (req, res) => FisherTrip.getAllTrips(req, res, pool));
app.get('/fisher/:id', (req, res) => FisherTrip.getTripsFor(req, res, pool));