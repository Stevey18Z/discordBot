module.exports = {
    name: 'announcements',
    description: 'Turn announcements on or off.',
    cooldown: 5,
    usage: '[ on | off ]',
    args: true,
    execute(message, args)
    {
        let onoff = args[0].toLowerCase()
        let roleToChange = message.guild.roles.cache.find(role => role.name === 'announcement_crew');

        if (!['on', 'off'].includes(onoff))
        {
            return message.reply(`usage of this command is ``!announcements [ on | off ]\``);
        }

        if(onoff === 'on')
        {
            if(message.member.roles.cache.find(role => role === roleToChange))
            {
                return message.reply('you are already receiving announcements in this server.');
            }
            try
            {
                message.member.roles.add(roleToChange);
                message.reply('you will now receive channel announcements!');
            }
            catch(error)
            {
                console.error(error);
                message.reply('there was an issue executing that command.');
            }
        }
        else if(onoff === 'off')
        {
            if(!message.member.roles.cache.find(role => role === roleToChange))
            {
                return message.reply('you already have announcements turned off.');
            }
            try
            {
                message.member.roles.remove(roleToChange);
                message.reply('you will no longer receive channel announcements.');
            }
            catch(error)
            {
                console.error(error);
                message.reply('there was an issue executing that command.');
            }
        }
        else
        {
            message.reply('there was an issue with the arguments. I don\'t know what happened.')
        }
    }
}