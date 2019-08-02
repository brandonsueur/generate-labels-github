const GitHub = require('github-api')
const config = require("./config.json")
const labelsFile = require("./labels.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()

const main = async () => {
  const { data: user } = await me.getProfile()
  console.log(`👋🏻 Welcome ${user.name} !`, `\n`)

  const remoteIssues = gh.getIssues(config.username, config.repository)

  // delete labels
  const { data: labels } = await remoteIssues.listLabels()
  await Promise.all(labels.map(label => remoteIssues.deleteLabel(label.name)))
  console.log(`✅ Labels par défaut supprimé !`)

  // add new labels
  remoteIssues.createLabel({name: 'test'})
  .then(({ data: _createdLabel }) => {
    for (let i = 0; i < labelsFile.length; i++) {
      let labelsExample = {
        name: labelsFile[i].name,
        color: labelsFile[i].color,
      }

      remoteIssues.createLabel(labelsExample)
    }

    console.log(`✅ Nouveaux Labels ajoutés`)
  })
  .then(() => remoteIssues.deleteLabel('test'))
}

main()