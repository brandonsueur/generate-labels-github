const GitHub = require('github-api');
const config = require("./config.json");

// basic auth
var gh = new GitHub({
  username: config.username,
  password: config.password,
  token: config.token
});

var me = gh.getUser(); 
console.log(me);

// créer un dépôt
  // créer les différents labels(labels.js)