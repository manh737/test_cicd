import './configs/config.js';
import express from 'express';
import cors from 'cors';
import models from './models/index.js';
import router from './routes/router.js';


const app = express();
const port = process.env.PORT || 3000;
//setup cors
app.use(cors());

//setup router
app.use(router);


//sync database
models.sequelize
.sync({})
.then(() => {
  console.info('Database sync complete.')

  console.info('Starting server...')

  // Start web server
  app.listen(port, (error) => {
    if (error) {
      console.error('Unable to start server.')
    } else {
      console.info(`Server is listening on port: ${port}`)
    }
  })
})
.catch(() => {
  console.error('Unable to sync database.')
  console.error('Server not started.')
})
