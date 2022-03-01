const MessagingResponse = require('twilio').twiml.MessagingResponse;

export default function handler(req, res) {
    const twiml = new MessagingResponse();
    twiml.message('TwilioQuest rules');
    res.status(200).setHeader('Content-Type', 'text/xml').send(twiml.toString());
}
