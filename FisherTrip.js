const query = require('./FisherTrip.query');
const mysql = require('mysql');

function getAllTrips(req, res, pool){
    console.log('"Get All Fisher Trips" Called');

    const limit = req.query.limit || 10;
    pool.getConnection((err, conn) => {
        conn.query('USE Abalobi_ZA', (error, results, fields) => {
            // When done with the connection, release it.
            if (error) throw error;
            conn.query(mysql.format(query.allTrips, [limit]), (error, results, fields) => {
                conn.release();
                if(error) throw error;
                res.send(results);
            });
          });
    });
}
module.exports = {
    getAllTrips
}