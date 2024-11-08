const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Root endpoint to display a message depending on the environment (Blue or Green)
app.get('/', (req, res) => {
  if (process.env.ENV === 'green') {
    res.send('<h1>Welcome to the Green Environment!</h1><p>This page is served from the Green environment.</p>');
  } else if (process.env.ENV === 'blue') {
    res.send('<h1>Welcome to the Blue Environment!</h1><p>This page is served from the Blue environment.</p>');
  } else {
    res.send('<h1>Welcome to the Unknown Environment!</h1>');
  }
});

// Health check endpoint to return health status based on the HEALTH_STATUS environment variable
app.get('/health', (req, res) => {
  const isHealthy = process.env.HEALTH_STATUS === 'healthy'; // Use an environment variable to toggle health
  if (isHealthy) {
    res.status(200).send('Healthy');
  } else {
    res.status(500).send('Unhealthy');
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
