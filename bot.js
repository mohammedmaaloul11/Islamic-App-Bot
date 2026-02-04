const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

// رابط التطبيق الخاص بك من Render
const web_link = "https://islamic-app-bot-1.onrender.com"; 

// عند إرسال /start، يظهر زر واحد فقط يفتح التطبيق
bot.start((ctx) => {
    ctx.reply('مرحباً بك في بوت القرآن والأذكار الشامل ❤️\nاضغط على الزر أدناه لفتح التطبيق:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "فتح تطبيق القرآن الكريم 🌙", web_app: { url: web_link } }]
            ]
        }
    });
});

// تشغيل السيرفر لعرض واجهة التطبيق
app.use(express.static(path.join(__dirname, '/')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ التطبيق يعمل الآن على منفذ ${PORT}`);
});

bot.launch();
