const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const config = require("../../botconfig/config.json")
const {MessageEmbed} = require('discord.js')
module.exports = {
      name: "2dboobs",
      category: "🔞 NSFW",
      usage: "2dboobs",
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
            if (!message.channel.nsfw) return message.reply("This Channel is not a NSFW Channel").then(msg => {
                  message.react('💢');
                  msg.delete({
                        timeout: 3000
                  })
            })
            let owo = (await neko.nsfw.boobs());
            const boobs = new Discord.MessageEmbed()
                  .setTitle("2D Boobs")
                  .setImage(owo.url)
                  .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null).setFooter(es.footertext, es.footericon)
                  .setURL(owo.url);
            message.channel.send(boobs);


      }
};