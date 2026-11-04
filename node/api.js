const http = require('node:http');

const port = Number(process.env.PORT || 3001);

http
  .createServer((req, res) => {
    // A little variable latency so Health and the scorecard have something to show.
    const delay = 20 + Math.random() * 80;
    setTimeout(() => {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ orders: Math.floor(Math.random() * 10) }));
    }, delay);
  })
  .listen(port, () => console.log(`orders-api on :${port}`));
