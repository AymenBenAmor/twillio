const MessagingResponse = require('twilio').twiml.MessagingResponse;

export default function handler(req, res) {
    const twiml = new MessagingResponse();
    twiml.message('This is a test and TwilioQuest rules is the right answer!');
    res.status(200).setHeader('Content-Type', 'text/xml').send(twiml.toString());
}
