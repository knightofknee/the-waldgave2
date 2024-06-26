const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
import '../firebase.js';

app.prepare().then(() => {
  const server = express()

  server.use((req, res, next) => {
    const hostname = 'waldgrave.com'

    if (req.headers['x-forwarded-proto'] === 'http' || req.hostname === 'www.waldgrave.com') {
      res.redirect(301, `https://${hostname}${req.url}`);
      return;
    }

    res.setHeader('strict-transport-security', 'max-age=31536000; includeSubDomains; preload');
    next();
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
