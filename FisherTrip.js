const query = require('./FisherTrip.query');
const mysql = require('mysql');

function getAllTrips(req, res, pool) {
    const limit = parseInt(req.query.limit) || 10;

    pool.getConnection((err, conn) => {
        conn.query(
            mysql.format(query.allTrips, [limit]), 
            (error, results, fields) => {
                conn.release();
                if(error) throw error;
                res.send(results);
            }
        );
    });

}

function getTripsFor(req, res, pool) {
    const limit = parseInt(req.query.limit) || 10;
    const id = req.params.id; 

    pool.getConnection((err, conn) => {
        conn.query(
            mysql.format(query.tripsFor, [id, limit]), 
            (error, results, fields) => {
                conn.release();
                if(error) throw error;
                res.send(results);
            }
        );
    });
}
module.exports = {
    getAllTrips,
    getTripsFor
}