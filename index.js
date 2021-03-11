import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 8080

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!!! 1",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
