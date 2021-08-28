const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const { MessageButton } = require('discord-buttons')
module.exports = {
  name: "support",
  category: "🔰 Info",
  usage: "invite",
  description: "Sends you the Support Server Link",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed")
    try {
      let button_public_invite = new MessageButton().setStyle('url').setLabel('Invite Public Bot').setURL("https://discord.com/api/oauth2/authorize?client_id=815949826034106368&permissions=8&redirect_uri=https%3A%2F%2Fdashboard.botghost.com%2Fdashboard&scope=bot")
      let button_support_dc = new MessageButton().setStyle('url').setLabel('Support Server').setURL("https://discord.gg/FTbJmrVq5t")
      let button_invite = new MessageButton().setStyle('url').setLabel('Invite this Bot').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
      //array of all buttons
      const allbuttons = [button_public_invite, button_support_dc, button_invite]
      message.channel.send({
        embed: new MessageEmbed()
          .setColor(ee.color)
          .setTitle(":tickets: You Need Help? **JOIN OUR SUPPORT SERVER**")
          .setDescription(`**[Invite Public Bot](https://discord.com/api/oauth2/authorize?client_id=815949826034106368&permissions=8&redirect_uri=https%3A%2F%2Fdashboard.botghost.com%2Fdashboard&scope=bot)  •  [WEBSITE](https://v390m0us.blogspot.com/)  •  [Support Server](https://discord.gg/FTbJmrVq5t)**`)
          .setFooter("Zalgo", "https://imgur.com/jPItIw0.gif")
          .setURL("https://discord.com/api/oauth2/authorize?client_id=865279052716834856&permissions=8&scope=bot"),
        buttons: allbuttons
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(es.footertext, es.footericon)
        .setTitle(`<:no:833101993668771842> An error occurred`)
        .setDescription(`\`\`\`${String(JSON.stringify(e)).substr(0, 2000)}\`\`\``)
      );
    }
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
