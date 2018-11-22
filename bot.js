console.log("the bot is working");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var tweet = { status: 'hello twitter world, all the way from node' };

T.post('statuses/update', tweet , postTweet );

function postTweet(err, data, response) {
  if (err) {
    console.log("something is wrong");
  }else{
   console.log("your bot works!");
 }
}
