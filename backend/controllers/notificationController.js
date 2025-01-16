const axios = require('axios');
const slackWebhookURL = 'https://hooks.slack.com/services/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';

const sendNotification = (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Send Slack notification
    axios.post(slackWebhookURL, { text: message })
        .then(() => console.log('Slack notification sent'))
        .catch((error) => console.error('Slack error:', error));

    res.status(200).json({ success: true, message: 'Notification sent!' });
};

module.exports = { sendNotification };

 
