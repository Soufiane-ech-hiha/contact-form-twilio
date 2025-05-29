# Contact Form with Twilio SMS :envelope_with_arrow:

This is a simple contact form web app that sends an SMS to the website owner when a user submits a message.  
It is built with **Node.js**, **Express**, and **Twilio** for SMS functionality.

---

## :tools: Features

- Collects user's name, phone number, and message.
- Sends an SMS to your Twilio-verified phone number.
- Built with clean, minimal HTML and JavaScript on the frontend.

---

## :rocket: How It Works

1. User fills out the contact form (`index.html`).
2. The frontend sends a `POST` request with the form data to the `/send-sms` endpoint.
3. The backend (Node.js + Express) uses Twilio to send an SMS to your number.
4. You receive the message directly on your phone.

---

## :wrench: Setup Instructions

1. **Clone this repository:**

    ```bash
    git clone https://github.com/Soufiane-ech-hiha/contact-form-twilio.git
    cd contact-form-twilio
    ```

2. **Create and fill your `.env` file:**

    Create a `.env` file in the root with the following content:

    ```env
    TWILIO_SID=your_account_sid
    TWILIO_TOKEN=your_auth_token
    TWILIO_PHONE=your_twilio_phone_number
    MY_PHONE=your_verified_number_to_receive_sms
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    node server.js
    ```

5. **Open the form in browser:**

    Open `index.html` with your browser. You can also host it on localhost with a static server.

---

## :package: Tech Stack

- Node.js
- Express
- Twilio API
- Vanilla HTML/CSS/JS

---

## :mobile_phone: Example SMS

When someone fills out the form, you will receive an SMS like this:
