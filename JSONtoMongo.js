'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var test = 0;
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    jsonlistings = require('./listings.json');

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
mongoose.connect('mongodb+srv://guest:readycheck@cluster0-qzi2i.mongodb.net/test?retryWrites=true&w=majority');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
/*var listingData = JSON.parse(fs.readFileSync('listings.json', 'utf8'))['listingData'];*/
/*fs.readFile('listings.json', 'utf8', function(err, data){
  if (err) throw err;
  JSON.parse(data);
  var listingData = data;
  console.log(listingData);
});*/
var listingSchematwo = new Schema({
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


jsonlistings.entries.forEach(function(element){
  var mongooselisting = mongoose.model('listing', listingSchematwo);
  var alisting = new mongooselisting;
  alisting.code = element.code;
  alisting.name = element.name;
  if (element.coordinates){
  alisting.coordinates = element.coordinates;
  }
  if (element.address){
  alisting.address = element.address;
  }
  alisting.save(function(err){
    if (err) throw err;
  })
});
/*
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */