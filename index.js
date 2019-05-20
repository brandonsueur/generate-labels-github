const GitHub = require('github-api');
const config = require("./config.json");

const gh = new GitHub({
  token: config.token
});

const me = gh.getUser();

me.getProfile().then(user => {
  console.log(`👋🏻 Welcome ${user.data.name} !`, `\n`)
  console.log(`---------------------------- >>`)
});

// create repository
  // créer les différents labels(labels.js)