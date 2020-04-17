const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const bot = new Discord.Client();
const PREFIX = 'dui ';
const fs = require("fs");
const ytdl = require("ytdl-core");
const queue = new Map();
const CoolDown = new Set();
Client.userdata = require("./userdata.json");
function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	serverQueue.dispatcher = connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
bot.on('ready', () =>{
    console.log('It Aliveee');
    bot.user.setStatus('online');
    bot.user.setActivity('SimpleLo...Life');
})
bot.on('message', msg=>{
    let after = msg.content.substring(PREFIX.length).split(" ");
    const serverQueue = queue.get(msg.guild.id);
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
                        if(CoolDown.has(msg.author.id)){
                            msg.reply('You are too tired to work now. Pls wait 30 seconds per work');
                            var IsCoolDown = 1;
                        }else{
                            var rmoney = Math.floor(Math.random() * 30);
                            IsCoolDown = 0;
                            CoolDown.add(msg.author.id);
                            setTimeout(()=>{
                                CoolDown.delete(msg.author.id)
                            },30000)
                        }
                        break;
                    case 2:
                        if(CoolDown.has(msg.author.id)){
                            msg.reply('You are too tired to work now. Pls wait 60 seconds per work');
                            var IsCoolDown = 1;
                        }else{
                            var rmoney = Math.floor(Math.random() * 60);
                            IsCoolDown = 0;
                            CoolDown.add(msg.author.id);
                            setTimeout(()=>{
                                CoolDown.delete(msg.author.id)
                            },60000)
                        }
                        break;
                case 3:
                        if(CoolDown.has(msg.author.id)){
                            msg.reply('You are too tired to work now. Pls wait 10 seconds per work');
                            var IsCoolDown = 1;
                        }else{
                            var rmoney = Math.floor(Math.random() * 10);
                            IsCoolDown = 0;
                            CoolDown.add(msg.author.id);
                            setTimeout(()=>{
                                CoolDown.delete(msg.author.id)
                            },10000)
                        }
                        break;
                case 3:
                        if(CoolDown.has(msg.author.id)){
                            msg.reply('You are too tired to work now. Pls wait 40 seconds per work');
                            var IsCoolDown = 1;
                        }else{
                            var rmoney = Math.floor(Math.random() * 40);
                            IsCoolDown = 0;
                            CoolDown.add(msg.author.id);
                            setTimeout(()=>{
                                CoolDown.delete(msg.author.id)
                            },40000)
                        }
                        break;   
                }
            if(IsCoolDown == 0){
                Client.userdata [msg.author.username] = {
                    nowmoney: Client.userdata[msg.author.username].nowmoney + rmoney,
                    jobid: Client.userdata[msg.author.username].jobid                    
                }
                fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
                    if(err) msg.reply('Type dui start to begin');
                    const embeds = new MessageEmbed()
                    .setTitle('Earned:')
                    .setDescription(msg.author.username +': '+rmoney + '$')
                    .setColor(0x00FFE8);
                    msg.channel.send(embeds);
                })
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
            }
        break;
        case 'avatar':
        case 'avt':
            msg.reply(msg.author.displayAvatarURL());
        break;
        case 'start':
            if(Client.userdata [msg.author.username] == null){
                Client.userdata [msg.author.username] = {
                    cooldowntime: 0,
                    jobid: 0,
                    nowmoney: 0,
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
            switch (after[1]) {
                case '1':
                    msg.reply('You chose Chopping woods');
                    Client.userdata[msg.author.username].jobid = 1;
                    fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
                        if(err) msg.reply('Press dui start to begin');})
                    break;
                case '2':
                    msg.reply('You chose Fishing');
                    Client.userdata[msg.author.username].jobid = 2;
                    fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
                        if(err) msg.reply('Press dui start to begin');})
                    break;
                case '3':
                    msg.reply('You chose Waiter');
                    Client.userdata[msg.author.username].jobid = 3;
                    fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
                        if(err) msg.reply('Press dui start to begin');})
                    break;
                case '4':
                    msg.reply('You chose Cleaner');
                    Client.userdata[msg.author.username].jobid = 4;
                    fs.writeFile ("./userdata.json", JSON.stringify (Client.userdata, null, 4), err => {
                        if(err) msg.reply('Press dui start to begin');})
                    break;
                default :
                    msg.reply('Wrong Command :v');
                    break;     
            }
        break;
        case 'p':
        case 'play':
            var voiceChannel = msg.member.voice.channel;
            if (!voiceChannel) return msg.channel.send('You need to be in a voice channel to play music!');
	        const permissions = voiceChannel.permissionsFor(msg.client.user);
            if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
                return msg.channel.send('I need the permissions to join and speak in your voice channel!');
            }
            const songInfo = ytdl.getInfo(after[1]);
            const song = {
                title: songInfo.title,
                url: songInfo.video_url,
            };
            if (!serverQueue) {
                const queueContruct = {
                    textChannel: msg.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 10,
                    playing: true,
                };
        
                queue.set(msg.guild.id, queueContruct);
        
                queueContruct.songs.push(song);
        
                try {
                    var connections = voiceChannel.join();
                    queueContruct.connection = connections;
                    play(msg.guild, queueContruct.songs[0]);
                } catch (err) {
                    console.log(err);
                    queue.delete(msg.guild.id);
                    return msg.channel.send(err);
                }
            }else {
                serverQueue.songs.push(song);
                console.log(serverQueue.songs);
                return msg.channel.send(`${song.title} has been added to the queue!`);
            }
            break;
    }  
})
bot.login(process.env.BOT_TOKEN);
