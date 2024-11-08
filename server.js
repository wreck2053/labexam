const express = require('express');
const app = express();

let healthCheckStatus = 'healthy'; // Default status to healthy

// Health check endpoint with UI
app.get('/health', (req, res) => {
  const { status } = req.query;

  // Update health status based on input
  if (status === '0') {
    healthCheckStatus = 'unhealthy';
  } else if (status === '1') {
    healthCheckStatus = 'healthy';
  }

  // Display form and health status
  const htmlResponse = `
    <html>
      <body>
        <h1>Health Check Status: ${healthCheckStatus === 'healthy' ? '🟢 Healthy' : '🔴 Unhealthy'}</h1>
        <form action="/health" method="get">
          <label><input type="radio" name="status" value="1"> Success (Healthy)</label><br>
          <label><input type="radio" name="status" value="0"> Failure (Unhealthy)</label><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `;

  // Respond based on current health status
  if (healthCheckStatus === 'healthy') {
    res.status(200).send(htmlResponse);
  } else {
    res.status(500).send(htmlResponse);
  }
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
