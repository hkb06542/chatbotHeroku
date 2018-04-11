//Developer @ Hemant Barapatre
var Botkit = require('Botkit');

var controller = Botkit.sparkbot({
    debug: true,
    log: true,
    public_address: 'https://evening-lake-93977.herokuapp.com',
    ciscospark_access_token: 'ZmIyNjk0YjEtNzk2Yy00MzI5LTkxYzYtNjU4MGE1ZWZkOGQ1NmJiMWExZjMtNzBl',
    secret: 'wowwowclear'
});


var bot = controller.spawn({
});

var webserver = controller.setupWebserver(process.env.PORT || 3001, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log("SPARK: Webhooks set up!");
    });
});

controller.hears('hello', 'direct_message,direct_mention', function(bot, message) {
    bot.reply(message, 'Hi');
});

controller.on('direct_mention', function(bot, message) {
    bot.reply(message, 'You mentioned me and said, "' + message.text + '"');
});

controller.on('direct_message', function(bot, message) {
    bot.reply(message, 'I got your private message. You said, "' + message.text + '"');
});

console.log(webserver);
