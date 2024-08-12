const express = require('express');
const osUtils = require('node-os-utils');
const { exec } = require('child_process');
const router = require('./Router/routeMsg')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

const port = 3300;

app.use('/api',router)


mongoose.connect('mongodb://localhost:27017/scheduledMessagesDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));




  // Function to restart the server using Node.js
    function restartServer() {
        console.log('Restarting server due to high CPU usage...');
        process.exit(1); 
    }

// Monitor CPU Usage
setInterval(() => {
    osUtils.cpu.usage().then(cpuPercentage => {
        console.log(`CPU Usage: ${cpuPercentage}%`);
        if (cpuPercentage > 70) {
            restartServer();
        }
    });
}, 5000);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



