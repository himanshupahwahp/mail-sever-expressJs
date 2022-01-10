module.exports = app => {
    const locations = require("./../controller/location.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Location
    router.post("/", locations.create);
  
    app.use('/api/locations', router);
  };