const http = require('node:http');

const port = Number(process.env.PORT || 3000);
const apiUrl = process.env.API_URL || 'http://localhost:3001';

http
  .createServer(async (req, res) => {
    try {
      // This outgoing call is what draws the storefront-web -> orders-api line on the map.
      const r = await fetch(`${apiUrl}/orders`);
      const body = await r.json();
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end(`Orders in progress: ${body.orders}\n`);
    } catch (err) {
      res.writeHead(502, { 'content-type': 'text/plain' });
      res.end(`orders-api unavailable: ${err.message}\n`);
    }
  })
  .listen(port, () => console.log(`storefront-web on :${port}`));
