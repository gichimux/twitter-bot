console.log("the bot is working");

var Twit = require('twit');

var config = require('./config');

//set up a stream
var stream = T.stream('user');

//when someone follows me
stream.on('follow', followed);

function followed(message){
  var name = message.source.name;
  var screenName = message.source.screen_name;
  tweetBack('Hey ''@' + 'screenName' + ' isn\'t the world a better place when we smile\.\.\.')
}

var Tweets = require('./tweets');//file containing bot's tweets

var i = 0;

  for (i>=0; i<5; i++){a=i;};//a for-loop to loop through the array of tweets

var T = new Twit(config);
setInterval(twitBot, 1000*60*30)// interval for tweeting

twitBot();

function twitBot(){
  var tweet = { status: Tweets[a] };//a ==index of new tweet in the array

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
