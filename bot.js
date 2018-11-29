console.log("the bot is working");

var Twit = require('twit');

var config = require('./config');

var Tweets = require('./tweets');//file containing bot's tweets

var a = 0;


for (i in Tweets){//i for-loop to loop through the array of tweets
	var newTweet = Tweets[i];
}
var T = new Twit(config);
setInterval(twitBot, 1000*60*30)// interval for tweeting

//set up a stream
var stream = T.stream('user');

//when someone follows me
stream.on('follow', followed);

function followed(message){
  var name = message.source.name;
  var screenName = message.source.screen_name;
  tweetBack('@' + screenName + ' isn\'t the world a better place when we smile\.\.\.');
}

twitBot();

function twitBot(){
  var tweet = { status: newTweet  };

  T.post('statuses/update', tweet , postTweet );

  function postTweet(err, data, response) { //callback to monitor bot feedback from console
    if (err) {
      console.log("something is wrong");
    }else{
     console.log("your bot works!");
   }
  }
}

function tweetBack(reply){  //message sent to user after follow
  var tweet = { status: reply };

  T.post('statuses/update', tweet , postTweet );

  function postTweet(err, data, response) { //callback to monitor bot feedback from console
    if (err) {
      console.log("something is wrong");
    }else{
     console.log("your bot works!");
   }
  }
}
