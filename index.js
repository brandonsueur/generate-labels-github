const GitHub = require('github-api')
const config = require("./config.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()

me.getProfile()
.then(({data: user}) => {
  console.log(`👋🏻 Welcome ${user.name} !`, `\n`)
})
.then(() => {
  // me.createRepo({'name': config.repository, 'public': false})
  // .then(({data: repo}) => {
  //   console.log(`✅ Le dépôt ${config.repository} est créé.`, `\n`)
  //   console.log(`🔎 ${repo.html_url}`, `\n`)
  // }).catch(err => console.log(err))
})
.then(() => {
  remoteIssues = gh.getIssues(config.username, config.repository);
  remoteIssues.listLabels().then(({data: labels}) => {
    let labelsArray = []
    
    labels.map(label => labelsArray.push(label.name))
  
    for (let i = 0; i < labelsArray.length; i++) {
      remoteIssues.deleteLabel(labelsArray[i])
    }

    console.log(`👌🏼 Labels par défaut supprimé !`)

  })
  .catch(err => console.log(err))
})