import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    'status': `Working!`,
  });
});

app.listen(8080, () => console.log('Product service is listening!'));
