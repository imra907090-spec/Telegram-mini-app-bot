// bot.js
const { Telegraf } = require('telegraf');
const config = require('./config'); // কনফিগারেশন ফাইলটি এখানে ইমপোর্ট করা হলো

const bot = new Telegraf(config.BOT_TOKEN);

bot.start((ctx) => {
    const isAdmin = ctx.from.id === config.ADMIN_ID;

    const keyboard = [
        [{ text: "ওপেন অ্যাপ", web_app: { url: config.FRONTEND_URL } }]
    ];

    // যদি এডমিন হয়, তবেই এডমিন বাটন দেখাবে
    if (isAdmin) {
        keyboard.push([{ text: "এডমিন প্যানেল", web_app: { url: config.ADMIN_PANEL_URL } }]);
    }

    ctx.reply('স্বাগতম! নিচে আপনার বাটনগুলো দেওয়া হলো:', {
        reply_markup: { inline_keyboard: keyboard }
    });
});

bot.launch();
console.log("বট চালু হয়েছে!");
