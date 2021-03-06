const permittedRoles = [
  "General Dev",
  "Game Design",
  "Programming",
  "Art",
  "Audio",
  "Narrative",
  "Community Member"
];

module.exports = {
  roles: message => {
    message.reply(`
To assign yourself a role, type !set-role [role-name]

Available roles:
${permittedRoles.map(r => ` - ${r}\n`)}
`);
  },
  addRole: message => {
    const roleName = message.content.replace("!set-role ", "");

    const role = message.guild.roles.find(r => r.name.toLowerCase() == roleName.toLowerCase());

    if (!role) {
      message.reply(`Can't find role "${roleName}"`);
    } else if (permittedRoles.map(r => r.toLowerCase()).indexOf(roleName.toLowerCase()) == -1) {
      message.reply(`You can't assing yourself the role "${roleName}"`);
    } else {
      message.member.addRole(role)
        .then(() => {
          message.reply("Your role is set!");
        })
        .catch(err => {
          message.reply("Sorry, I could not set your role, contact a Moderator.");
          /* eslint-disable no-console */
          console.error(err);
        });
    }
  }
}
