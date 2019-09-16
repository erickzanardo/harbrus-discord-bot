const { getChannelByName, getRandomNumber } = require("./utils")

const getWelcomeMessage = (guildMember, client) => {
  const introductionChannel = getChannelByName("introduce-yourself", client);
  const rulesChannel = getChannelByName("rules", client);
  const setYourRoleChannel = getChannelByName("set-your-role", client);
  const annoucementsChannel = getChannelByName("announcements", client);

  return`
  Welcome ${guildMember}, I am Ghor Ranulf Parnell Borum Alum Belgarfind, General of the Dwarvish army, Dragons-Binder, Demons-Slayer, Bringer of Peace, and High-Wizard Professor here. Now, please introduce yourself on ${introductionChannel}, take a careful look on ${rulesChannel}, pickup your roles on ${setYourRoleChannel} and keep an eye on ${annoucementsChannel}. We have also a form to fill-in for people interested in teaching and studying (optional). <https://docs.google.com/forms/d/1gWWrB2Ectt5xvUqTLDiVk00btfB85T986hBaIes7Jbg/edit?usp=sharing>
`
}

module.exports = {
  createWelcome: client => {
    client.on("guildMemberAdd", guildMember => {
      const channel = getChannelByName("welcome", client);
      channel.send(getWelcomeMessage(guildMember, client));
    });
  }
}
