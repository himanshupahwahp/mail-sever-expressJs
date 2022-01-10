const Location = require("./../models/location.model");
const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEYS)

// Create and Save a new Location
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Location
  const location = new Location({
    carrierName: req.body.carrierName,
    carrierPhoneNumber: req.body.carrierPhoneNumber,
    location: req.body.location,
    date: req.body.date,
    numberOfTrucksAvailable: req.body.numberOfTrucksAvailable,
    email: req.body.email
  });

  // Save Location in the database
  Location.create(location, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Location."
      });
    else {


        const msg = {
            to: '', // Change to your recipient
            from: 'himanshupahwa.hp@gmail.com', // Change to your verified sender
            subject: 'Location Info',
            text: 'Text',
            html: '', //email body
        }
        msg.to = data.email;

        msg.html ="Carrier Name: "+ data.carrier_name + "<br>"+
        "Carrier Phone Number: "+ data.carrier_phone_number + "<br>"+
        "Location of the truck: "+ data.location_truck + "<br>"+
        "Date of availability: "+ data.availability_date + "<br>"+
        "Number of trucks available: " + data.number_Of_trucks_available + "<br>"+
        "Email: " + data.email;

        //send email
        // sgMail.send(msg)
        // .then(() => {
        //     console.log('Email sent')
        // })
        // .catch((error) => {
        //     console.log(error);
        //     // res.status(400).send({
        //     //     message: 'email sending failed'
        //     //  });
        // })

        res.send(data);
    }
  });
};
