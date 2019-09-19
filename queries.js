/* Add all the required libraries*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('./config');
var Listing = require('./ListingSchema.js');
var idone = "5d83e3a64f510540c4d9f4f4";
var idtwo = "5d83e3a64f510540c4d9f516";
var idthree = "5d840192ec203b507807b6a1";

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect('mongodb+srv://guest:readycheck@cluster0-qzi2i.mongodb.net/test?retryWrites=true&w=majority');

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var listingSchemathree = new Schema({
  code: { type: String, required: true}, 
  name: { type: String, required: true}, 
  address: { type: String},
  coordinates: {
      latitude:  mongoose.Decimal128, 
      longitude:  mongoose.Decimal128
  },
  created_at: {type: Date},
  upated_at: {type: Date}
 } );

var findLibraryWest = function() {
  var mongooselisting = mongoose.model('listing', listingSchemathree);
  mongooselisting.findById(idone, function (err, doc){
  console.log(doc)
}
)};

var removeCable = function() {
  var mongooselistingfour = mongoose.model('listing', listingSchemathree);
mongooselistingfour.findOneAndRemove(idthree, function(err, doc){
  console.log(doc);
})
};

var updatePhelpsLab = function() {
  var mongooselistingthree = mongoose.model('listing', listingSchemathree);
  mongooselistingthree.findByIdAndUpdate(idtwo, 
  {code: 'PHL', 
  name: 'Phelps Laboratory', 
  coordinates: {
      latitude: 41.1091195, 
      longitude: -73.8639555
  }, 
  address: '1953 Museum Rd, Gainesville, FL 32603'},
  function(err, doc){
    console.log(doc);
  })
};

var retrieveAllListings = function() {
  var mongooselistingtwo = mongoose.model('listing', listingSchemathree);
  mongooselistingtwo.find({}, function(err, doc){
    console.log(doc);
  }
  );
}
findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603
   */