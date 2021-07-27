"use strict";
const {Client,Guild, Message} = require('discord.js'); // prototypler için çektirmiştim Guild ve message i işinize yarayabilir
const fetch = require('node-fetch'); // url spammer atıcaktım tatilde pcim olmadığı için yapamadım
const client = new Client();
const {token,whitelist,presence} = require('./Settings') // güncellemek isterseniz {botRole} vs çektirebilirsiniz
client.login(token).then(function(r) {console.log("Yep")}).catch(function(err) {console.error(err)});
const {} = require('./functions.js') // herhangi bir functions eklerseniz {funcName,funcName2} olarak çektirebilirsiniz

/*
Eksikleri vs olabilir dc den yazabilirsiniz Shinoa#7619 || Miaf#4990
botu shinoa ben yaptım ve ayrıca function() {} yerine => <{}> kullananların anasını sikeyim iyi günler
    const guild = client.guilds.cache.first()
await guild.closeAllAdministratorRoles()
---------------------------------------------------
await role.guild.closeAllAdministratorRoles()
// Yt kapatı eklemedim istediğiniz gibi kullanabilirsiniz

ve sey bir sik bilmeyip birilerinin botuyla ünlü olup 800 tane if kullanan arkadaşlara selamlar bu guardı kullanabilirsiniz işinize yarar belki 10 tane fonksiyonunuzu en boktan prototypm ile 8e katlayabilirim. Js bilgim miaf kadar yok salak saçma js ile ilgili sorunuz var miafa yazabilirsiniz iyi gunler diliyorum telefondan yazdigimida belli etmek isterim
*/


client.on("ready",async function() {
    console.log("Aktifmis oyle dediler")


    setInterval(async function(u) {
await client.user.setActivity(presence.random())
    },1000*60*15)
})

client.on("error", function(Error) {
    console.log("CLIENT ERROR",Error)
})
client.on("rateLimit", function(RateLimitData) {
    console.log("RATE LIMIT WARN",RateLimitData)
})

client.on("warn", function (warn) {
    console.log("CLIENT WARN",warn)
})

client.on("roleDelete",async function(role) {
    let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
if(!entry.executor || whitelist.includes(entry.executor.id) || client.user.id === entry.executor.id) return
role.guild.members.ban(entry.executor.id,{reason: "Role Guard"})
})

client.on("roleCreate",async function(role) {
    let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
    if(!entry.executor || whitelist.includes(entry.executor.id) || client.user.id === entry.executor.id) return
    role.guild.members.ban(entry.executor.id,{reason: "Role Guard"})
if(!role.deleted) role.delete({resaon: "Role Guard"})
})

client.on("channelCreate",async function(channel) {
    let entry = await channel.guild.fetchAuditLogs({type: 'CHANEL_CREATE'}).then(audit => audit.entries.first());
    if(!entry.executor || whitelist.includes(entry.executor.id) || client.user.id === entry.executor.id) return
    channel.guild.members.ban(entry.executor.id,{reason: "Channel Guard"})
if(!channel.deleted) channel.delete({reason: "Kanal Koruma"})
})


client.on("channelDelete",async function(channel) {
    let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
    if(!entry.executor || whitelist.includes(entry.executor.id) || client.user.id === entry.executor.id) return
    channel.guild.members.ban(entry.executor.id,{reason: "Channel Guard"})
})

client.on("guildUnavailable",async function(guild) {
    await guild.closeAllAdministratorRoles()
})

client.on("guildUpdate",async function(oldGuild,newGuild) {
    let entry = await oldGuild.fetchAuditLogs({type: 'GUILD_UPDATE'}).then(audit => audit.entries.first());
    if(!entry.executor || whitelist.includes(entry.executor.id) || client.user.id === entry.executor.id) return
    oldGuild.members.ban(entry.executor.id,{reason: "Guild Update Guard"})
newGuild.edit({...oldGuild})
})

client.on("roleUpdate",async function(oldRole,newRole) {
    let entry = await oldRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
if(!entry.executor || whitelist.includes(entry.executor.id) || client.user.id === entry.executor.id) return
oldRole.guild.members.ban(entry.executor.id,{reason: "Role Guard"})
newRole.edit({...oldRole})
})















process.on("uncaughtException", function (err)  {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.error("Uncaught Exception: ", errorMsg);
    process.exit(1);
});

process.on("unhandledRejection", function (err)  {
    console.error("Uncaught Promise Error: ", err);
});

