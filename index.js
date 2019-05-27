const GitHub = require('github-api')
const config = require("./config.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()

me.getProfile()
.then(({data: user}) => {
  console.log(`👋🏻 Welcome ${user.name} !`, `\n`)
  
  remoteIssues = gh.getIssues(config.username, 'super-toto')

  remoteIssues.listLabels()
  .then(({data: labels}) => {
    let labelsArray = []
    
    labels.map(label => labelsArray.push(label.name))
    for (let i = 0; i < labelsArray.length; i++) {
      remoteIssues.deleteLabel(labelsArray[i])
    }

    console.log(`✅ Labels par défaut supprimé !`)
  })
  .then(() => {
    // for add labels
  })
})