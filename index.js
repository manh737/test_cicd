import express from 'express'
const app = express();

const port = 8080

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!!!",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});