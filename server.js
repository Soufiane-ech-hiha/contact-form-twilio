require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const toPhone = process.env.MY_PHONE;

app.post('/send-sms', async (req, res) => {
  const { name, phone, message } = req.body;
  try {
    await client.messages.create({
      body: `New form from ${name} (${phone}): ${message}`,
      from: process.env.TWILIO_PHONE,
      to: toPhone,
    });
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));