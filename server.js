const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;
// 👇 Vervang deze URL door de echte stream URL van jouw radio
const STREAM_URL = 'http://85.215.152.155:8000/dab.mp3';

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'no-cache');
  request(STREAM_URL).pipe(res);
});

app.listen(PORT, () => console.log(`Proxy draait op poort ${PORT}`));
