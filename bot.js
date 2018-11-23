console.log("the bot is working");

var Twit = require('twit');

var config = require('./config');

var Tweets = require('./tweets');

var i = 1;

  for (i>=1; i<5; i++){a=i;};

var T = new Twit(config);
setInterval(twitBot, 1000*60*30)

twitBot();

function twitBot(){
  var tweet = { status: Tweets[a] };

  T.post('statuses/update', tweet , postTweet );

  function postTweet(err, data, response) {
    if (err) {
      console.log("something is wrong");
    }else{
     console.log("your bot works!");
   }
  }
}
