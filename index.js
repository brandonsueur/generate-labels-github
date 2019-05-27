const GitHub = require('github-api')
const config = require("./config.json")
const labelsFile = require("./labels.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()

me.getProfile()
.then(({data: user}) => {
  console.log(`👋🏻 Welcome ${user.name} !`, `\n`)
  
  remoteIssues = gh.getIssues(config.username, 'super-toto')

  remoteIssues.listLabels()
  .then(({data: labels}) => {
    let labelsArray = []
    
    if(labelsArray.length > 1){
      labels.map(label => labelsArray.push(label.name))
      for (let i = 0; i < labelsArray.length; i++) {
        remoteIssues.deleteLabel(labelsArray[i])
      }

      console.log(`✅ Labels par défaut supprimé !`)
    }
  })
  .then(() => {
    label = { name: "toto", color: "red"}
    remoteIssues.createLabel(label)
    .then(({data: _createdLabel}) => {
      createdLabel = label.name
    })

    // console.log(labelsFile.length)
    // for (let i = 0; i < labelsFile.length; i++) {
    //   let labelsExample = {
    //     name: labelsFile[i].name,
    //     color: labelsFile[i].color,
    //   }

    //   console.log(labelsExample);

     
      
      
    //}
    // console.log(labelsFile[])
    
  })
})