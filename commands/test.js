module.exports = {
    name: 'test',
    description: 'Testing bot functionality',
    cooldown: 0,
    args: false,
    permission: ['admin'],
    execute(message, args)
    {   
        message.member.voice.setChannel(message.guild.channels.cache.find(chan => chan.name === 'Team 1'));

    }
}