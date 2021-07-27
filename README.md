# Sa aşklarım tatilde sıkıntıdan yazdığım eksik bir bot
Botu tatilde aşırı sıkıntıdan yazdığım bir bot kafanıza göre kullanabilirsiniz eksikler var biliyorum ama yt kapatın çalışması gerek eval ile denemiştim ve eventlerin çoğu eksik örnek alarak yapabilirsiniz

## Kurulum
modülleri indirebilirsiniz
```js
npm i
```


```js
module.exports = {
    "token": "", // token
    "presence": ["Shinoa","Bla","SSSh"], // burda yazdığınız şeyleri random presence olarak ayarlar
    "whitelist": [], // sadece kişi id si girilen whitelist
    "botRole": [], // ana bot rolu tek yt kapandığında gitmiyor gerisine usendim-Ayarlamamış olabilirim
    "publicBotIDS": [], // normal owo gibi botların id si yt kapattığında onlarında yt si gitmez ama sunucunuzu outage'e sokucak kadar mal olup bi de botları rollü çekiyorsanız nasıl aptalsınız siz amk
    "AdministratorRolePermissions": ["ADMINISTRATOR","KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","MANAGE_GUILD","VIEW_AUDIT_LOG","MENTION_EVERYONE","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS","VIEW_GUILD_INSIGHTS","MANAGE_NICKNAMES"] // yt nin kapanacağı permler
}
```

## Ek

Bazı kullanımlarda anlamadığınız yer olursa belirtebilirsiniz biraz karışık yazıyor olabilirim veya hiç duymadığınız terimler
Shinoa#7619

