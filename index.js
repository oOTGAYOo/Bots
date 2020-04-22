const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
const PREFIX = 'dui ';
const BOT_TOKEN = '';
const fs = require("fs");
const CoolDown = new Set();
function update(){
    fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
        if(err) msg.reply('Type dui start to begin');
    })
}
Client.userdata = require("./userdata.json");
bot.on('ready', () =>{
    console.log('It Aliveee');
    bot.user.setStatus('online');
    bot.user.setActivity('SimpleLo...Life');
})
bot.on('message', msg=>{
    let after = msg.content.substring(PREFIX.length).split(" ");
    switch(after[0]){
        case 'w':
        case 'work':
            if(Client.userdata [msg.author.username] == null){
            msg.reply('Type dui start to begin');
            }else{
            if(Client.userdata[msg.author.username].jobid == 0){
                msg.reply('Choose a job by typing dui choosejob <job id>');
                msg.channel.send('You can find the jobs id in dui jobs');
            }else{
                switch (Client.userdata[msg.author.username].jobid) {
                    case 1:
                        if(Client.userdata [msg.author.username].work.WorkTimer >1){
                            msg.reply('You are too tired to work now.Pls wait '+Client.userdata [msg.author.username].work.WorkTimer+' seconds');
                        }else{
                            var rmoney = Math.floor(Math.random() * 30)+12;
                            Client.userdata [msg.author.username].work.WorkTimer=30;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){
                                    Client.userdata[msg.author.username].nowmoney =+ rmoney;
                                    update();
                                    msg.reply('You finish your work:');
                                    const embeds = new MessageEmbed()
                                    .setTitle('Earned:')
                                    .setDescription(msg.author.username +': '+rmoney + ' :dollar:')
                                    .setColor(0x00FFE8);
                                    msg.channel.send(embeds);                                                          
                                    clearInterval(workdone);
                                }
                            }, 1000);  
                        }
                        break;
                    case 2:
                        if(Client.userdata [msg.author.username].work.WorkTimer >1){
                            msg.reply('You are too tired to work now.Pls wait '+Client.userdata [msg.author.username].work.WorkTimer+' seconds');                          
                        }else{
                            var rmoney = Math.floor(Math.random() * 60)+24;
                            Client.userdata [msg.author.username].work.WorkTimer=60;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){                                   
                                    Client.userdata[msg.author.username].nowmoney =+ rmoney;
                                    update();
                                    msg.reply('You finish your work:');
                                    const embeds = new MessageEmbed()
                                    .setTitle('Earned:')
                                    .setDescription(msg.author.username +': '+rmoney + ' :dollar:')
                                    .setColor(0x00FFE8);
                                    msg.channel.send(embeds);                       
                                    clearInterval(workdone);
                                }
                            }, 1000);  
                        }                        
                        break;
                    case 3:
                        if(Client.userdata [msg.author.username].work.WorkTimer >1){
                            msg.reply('You are too tired to work now.Pls wait '+Client.userdata [msg.author.username].work.WorkTimer+' secondss');                   
                        }else{
                            var rmoney = Math.floor(Math.random() * 10)+4;
                            Client.userdata [msg.author.username].work.WorkTimer=10;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){                                   
                                    Client.userdata[msg.author.username].nowmoney =+ rmoney;
                                    update();
                                    msg.reply('You finish your work:');
                                    const embeds = new MessageEmbed()
                                    .setTitle('Earned:')
                                    .setDescription(msg.author.username +': '+rmoney + ' :dollar:')
                                    .setColor(0x00FFE8);
                                    msg.channel.send(embeds);                    
                                    clearInterval(workdone);
                                }
                            }, 1000);  
                        }                        
                        break;
                    case 4:
                        if(Client.userdata [msg.author.username].work.WorkTimer >0){
                            msg.reply('You are too tired to work now.Pls wait '+Client.userdata [msg.author.username].work.WorkTimer+' seconds');
                        }else{
                            var rmoney = Math.floor(Math.random() * 40)+16;
                            Client.userdata [msg.author.username].work.WorkTimer = 40;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){
                                        Client.userdata[msg.author.username].nowmoney =+ rmoney;
                                        update();
                                        msg.reply('You finish your work:');
                                        const embeds = new MessageEmbed()
                                        .setTitle('Earned:')
                                        .setDescription(msg.author.username +': '+rmoney + ' :dollar:')
                                        .setColor(0x00FFE8);
                                        msg.channel.send(embeds);
                                    clearInterval(workdone);
                                }
                            }, 1000);  
                        }
                        break; 
                }
            }
        }
        break;
        case 'balance':
        case 'bal':
            if(Client.userdata [msg.author.username] == null){
                msg.reply('Type dui start to begin');
            }else{
            let _msg = Client.userdata[msg.author.username].nowmoney;
            const embed = new MessageEmbed()
                .setTitle('Bank:')
                .addField(msg.author.username+' Balance:', _msg)
                .setColor(0x00FFE8);
                msg.channel.send(embed);
                update();
            }
        break;
        case 'avatar':
        case 'avt':
            msg.reply(msg.author.displayAvatarURL());
        break;
        case 'start':
            if(Client.userdata [msg.author.username] == null){
                Client.userdata [msg.author.username] = {
                    jobid: 0,
                    nowmoney: 0,
                    work: Client.userdata [msg.author.username]={
                        WorkTimer: 0,
                        Iswork: 1
                    },
                    dailyreward: Client.userdata [msg.author.username]={
                        dailyTimer: 0,
                        Isdaily: 1
                    },
                    garden: Client.userdata [msg.author.username]={
                        potnumber: 0
                    }

                }
                fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
                    if(err) msg.reply('Press dui start to begin');
                    msg.reply('Wellcome to SimpleLife');
                    msg.channel.send('Type dui jobs for job list');
                    msg.channel.send('And type dui choosejob <job id> to choose a job');
                })
            }else{
                msg.reply("You already start the game oc cko")
            }
        break;
        case 'halp':
        case 'help':
            const embeda = new MessageEmbed()
                .setTitle('Help')
                .addField('dui start', 'Start the game')
                .addField('dui jobs', 'Show list of jobs')
                .addField('dui choosejob <job id>', 'Choose a job')
                .addField('dui work', 'Go to work')
                .addField('dui shop', 'Open shop menu')
                .addField('dui buy <item id>', 'Buy an item')
                .setColor(0x424242);
                msg.channel.send(embeda);
        break;
        case 'jobs':
            const embedb = new MessageEmbed()
            .setTitle('Jobs list')
            .addField('Chopping woods [1]','With this job you will get 1-30$ per work and 30 seconds cooldown')
            .addField('Fishing [2]','With this job you will get 1-60$ per work and 60 seconds cooldown')
            .addField('Waiter [3]','With this job you will get 1-10$ per work and 10 seconds cooldown')
            .addField('Cleaner [4]','With this job you will get 1-40$ per work and 40 seconds cooldown')
            .setColor(0xC5FF00)
            msg.channel.send(embedb);
        break;
        case 'cj':
        case 'choosejob':
            if(Client.userdata [msg.author.username].work.WorkTimer<=0){
            switch (after[1]) {
                case '1':
                    msg.reply('You chose Chopping woods');
                    Client.userdata[msg.author.username].jobid = 1;
                    update();
                    break;
                case '2':
                    msg.reply('You chose Fishing');
                    Client.userdata[msg.author.username].jobid = 2;
                    update();
                    break;
                case '3':
                    msg.reply('You chose Waiter');
                    Client.userdata[msg.author.username].jobid = 3;
                    update();
                    break;
                case '4':
                    msg.reply('You chose Cleaner');
                    Client.userdata[msg.author.username].jobid = 4;
                    update();
                    break;
                default :
                    msg.reply('Wrong Command :v');
                    break;     
            }
        }else{
            msg.reply('Pls done your work before changing the job ')
        }
        break;
        case 's':
        case 'shop':
            switch (after[1]) {
                case '1':
                case 'livingroom':
                    const embedc = new MessageEmbed()
                    .setTitle('LivingRoom Shop')
                    .setDescription('This shop sell all kind of livingroom stuffs')
                    .addField('Use dui buy <shop name> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Sofa [1]','70$')
                    .addField('Table [2]','25$')
                    .addField('Tv [3]','150$')
                    .addField('Bookcase [4]','30$')
                    .setColor(0xFF8F00)
                    msg.channel.send(embedc);
                    break;
                case '2':
                case 'bathroom':
                    const embedd = new MessageEmbed()
                    .setTitle('BathRoom Shop')
                    .setDescription('This shop sell all kind of bathroom stuffs ')
                    .addField('Use dui buy <shop name> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Sink [1]','15$')
                    .addField('Toilet [2]','50$')
                    .addField('Shower [3]','40$')
                    .addField('Bathtub [4]','75$')
                    .setColor(0xFF8F00)
                    msg.channel.send(embedd);
                    break;
                case '3':
                case 'kitchen':
                    const embede = new MessageEmbed()
                    .setTitle('Kitchen Shop')
                    .setDescription('This shop sell all kind of kitchen stuffs ')
                    .addField('Use dui buy <shop name> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Stove [1]','50$')
                    .addField('Closet [2]','60$')
                    .addField('Chimney [3]','80$')
                    .addField('Frigde [4]','110$')
                    .addField('Sink [5]','25$')
                    .addField('Dish Washer [6]','40$')
                    .addField('Dinner Table [7]','35$')
                    .addField('Dinner Chair [8]','20$')
                    .addField('Kitchen appliances [9]','15$')
                    .addField('Kitchen electrical appliances [10]','25$')
                    .setColor(0xFF8F00)
                    msg.channel.send(embede);
                    break;  
                case '4':
                case 'bedroom':
                    const embedf = new MessageEmbed()
                    .setTitle('BedRoom Shop')
                    .setDescription('This shop sell all kind of bedroom stuffs ')
                    .addField('Use dui buy <shop name> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Bed [1]','120$')
                    .addField('Wardrobe [2]','80$')
                    .addField('Cabinet & Mirror[3]','55$')
                    .addField('Tv [4]','150$')
                    .setColor(0xFF8F00)
                    msg.channel.send(embedf);
                    break;
                case '5':
                case 'garden':
                    const embedg = new MessageEmbed()
                    .setTitle('Garden Shop')
                    .setDescription('This shop sell all kind of garden stuffs ')
                    .addField('Use dui buy <shop name> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Use dui gplant <pot id> to plant tree','Use gwater <plant id> to water crops')
                    .addField('Use dui gseed to view all the seed','Use dui gseed <seed id> to buy the seed')
                    .addField('Use dui garden to view your garden','Use dui ginfo <pot id> for info of that pot')
                    .addField('Watering Cane [1]','30$')
                    .addField('Glove [2]','5$')
                    .addField('Pot [3]','5$')
                    .setColor(0x0CFF00)
                    msg.channel.send(embedg);
                    break;
                default:
                    const embedb = new MessageEmbed()
                    .setTitle('Shop')
                    .setDescription('Use dui shop <id> to go to specific shop.')
                    .addField('Shop id: [1]','Living Room')
                    .addField('Shop id: [2]','BathRoom')
                    .addField('Shop id: [3]','Kitchen')
                    .addField('Shop id: [4]','BedRoom')
                    .addField('Shop id: [5]','Garden')
                    .setColor(0x00FF0F)
                    msg.channel.send(embedb);
                    break;
                }
            break;
        case 'buy':
            switch (after[1]) {
                case 'garden':
                case 'g':
                    switch (after[2]) {
                        case '3':
                            if(Client.userdata [msg.author.username].nowmoney >= 5){
                                Client.userdata [msg.author.username].garden.potnumber += 1;
                                Client.userdata [msg.author.username].nowmoney -=5;
                                msg.reply('Thanks for buying')
                                update();
                            }else{
                                msg.reply('You dont have enough money.')
                            }
                        break;
                        default:
                            msg.reply('wrong command 2');
                            msg.channel.send(after[2]);
                        break;
                    }
                break;     
                default:
                    msg.reply('wrong command 1');
                    break;
            }
        break;
        case 'daily':
            var dailys = Math.floor(Math.random() * 100)+30;
            if(Client.userdata [msg.author.username].dailyreward.Isdaily!=0){
                Client.userdata [msg.author.username].dailyreward.dailyTimer = 86400;
                Client.userdata [msg.author.username].dailyreward.Isdaily=0;
                Client.userdata [msg.author.username].nowmoney += dailys;
                update();
                msg.reply('You earned '+ dailys + '$ from daily.');
                var dailydone = setInterval(() => {
                    Client.userdata [msg.author.username].dailyreward.dailyTimer -= 1;
                    update();
                    if(Client.userdata [msg.author.username].dailyreward.dailyTimer<0){
                        Client.userdata [msg.author.username].dailyreward.Isdaily=1;
                        update();
                        clearInterval(dailydone);
                    }
                }, 1000);
                return;
            }else{
                var hours = Math.round(Client.userdata [msg.author.username].dailyreward.dailyTimer/3600)-1;
                var min = Math.round((Client.userdata [msg.author.username].dailyreward.dailyTimer/3600 - hours) * 60)-1;
                msg.channel.send('You just get daily reward pls wait '+ hours+'h'+ min +'m');
            }
        break;
        case 'gseed':
            switch (after[1]){
                case '1':
                    msg.channel.send('hi');
                    break;
                case 'list':
                    const embedd = new MessageEmbed()
                    .setTitle('Seed Shop')
                    .setDescription('Use dui gseed <seed id> to buy seed.')
                    .addField(' hi lemon: [1]',':lemon:')
                    .addField('hi carrot: [2]','BathRoom')
                    .addField('hi potato: [3]','Kitchen')
                    .addField('hi Weed: [4]','BedRoom')
                    .addField('Seed id: [5]','Garden')
                    .setColor(0x00FF0F)
                    msg.channel.send(embedd);
                break;
            }
    }  
})
bot.login(process.env.BOT_TOKEN);