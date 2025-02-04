const express = require('express');
const cors = require('cors');
const client = require('prom-client'); // Import Prometheus client
const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// Enable Prometheus metrics collection
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Expose /metrics endpoint for Prometheus
app
