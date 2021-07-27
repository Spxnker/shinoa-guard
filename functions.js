"use strict";
const {Guild,GuildMember,User} = require('discord.js')
const {botRole,publicBotIDS,AdministratorRolePermissions,whitelist} = require('./Settings')
//Prototypes
Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
/*
param işlerinin nasıl olduğunu bilmiyorum ztn kullanılmıyor iyi günler dilerim backup vs paylaşabilirim isterseniz
*/
Guild.prototype.closeAllAdministratorRoles = async function() {
    if(!this) return null
    let myRoles = botRole.concat(publicBotIDS)
    let b = this.roles.cache.filter(r =>  r.managed &&!myRoles.includes(r.id) && AdministratorRolePermissions.some(u => r.permissions.has(u))) 
    for (const [key] of b) { // forEach atmamanın sebebi async forEach kullanınca clientin anasını siktiği için for let kullanıyorum genelde
        await this.roles.cache.get(key).setPermissions(0,"✅ Security") 
    }
    // niye key kullandığımı hatırlamıyorum eskiden yapmistim 
    return console.log(`[${this.name}] All Permissions Denied`) // burda return atmamın hiç bir sebebi yok atmayabilirsiniz 
}

/*
Guild.prototype.miafLog = async function (type, protect = false) {
    let Log = await this.fetchAuditLogs({ limit: 1, type }).then(x => x.entries.first())
    if (!Log) return true;
    let Id = Log.executor.id;
    if (!Log || this.ownerID === Id || (Date.now() - Log.createdTimestamp) >= 5000) return true;
    let sunucu = client.guilds.cache.first();
    let Member = await sunucu.members.fetch(Id);
    for(Id in Member){ await Member.kick() }
    
    return false;
};
isterseniz bunuda kullanabilirsiniz prototype olarak 
*/
