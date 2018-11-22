console.log("the bot is working");

const twit = require("twit");

var T = new Twit({
  consumer_key:         '10EPs4fvErw3TCPuUB2NDHnjQ',
  consumer_secret:      'zx3AOMYl9hvasROzRi8lNSvllAyl26YVFHKVWwk4jD3i4OlRQL',
  access_token:         '1065539409204977665-7AzkskIgl5RdtyabzeqOhXBcCpsxb5 ',
  access_token_secret:  'V4Nbys4rzUmcWA04CcH3QwBkRxn4KjkLue3nzOfhAPoIg',
  timeout_ms:           60*1000,
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
