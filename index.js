const GitHub = require('github-api')
const config = require("./config.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()

// me.getProfile().then(({data: user}) => {
//   console.log(`👋🏻 Welcome ${user.name} !`, `\n`)
//   console.log(`---------------------------- >>`)
// })

me.createRepo({'name': config.repository}).then(repo => {
  console.log(`✅ Le dépôt ${config.repository} est créé.`)

  // add labels in repo
})
.catch(err => {
  if(err.response.status === 422) console.log(`❌ Le dépôt existe déjà !`)
})