// server/index.js
const express = require('express');
const os = require('os');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public')); // Serve HTML
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    uptime: process.uptime().toFixed(2),
    logs: ['Started', 'Ready', 'Listening']
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Lyrical AI server running at http://localhost:${PORT}`));
