import express from 'express'; 
import { serverSetup } from './server-setup';

export const app = express();
app.get('/api/test', (_, res) => 
    res.json({ greeting: "Hello" }
))

serverSetup(app);

if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/dist'
    app.use(express.static(frontendFiles))
    app.get('/*', (_, res) => {
      res.send(frontendFiles + '/index.html')
    })
    app.listen(process.env['PORT'])
  }
  