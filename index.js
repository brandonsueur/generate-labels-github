const GitHub = require('github-api')
const config = require("./config.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()

remoteIssues = gh.getIssues(config.username, "testing0.8951083679396072");

remoteIssues.listLabels().then(({data: labels}) => {
  const labelsName = labels.map(label => label.name)
  remoteIssues.deleteLabel(...labelsName)
})
.catch(err => console.log(err))

// me.getProfile()
// .then(({data: user}) => {
//   console.log(`👋🏻 Welcome ${user.name} !`, `\n`)
// })
// .then(() => {
//   me.createRepo({'name': config.repository + Math.random(), 'public': false}).then(({data: repo}) => {
//     console.log(`✅ Le dépôt ${config.repository} est créé.`, `\n`)
//     console.log(`🔎 ${repo.html_url}`, `\n`)

//     remoteIssues = gh.getIssues(config.username, config.repository);
//     remoteIssues.listLabels({}, (labels) => console.log(...labels))
//   })
//   .catch(err => {
//     if(err) console.log(`❌ Le dépôt existe déjà !`)
//   })
// })