console.log("the bot is working");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params =  {
   q: 'doggo',
   count: 2
  }

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  console.log(data);
}
