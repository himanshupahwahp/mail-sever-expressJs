# Mail Server ExpressJs app
This api app accept the post request and store the data in database. It also sends the data to the "email" provided in post request.

In 'location.controler.js' file you need to add your api key by creating account on 'sendgrid' mail which is required to send email.


## Api
Post api -  /api/locations
```sh 
 Body - {
   "carrierName":"value",
   "carrierPhoneNumber":9876543210,
   "location":"value",
   "date":"2021-12-01",
   "numberOfTrucksAvailable":43,
   "email":"email id"
}
```
## Database Create Query
```sh 
CREATE TABLE `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carrier_name` varchar(255) DEFAULT NULL,
  `carrier_phone_number` bigint DEFAULT NULL,
  `location_truck` varchar(255) DEFAULT NULL,
  `availability_date` date DEFAULT NULL,
  `number_of_trucks_available` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

