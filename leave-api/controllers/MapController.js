var rp = require('request-promise');
var MAP_KEY = require('../config').MAP_KEY;
var GOOGLE_MAPS_BASE_URL = require('../config').GOOGLE_MAPS_BASE_URL;

var MapController = {
  index: function(req, res, next) {
    var departureTime = parseInt(new Date().getTime()/1000),
        requestUrl = GOOGLE_MAPS_BASE_URL
                   + 'origin='
                   + req.params.origin
                   + '&destination='
                   + req.params.destination
                   + '&mode=driving'
                   + '&traffic_model=best_guess'
                   + '&departure_time='
                   + departureTime
                   + '&key='
                   + MAP_KEY;

    console.log(requestUrl);

    rp.get(requestUrl)
      .then(function(data, err){
        if (err) {
          res.status(500).send({
            status: 500,
            message: 'There was an error when attempting to process your request with the map service. Please try again later.',
            type: 'internal'
          });
        }

        data = JSON.parse(data);
        res.json(data);
      });
  }
};

module.exports = MapController;
