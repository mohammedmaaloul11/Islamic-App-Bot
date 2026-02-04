const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// تشغيل ملفات الواجهة (HTML)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// أوامر البوت
bot.start((ctx) => {
  ctx.reply('مرحباً بك في تطبيق القرآن الكريم الشامل 🌙\nاضغط على الزر في القائمة لفتح التطبيق.');
});

bot.launch();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
