const { getChannelByName, getRandomNumber } = require("./utils")

const getWelcomeMessage = (guildMember, client) => {
  const instruductionChannel = getChannelByName("introduction-yourself", client);
  const rulesChannel = getChannelByName("rules", client);
  const setYourRoleChannel = getChannelByName("set-your-role", client);
  const annoucementsChannel = getChannelByName("announcements", client);

  return`
Welcome ${guildMember}, please introduce yourself on ${instruductionChannel}, take a look on ${rulesChannel}, pickup your roles on ${setYourRoleChannel} and keep an eye on ${annoucementsChannel}.

We are looking for mentors and moderators, if you think you want to be one, send a DM to Harbrus.
`
}

module.exports = {
  createWelcome: client => {
    client.on("guildMemberAdd", guildMember => {
      const channel = getChannelByName("welcome-hall", client);
      channel.send(getWelcomeMessage(guildMember, client));
    });
  }
}
