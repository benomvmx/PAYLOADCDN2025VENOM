const express = require('express');
const { createProxyServer } = require('node-ws-reverse-proxy');

const app = express();
const port = process.env.PORT || 8080;

createProxyServer({
  server: app,
  path: '/app53',
  target: {
    host: '34.220.200.164',
    port: 443,
    protocol: 'tls', // TLS passthrough
  },
  ws: true
});

app.get('/', (req, res) => {
  res.send('Proxy WebSocket TLS is running');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});