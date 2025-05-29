# Contact Form with Twilio SMS 📩

This app sends an SMS to the site owner when someone fills out a contact form. Built with Node.js and Twilio.

## How It Works
1. Visitor fills out form.
2. Server sends SMS to your number.

## Setup

1. Clone this repository
2. Copy `.env.example` to `.env` and add your Twilio credentials
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the server:
    ```bash
    node server.js
    ```

## Usage
- Open `index.html` in your browser.
- Fill out and submit the form.
- You should receive an SMS on your phone.