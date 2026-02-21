const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

const deploymentData = {
    project: "DevOps Deployment Tracker",
    environment: process.env.ENVIRONMENT || "Development",
    version: "1.0.0",
    buildStatus: "Success",
    deployedAt: new Date().toISOString(),
    server: os.hostname()
};

app.get('/', (req, res) => {
    res.json(deploymentData);
});

app.get('/health', (req, res) => {
    res.status(200).send("Application is healthy ✅");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
