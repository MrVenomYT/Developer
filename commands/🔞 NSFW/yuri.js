const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const {MessageEmbed} = require('discord.js')
const config = require("../../botconfig/config.json")
module.exports = {
      name: "yuri",
      category: "🔞 NSFW",
      usage: "yuri",
      run: async (client, message, args, cmduser, text, prefix) => {
            let es = client.settings.get(message.guild.id, "embed")
            if (!client.settings.get(message.guild.id, "NSFW")) {
                  return message.channel.send(new MessageEmbed()
                        .setColor(es.wrongcolor)
                        .setFooter(es.footertext, es.footericon)
                        .setTitle(`<:no:833101993668771842> THIS COMMAND IS CURRENTLY DISABLED`)
                        .setDescription(`An Admin can enable it with: \`${prefix}setup-commands\``)
                  );
            }
            if (!message.channel.nsfw) {
                  message.react('💢');
                  return message.reply("This Channel is not a NSFW Channel")
                        .then(msg => {
                              msg.delete({
                                    timeout: 3000
                              })
                        })
            }

            let owo = (await neko.nsfw.yuri());
            const yuri = new Discord.MessageEmbed()
                  .setTitle("Yuri")
                  .setImage(owo.url)
                  .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null).setFooter(es.footertext, es.footericon)
                  .setURL(owo.url);
            message.channel.send(yuri);
      }
};