const twilio = require('twilio');

const accountSid = 'ACe9386551619f8edc6c0d6077727bf303';
const authToken = '08df66dd3b21f67227ca5840ae390559';
const phoneNumber = '+16572377159';

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
