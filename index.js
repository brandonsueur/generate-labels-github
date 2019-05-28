const GitHub = require('github-api')
const config = require("./config.json")
const labelsFile = require("./labels.json")

const gh = new GitHub({ token: config.token })
const me = gh.getUser()


const main = async () => {
  const { data: user } = await me.getProfile()
  console.log(`👋🏻 Welcome ${user.name} !`, `\n`)

  const remoteIssues = gh.getIssues(config.username, 'toto')
  const { data: labels } = await remoteIssues.listLabels()
  await Promise.all(labels.map(label => remoteIssues.deleteLabel(label.name)))
  console.log(`✅ Labels par défaut supprimé !`)

  const label = { name: "toto", color: "#ff000"}
  await remoteIssues.createLabel(label)
}

main()