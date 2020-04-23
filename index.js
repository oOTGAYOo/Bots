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
                            msg.reply('Bạng đang trong ca làm việc. Hãy đợi '+Client.userdata [msg.author.username].work.WorkTimer+' s');
                        }else{
                            var rmoney = Math.floor(Math.random() * 30)+12;
                            msg.reply('Bạng bắt đầu ca làm việc!');
                            Client.userdata [msg.author.username].work.WorkTimer=30;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){
                                    Client.userdata[msg.author.username].nowmoney += rmoney;
                                    update();
                                    msg.reply('Bạng đã hoàn thành công việc!');
                                    const embeds = new MessageEmbed()
                                    .setTitle('Nhận được:')
                                    .setDescription(msg.author.username +': '+rmoney + ':dollar:')
                                    .setColor(0x00FFE8);
                                    msg.channel.send(embeds);                                                          
                                    clearInterval(workdone);
                                }
                            }, 1000);  
                        }
                        break;
                    case 2:
                        if(Client.userdata [msg.author.username].work.WorkTimer >1){
                            msg.reply('Bạng đang trong ca làm việc. Hãy đợi '+Client.userdata [msg.author.username].work.WorkTimer+' seconds');                          
                        }else{
                            var rmoney = Math.floor(Math.random() * 60)+24;
                            msg.reply('Bạng bắt đầu ca làm việc!');
                            Client.userdata [msg.author.username].work.WorkTimer=60;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){                                   
                                    Client.userdata[msg.author.username].nowmoney += rmoney;
                                    update();
                                    msg.reply('Bạng đã hoàn thành công việc!');
                                    const embeds = new MessageEmbed()
                                    .setTitle('Nhận được:')
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
                            msg.reply('Bạng đang trong ca làm việc. Hãy đợi '+Client.userdata [msg.author.username].work.WorkTimer+' secondss');                   
                        }else{
                            var rmoney = Math.floor(Math.random() * 10)+4;
                            msg.reply('Bạng bắt đầu ca làm việc!');
                            Client.userdata [msg.author.username].work.WorkTimer=10;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){                                   
                                    Client.userdata[msg.author.username].nowmoney += rmoney;
                                    update();
                                    msg.reply('Bạng đã hoàn thành công việc!');
                                    const embeds = new MessageEmbed()
                                    .setTitle('Nhận được:')
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
                            msg.reply('Bạng đang trong ca làm việc. Hãy đợi '+Client.userdata [msg.author.username].work.WorkTimer+' seconds');
                        }else{
                            var rmoney = Math.floor(Math.random() * 40)+16;
                            msg.reply('Bạng bắt đầu ca làm việc!');
                            Client.userdata [msg.author.username].work.WorkTimer = 40;
                            var workdone = setInterval(() => {
                                Client.userdata [msg.author.username].work.WorkTimer -= 1;
                                update();
                                if(Client.userdata [msg.author.username].work.WorkTimer==0){
                                        Client.userdata[msg.author.username].nowmoney += rmoney;
                                        update();
                                        msg.reply('Bạng đã hoàn thành công việc!');
                                        const embeds = new MessageEmbed()
                                        .setTitle('Nhận được:')
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
        case 'house':
        case 'h':
            switch (after[1]){
            	case 'l':
            	case 'living room':
            	case '1':
            	    if(Client.userdata [mas.author.username].livingroom.sofa ==1){
            	    	string id1 = 'Sofa';
            	    }else{
            	    	string id1 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].livingroom.table ==1){
            	    	string id2 = 'Table';
            	    }else{
            	    	string id2 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].livingroom.tv ==1){
            	    	string id3 = 'Tv';
            	    }else{
            	    	string id3 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].livingroom.bookcase ==1){
            	    	string id4 = 'Bookcase';
            	    }else{
            	    	string id4 = 'Nothing';
            	    }
            	    const embedd = new MessageEmbed()
                    .setTitle('Living Room')
                    .setDescription('This is your living room')
                    .addField(' ',id1)
                    .addField(' ',id2)
                    .addField(' ',id3)
                    .addField(' ',id4)
                    .setColor(0x00FF0F)
                    msg.channel.send(embedd);
            	break;
            	case 'b':
            	case 'bath room':
            	case '2':
            	    if(Client.userdata [mas.author.username].bathroom.sink ==1){
            	    	string id1 = 'Sink';
            	    }else{
            	    	string id1 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].bathroom.toilet ==1){
            	    	string id2 = 'Toilet';
            	    }else{
            	    	string id2 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].bathroom.shower ==1){
            	    	string id3 = 'Shower';
            	    }else{
            	    	string id3 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].bathroom.bathtub ==1){
            	    	string id4 = 'Bathtub';
            	    }else{
            	    	string id4 = 'Nothing';
            	    }
            	break;
            	case 'be':
            	case 'bed room':
            	case '4':
            	    if(Client.userdata [mas.author.username].bedroom.bed ==1){
            	    	string id1 = 'Bed';
            	    }else{
            	    	string id1 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].bedroom.wardrobe ==1){
            	    	string id2 = 'Wardrobe';
            	    }else{
            	    	string id2 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].bedroom.capinetnmirror ==1){
            	    	string id3 = 'Capinet & Mirror';
            	    }else{
            	    	string id3 = 'Nothing';
            	    }
            	    if(Client.userdata [mas.author.username].bedroom.tv ==1){
            	    	string id4 = 'Tv';
            	    }else{
            	    	string id4 = 'Nothing';
            	    }
            	break;
            	default:
            	msg.reply('Hãy nhập tên phòng');
            	break;
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
                    house: Client.userdata [msg.author.username]={
                    	livingroom: Client.userdata [msg.author.username]={
                    		sofa:0,
                    		table:0,
                    		tv:0,
                    		bookcase:0
                    	},
                    	bathroom: Client.userdata [msg.author.username]={
                    		sink:0,
                    		toilet:0,
                    		bathtub:0,
                    	    shower:0
                    	},
                    	kitchen: Client.userdata [msg.author.username]={
                    		stove:0,
                    		closet:0,
                    		chimney:0,
                    		frigde:0,
                    		dinnertable:0,
                    		dinnerchair:0,
                    		sink:0,
                    		dishwasher:0,
                    		kitchenappliances:0,
                    		kitcheneletricalappliances:0
                    	},
                    	bedroom: Client.userdata [msg.author.username]={
                    		bed:0,
                    		wardrobe:0,
                    		capinetnmirror:0,
                    	    tv:0
                    	}
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
        case 'j':
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
                    .addField('Use dui buy <shop id> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Sofa [1]','70:dollar:')
                    .addField('Table [2]','25:dollar:')
                    .addField('Tv [3]','150:dollar:')
                    .addField('Bookcase [4]','30:dollar:')
                    .setColor(0xFF8F00)
                    msg.channel.send(embedc);
                    break;
                case '2':
                case 'bathroom':
                    const embedd = new MessageEmbed()
                    .setTitle('BathRoom Shop')
                    .setDescription('This shop sell all kind of bathroom stuffs ')
                    .addField('Use dui buy <shop id> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Sink [1]','15:dollar:')
                    .addField('Toilet [2]','50:dollar:')
                    .addField('Shower [3]','40:dollar:')
                    .addField('Bathtub [4]','75:dollar:')
                    .setColor(0xFF8F00)
                    msg.channel.send(embedd);
                    break;
                case '3':
                case 'kitchen':
                    const embede = new MessageEmbed()
                    .setTitle('Kitchen Shop')
                    .setDescription('This shop sell all kind of kitchen stuffs ')
                    .addField('Use dui buy <shop id> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Stove [1]','50:dollar:')
                    .addField('Closet [2]','60:dollar:')
                    .addField('Chimney [3]','80:dollar:')
                    .addField('Frigde [4]','110:dollar:')
                    .addField('Sink [5]','25:dollar:')
                    .addField('Dish Washer [6]','40:dollar:')
                    .addField('Dinner Table [7]','35:dollar:')
                    .addField('Dinner Chair [8]','20:dollar:')
                    .addField('Kitchen appliances [9]','15:dollar:')
                    .addField('Kitchen electrical appliances [10]','25:dollar:')
                    .setColor(0xFF8F00)
                    msg.channel.send(embede);
                    break;  
                case '4':
                case 'bedroom':
                    const embedf = new MessageEmbed()
                    .setTitle('BedRoom Shop')
                    .setDescription('This shop sell all kind of bedroom stuffs ')
                    .addField('Use dui buy <shop id> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Bed [1]','120:dollar:')
                    .addField('Wardrobe [2]','80:dollar:')
                    .addField('Cabinet & Mirror[3]','55:dollar:')
                    .addField('Tv [4]','150:dollar:')
                    .setColor(0xFF8F00)
                    msg.channel.send(embedf);
                    break;
                case '5':
                case 'garden':
                    const embedg = new MessageEmbed()
                    .setTitle('Garden Shop')
                    .setDescription('This shop sell all kind of garden stuffs ')
                    .addField('Use dui buy <shop id> <item id> to buy things in the shop','Ballance: '+ Client.userdata[msg.author.username].nowmoney)
                    .addField('Use dui gplant <pot id> to plant tree','Use gwater <plant id> to water crops')
                    .addField('Use dui gseed to view all the seed','Use dui gseed <seed id> to buy the seed')
                    .addField('Use dui garden to view your garden','Use dui ginfo <pot id> for info of that pot')
                    .addField('Watering Cane [1]','30:dollar:')
                    .addField('Glove [2]','5:dollar:')
                    .addField('Pot [3]','5:dollar:')
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
            	case '1':
            	case 'l':
            	case 'living room':
            	    switch (after[2]){
            	    	case '1':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 70){
            	    	    	Client.userdata [msg.author.username].house.livingroom.sofa = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=70;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '2':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 25){
            	    	    	Client.userdata [msg.author.username].house.livingroom.table = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=25;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '3':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 150){
            	    	    	Client.userdata [msg.author.username].house.livingroom.tv = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=150;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '4':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 30){
            	    	    	Client.userdata [msg.author.username].house.livingroom.bookcase = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=30;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	default:
            	    	msg.reply('wrong command');
            	    	break;
            	    }
            	    break;
            	case '2':
            	case 'b':
            	case 'bath room':
            	    switch (after[2]){
            	    	case '1':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 15){
            	    	    	Client.userdata [msg.author.username].house.bathroom.sink = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=15;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '2':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 50){
            	    	    	Client.userdata [msg.author.username].house.bathroom.toilet = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=50;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '3':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 40){
            	    	    	Client.userdata [msg.author.username].house.bathroom.shower = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=40;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '4':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 75){
            	    	    	Client.userdata [msg.author.username].house.bathroom.bathtub = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=75;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	default:
            	    	msg.reply('wrong command');
            	    	break;
            	    }
            	    break;
            	case '3':
            	case 'k':
            	case 'kitchen':
            	    switch (after[2]){
            	    	case '1':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 50){
            	    	    	Client.userdata [msg.author.username].house.kitchen.stove = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=50;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '2':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 60){
            	    	    	Client.userdata [msg.author.username].house.kitchen.closet = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=60;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '3':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 80){
            	    	    	Client.userdata [msg.author.username].house.kitchen.chimney = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=80;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '4':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 110){
            	    	    	Client.userdata [msg.author.username].house.kitchen.frigde = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=110;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '5':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 25){
            	    	    	Client.userdata [msg.author.username].house.kitchen.sink = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=25;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '6':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 40){
            	    	    	Client.userdata [msg.author.username].house.kitchen.dishwasher = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=40;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '7':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 35){
            	    	    	Client.userdata [msg.author.username].house.kitchen.dinnertable = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=35;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '8':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 20){
            	    	    	Client.userdata [msg.author.username].house.kitchen.dinnerchair = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=20;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '9':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 15){
            	    	    	Client.userdata [msg.author.username].house.kitchen.kitchenappliances = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=15;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '10':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 25){
            	    	    	Client.userdata [msg.author.username].house.kitchen.kitcheneletricalappliances = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=25;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	default:
            	    	msg.reply('wrong command');
            	    	break;
            	    }
            	    break;
            	case '4':
            	case 'be':
            	case 'bed room':
            	    switch (after[2]){
            	    	case '1':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 120){
            	    	    	Client.userdata [msg.author.username].house.bedroom.bed = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=120;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '2':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 80){
            	    	    	Client.userdata [msg.author.username].house.bedroom.wardrobe = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=80;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '3':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 55){
            	    	    	Client.userdata [msg.author.username].house.bedroom.cabinetnmirror = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=55;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	case '4':
            	    	    if(Client.userdata [msg.author.username].nowmoney >= 150){
            	    	    	Client.userdata [msg.author.username].house.bedroom.tv = 1;
            	    	    	Client.userdata [msg.author.username].nowmoney -=150;
            	    	    	msg.reply('Cảm ơn vì đã mua hàng!')
            	    	    }else{
            	    	    	msg.reply('Bạng hok đủ tiền mua cái này, cần thêm ');
            	    	    }
            	    	break;
            	    	default:
            	    	msg.reply('wrong command');
            	    	break;
            	    }
            	    break;
                case 'garden':
                case '5':
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
                    msg.reply('wrong command :v');
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
