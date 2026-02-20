// Server for Metabase JWT token generation
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const METABASE_SECRET_KEY = "29e4a58199be07911d4995abcf5cd288558463604557b9b00e24da82a17d223a";
const PORT = 3000;

// Endpoint for Miles dashboard (dashboard 4)
app.get('/api/metabase-token', (req, res) => {
  const payload = {
    resource: { dashboard: 4 },
    params: {},
    exp: Math.round(Date.now() / 1000) + (10 * 60), // 10 minute expiration
    iat: Math.round(Date.now() / 1000)
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);
  res.json({ token });
});

// Endpoint for Growing Like Weeds dashboard (dashboard 5)
app.get('/api/metabase-token-growing', (req, res) => {
  const payload = {
    resource: { dashboard: 5 },
    params: {},
    exp: Math.round(Date.now() / 1000) + (10 * 60), // 10 minute expiration
    iat: Math.round(Date.now() / 1000)
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
