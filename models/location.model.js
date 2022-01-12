const dbConn = require('../config/db.config');

// constructor
const Location = function(location) {
    this.carrier_name = location.carrierName;
    this.carrier_phone_number = location.carrierPhoneNumber;
    this.location_truck =location.location;
    this.availability_date =location.date;
    this.number_Of_trucks_available= location.numberOfTrucksAvailable;
    this.email = location.email;
};

Location.create = (newLocation, result) => {

  dbConn.getConnection(function(err, conn) {
    if (err) throw err;
    conn.query("INSERT INTO location SET ?", newLocation, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created location: ", { id: res.insertId, ...newLocation });
      result(null, { id: res.insertId, ...newLocation });
    });
    //release the connection when finished!
    dbConn.releaseConnection(conn);
  });
  
  
};

module.exports = Location;
