const mongoose = require('mongoose');

const scheduledMessageSchema = new mongoose.Schema({
    message: String,
    scheduledTime: Date,
    isSent: { type: Boolean, default: false }
});

module.exports = mongoose.model('ScheduledMessage', scheduledMessageSchema);
