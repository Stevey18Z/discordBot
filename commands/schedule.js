module.exports = {
    name: 'schedule',
    description: 'Shows a current schedule of SteveyZ\'s stream.',
    cooldown: 5,
    execute(message, args)
    {
        message.channel.send(
            '**All times are in CST**\n**M-Th**: 7-9pm \n**F**: 7-10pm\n**Su**: 2-6pm'
        );
    }
}