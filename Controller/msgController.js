// controllers/messageController.js

const ScheduledMessage = require('../Models/scheduleMsg');

const scheduleMsg = async (req, res) => {
    const { message, day, time } = req.body;

    // Validate inputs
    if (!message || !day || !time) {
        return res.status(400).send('All fields (message, day, time) are required.');
    }

    try {
        // Construct the scheduled time
        const [hour, minute] = time.split(':');
        const scheduledTime = new Date(day);
        scheduledTime.setHours(hour, minute, 0);

        // Save the message to the database
        const scheduledMessage = new ScheduledMessage({ message, scheduledTime });
        await scheduledMessage.save();

        res.status(200).send('Message scheduled successfully');
    } catch (error) {
        res.status(500).send('An error occurred while scheduling the message');
    }
};


module.exports = {scheduleMsg}