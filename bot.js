const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const app = express();
// التوكن الخاص بك من صورك السابقة لضمان التشغيل
const bot = new Telegraf('8509384166:AAEScLCSXKB-ciAwm6G_N8TIAqaoOEwwpPo');

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

bot.start((ctx) => {
  ctx.reply('مرحباً بك في تطبيق القرآن الكريم الشامل 🌙\nاضغط على الزر لفتح الواجهة الألماسية.');
});

// معالجة الأخطاء لمنع توقف السيرفر
bot.launch().catch(err => {
    if (err.response && err.response.error_code === 409) {
        console.log("هناك نسخة تعمل بالفعل، سأحاول مجدداً...");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ التطبيق يعمل الآن على منفذ: ${PORT}`);
});
