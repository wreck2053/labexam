// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const environment = process.env.ENV || "unknown";

app.get('/', (req, res) => {
  res.send(`Hello from the ${environment} environment!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} in the ${environment} environment`);
});
