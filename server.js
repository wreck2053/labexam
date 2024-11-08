const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/health', (req, res) => {
  const isHealthy = process.env.HEALTH_STATUS === 'healthy'; // Use an environment variable to toggle
  if (isHealthy) {
    res.status(200).send('Healthy');
  } else {
    res.status(500).send('Unhealthy');
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
