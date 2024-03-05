const twilio = require('twilio');

const accountSid = '.......................'; // Add your AccountSid
const authToken = '........................'; // Add your authToken
const phoneNumber = '.............'; // Add your Twilio Phone-number

const client = twilio(accountSid, authToken);

const sendSMS = (to, message) => {
  client.messages
    .create({
      body: message,
      from: phoneNumber,
      to,
    })
    .then((message) => console.log(`SMS sent: ${message.sid}`))
    .catch((error) => console.error('Error sending SMS:', error));

};

const recipientNumber = '+919689492748';
const messageText = 'Hello, this is a test message!';

sendSMS(recipientNumber, messageText);
