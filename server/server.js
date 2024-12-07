const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


const PORT = process.env.PORT || 8000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow requests only from this origin
    credentials: true, // Allow credentials such as cookies
  })
);

// Endpoint to handle form submissions
app.post('/api/submit', async (req, res) => {
  try {
    const formData = req.body; // Get the form data from the request body
    const message = `
      New form submission:
      ${JSON.stringify(formData, null, 2)} // Format the message for Telegram
    `;

    await sendToTelegram(message); // Send the message to Telegram
    res.json({ success: true, message: 'Form submitted successfully!' }); // Respond to the client
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'An error occurred' }); // Handle errors
  }
});

// Function to send the message to Telegram
async function sendToTelegram(message) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN; // Get the bot token from env
  const chatId = process.env.TELEGRAM_CHAT_ID; // Get the chat ID from env
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`; // Construct the API URL

  console.log('Sending message to Telegram:', message); // Log the message being sent

  try {
    const response = await axios.post(url, {
      chat_id: chatId, // Specify the chat ID
      text: message, // Specify the message text
    });
    console.log('Telegram API response:', response.data); // Log the response from Telegram
  } catch (err) {
    console.error('Telegram API error:', err.response?.data); // Log any error responses from Telegram
    throw err; // Rethrow the error to be handled in the route
  }
}



app.listen(process.env.PORT || PORT, () => {
    console.log(`Go catch the server at PORT ${process.env.PORT || PORT}`);
  })