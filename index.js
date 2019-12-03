const Discord = require('discord.js');
const { token, company, aqua } = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
    const { company} = require("./config.json");
    setInterval(async() => {
        const statuslist = [
            `Protecting your server by Keeping Newbies Out Of Your Servers`,
            `${client.user.tag} is being Powered By ${company}`
        ];
        const random = Math.floor(Math.random() * statuslist.length);
        try {
            await client.user.setPresence({
                game: {
                    name: `${statuslist[random]}`,
                    type: "watching",
                    //url: 'https://www.twitch.tv/midwest_hunter'
                }
            });
        } catch (error) {
            console.error(error);
        }
    }, 10000);
});

client.on('guildMemberAdd', async member=>{
    const u = 2815;
    const t = new Date().getTime();
    const n = 1.555e+10;
    if(member == client.user.name) return;
    if(u + n > t){
        
        console.log(`${member}'s account is older than 180 days`)
        return;
    } else{
        console.log(`${member.user.tag}'s Account is less than 180 days`)
        const {aqua} = require("./config.json");
        member.kick(member.user);
        const channel = member.guild.channels.find(ch => ch.name === 'antinewbie-log');
        const embed = new Discord.RichEmbed()
            .setTitle(`${member.displayName} Was Just Kicked From ${member.guild.name}`)
            .setURL('')
            .setThumbnail(member.user.avatarURL)
            .setColor(aqua)
            .setDescription(`_*\`${member.user.tag}\`*_ has been kicked by **${client.user.username}** For having an account less than or equal to ***\`180\`*** days`)
            .setTimestamp(new Date())
            .addField(`${member.displayName}'s Account Was Created on`, "```fix\n" + member.user.createdAt + "```", false)
            .setFooter(`${member.guild.name} | AntiNewb Security Bot`, client.user.displayAvatarURL)

        if (!channel) return;
        if(member == client) return;
        channel.send({ embed });
    }
})
client.login(token);