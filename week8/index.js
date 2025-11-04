const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get('/set-language/:lang', (req, res) => {
    const language = req.params.lang; 
    res.cookie('lang', language, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    res.send(`Language preference set to: **${language}**. Check your cookies!`);
});

app.get('/', (req, res) => {
    const preferredLang = req.cookies.lang || 'en'; 
    res.send(`

        <h2>Welcome!</h2>
        <p>Your stored language preference is: *${preferredLang}*</p>
        <hr>
        <p>
            Change preference:
            <a href="/set-language/en">English (en)</a> |
            <a href="/set-language/es">Español (es)</a> |
            <a href="/set-language/fr">Français (fr)</a>
        </p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});