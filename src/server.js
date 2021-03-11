import express from 'express';
import cors from 'cors';
import models from './models/index.js ';

const app = express();

app.use(cors());

const port = 8080

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!!! 1",
  });
});

models.sequelize.sync({})
.then(() => {
  console.info('Database sync complete.')

  console.info('Starting server...')

  // Start web server
  server.listen(port, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      console.info(`Server is listening on port: ${port}`)
    }
  })
})
.catch(() => {
  console.error('ERROR - Unable to sync database.')
  console.error('ERROR - Server not started.')
})
